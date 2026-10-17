
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const login = process.env.DATAIMPULSE_LOGIN;
  const password = process.env.DATAIMPULSE_PASSWORD;

  if (!login || !password) {
    return res.status(503).json({
      error: "Konfigurasi DataImpulse belum diatur di Vercel."
    });
  }

  try {
    const proxyUrl =
      `http://${encodeURIComponent(login)}:${encodeURIComponent(password)}@gw.dataimpulse.com:823`;

    const agent = new HttpsProxyAgent(proxyUrl);
    const response = await axios.get("https://ipwho.is/", {
      httpsAgent: agent,
      proxy: false,
      timeout: 20000
    });

    const data = response.data;

    if (!data || data.success === false) {
      return res.status(502).json({ error: "Data IP tidak tersedia." });
    }

    return res.status(200).json({
      ip: data.ip || null,
      country: data.country || null,
      city: data.city || null
    });
  } catch (error) {
    console.error("Proxy check failed:", error.message);
    return res.status(502).json({
      error: "Koneksi proxy gagal. Periksa konfigurasi DataImpulse."
    });
  }
}
