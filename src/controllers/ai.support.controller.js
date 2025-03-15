import dotenv from "dotenv";
import axios from "axios";
import redis from "redis";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

// Redis client yaratish
const redisClient = redis.createClient();
await redisClient.connect();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// AI Support funksiyasi
export const getAiSupport = async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        // Agar sessionId bo'lmasa, yangi yaratish
        const chatSessionId = sessionId || uuidv4();

        if (!message) {
            return res.status(400).json({ success: false, error: "Xabar jo'natilmadi!" });
        }

        // tarixni saqlash
        let chatHistory = [];
        const storedHistory = await redisClient.get(`chat:${chatSessionId}`);

        if (storedHistory) {
            chatHistory = JSON.parse(storedHistory);
        }

        chatHistory.push({ role: "user", content: message });

        // Gemini API configuratsiyasi
        const geminiResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            { text: message }
                        ]
                    }
                ],
                generationConfig: {
                    maxOutputTokens: 100
                }
            }
        );

        const aiResponse = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Kechirasiz, javobni topa olmadim.";

        // AI javobini localga saqlash
        chatHistory.push({ role: "assistant", msg: aiResponse });

        // Historyni redisga saqlash
        await redisClient.setEx(`chat:${chatSessionId}`, 1800, JSON.stringify(chatHistory));

        res.json({
            success: true,
            sessionId: chatSessionId,
            response: aiResponse,
            chatHistory
        });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server xatosi" });
    }
};