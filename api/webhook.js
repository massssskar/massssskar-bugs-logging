export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  const webhookURL = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookURL) return res.status(500).json({ error: "Webhook not set" });

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  res.status(200).json({ success: true });
}
