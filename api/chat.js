import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Bật CORS (Cross-Origin Resource Sharing)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ message: "Chưa cấu hình GEMINI_API_KEY trên Vercel." });
    }

    // Khởi tạo SDK
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // Hoặc gemini-1.5-flash
      systemInstruction: `Bạn là trợ lý ảo AI trên trang Portfolio của Lê Đức Nam (Nam Lê), một Full-stack Developer. 
Mục tiêu: Trả lời câu hỏi của khách truy cập về kỹ năng, dự án, hoặc cách liên hệ với Nam. 
Tính cách: Thân thiện, lịch sự, chuyên nghiệp, trả lời ngắn gọn, đánh trọng tâm. Hãy xưng là "mình" hoặc "em" tùy ngữ cảnh.
Một số thông tin về Nam (nếu ai hỏi thì lấy data này trả lời):
- Kỹ năng: React, Node.js, Tailwind CSS, PHP, TypeScript.
- Liên hệ: Vui lòng nhắn qua tính năng Contact form trên trang web hoặc qua số điện thoại/email cung cấp ở cuối trang.
`
    });

    // Format lại mảng history từ Frontend (dạng { role: 'user' | 'model', text: string })
    // sang dạng format chuẩn của Gemini API ({ role: 'user' | 'model', parts: [{ text: string }] })
    const formattedHistory = (history || []).map((msg) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return res.status(200).json({ text: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ message: "Lỗi kết nối AI hoặc thiếu API Key." });
  }
}
