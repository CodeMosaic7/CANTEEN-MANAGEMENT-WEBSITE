import { useState } from "react";

export default function Support() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setTimeout(() => {
        setMessages([...messages, { text: input, sender: "user" }, { text: "Support will reply soon!", sender: "support" }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          Customer Support
        </h2>

        {/* Chat Box */}
        <div className="border p-4 h-64 overflow-y-auto rounded-md bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-1 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white ml-auto w-max" : "bg-gray-300 text-gray-900 w-max"}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-md focus:outline-none"
          />
          <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Send
          </button>
        </div>

        {/* Call Support */}
        <div className="text-center mt-4">
          <p className="text-gray-600">Need direct support?</p>
          <a href="tel:+1234567890" className="bg-green-600 text-white px-4 py-2 rounded-md inline-block mt-2 hover:bg-green-700">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
