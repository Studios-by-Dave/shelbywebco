import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Elfsight AI Chatbot
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    const div = document.createElement('div');
    div.className = "elfsight-app-fe41bcb2-9bed-4b99-ab66-5f076ba6c148";
    div.setAttribute('data-elfsight-app-lazy', '');
    document.body.appendChild(div);
  }, []);

  return null;
}
