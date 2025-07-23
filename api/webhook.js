// /api/webhook.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 處理 LINE 傳來的 webhook 資料
    console.log(req.body);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}
