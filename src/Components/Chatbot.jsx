import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import monkeyImage from "../assets/images/monkey.png";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBka-RUha-d1Tfa096G0UxbypFg_7sz1rg";

export default function ChatAi() {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([
    { text: "Hello! I am Sofia, your AI assistant. Ask me anything!", sender: "bot" }
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const userMessage = { text: question, sender: "user" };
    setChat((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const { data } = await axios.post(API_URL, { contents: [{ parts: [{ text: question }] }] });

      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.map((part) => part.text)?.join("\n") ||
        "No response received.";

      setChat((prev) => [...prev, { text: aiResponse, sender: "bot" }]);
    } catch (error) {
      setChat((prev) => [...prev, { text: "❌ Error fetching response. Try again.", sender: "bot" }]);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-10 right-6 h-[80vh] w-96 bg-white shadow-2xl z-50 flex flex-col rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://thumbs.dreamstime.com/b/cat-catbiral-bilai-billi-locking-tigers-262436829.jpg"
                  alt="AI Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>💬 Sofia - AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-blue-700 transition">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-2"
              style={{
                backgroundImage: `url(${monkeyImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              {chat.map(({ text, sender }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-3 rounded-lg max-w-[75%] ${
                    sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {sender === "bot" && (
                    <img
                      src="https://thumbs.dreamstime.com/b/cat-catbiral-bilai-billi-locking-tigers-262436829.jpg"
                      alt="AI Avatar"
                      className="w-6 h-6 rounded-full object-cover mb-1"
                    />
                  )}
                  {text}
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 rounded-lg bg-gray-100 text-gray-800 self-start flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </motion.div>
              )}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-gray-50 border-t flex items-center">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
                className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                placeholder="Ask me anything..."
                disabled={loading}
              />
              <button
                onClick={generateAnswer}
                disabled={!question.trim() || loading}
                className={`ml-3 p-2 rounded-lg transition ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
