import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for chat functionality
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-brand-dark border border-brand-sky/40 rounded-xl shadow-[0_0_20px_rgba(0,200,255,0.15)] mb-4">
          <div className="bg-gradient-to-r from-brand-sky to-brand-cyan p-4 rounded-t-xl">
            <h3 className="font-heading font-bold text-white">ShelbyBot</h3>
            <p className="text-white/80 text-sm">How can I help you today?</p>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-brand-darkest border border-brand-sky/20 rounded-lg p-3 mb-3">
              <p className="text-sm text-brand-sky/80">
                Hi! I'm ShelbyBot. Click here to start a conversation with our team!
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-brand-sky/20">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-brand-darkest border border-brand-sky/40 rounded-lg px-4 py-2 text-white placeholder-brand-sky/50 focus:outline-none focus:border-brand-cyan"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-gradient-to-r from-brand-sky to-brand-cyan text-white py-2 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-sky hover:bg-brand-cyan text-white p-4 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] transition-all duration-300"
        aria-label="Open chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  );
}
