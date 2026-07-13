import { useEffect } from 'react';

const JOTFORM_EMBED_SRC = 'https://cdn.jotfor.ms/agent/embedjs/019f5a0390f870008ee0f2a9fff4d42abe7f/embed.js';

export default function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${JOTFORM_EMBED_SRC}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = JOTFORM_EMBED_SRC;
    script.async = true;
    script.setAttribute('data-chat-provider', 'jotform-agent');
    document.body.appendChild(script);
  }, []);

  return null;
}
