"use client";

import { FormEvent, useMemo, useState } from "react";

const PHONE = "905416653499";
const PREFIX = "Merhaba, AHC Digital Solutions web sitenizden yazıyorum.";

export default function ContactTerminalForm() {
  const [message, setMessage] = useState("");
  const max = 420;

  const remaining = useMemo(() => max - message.length, [message]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const clean = message.trim();
    if (!clean) return;

    const text = `${PREFIX}\n\n${clean}`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="terminalForm" onSubmit={submit}>
      <div className="terminalPromptLine">
        <span className="terminalPromptLabel">AHC&gt;</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, max))}
          placeholder="Projenizi birkaç cümleyle anlatın..."
          rows={5}
          aria-label="Projenizi anlatın"
        />
</div>

      <div className="terminalFormBottom">
        <div className="terminalMeta">
          <span className="terminalStatus"><i/> bağlantı_hazır</span>
          <span>{remaining} karakter</span>
        </div>

        <button type="submit" disabled={!message.trim()} className="terminalSend">
          <svg className="terminalWaIcon" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3.2A12.4 12.4 0 0 0 5.4 22l-1.7 6.3 6.4-1.7A12.4 12.4 0 1 0 16 3.2Zm0 22.4c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.3-.4A10 10 0 1 1 16 25.6Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.9 1.3-.2 1.8-.9 2.1-1.7.3-.8.3-1.5.2-1.7-.1-.3-.3-.4-.6-.5Z"/>
          </svg>
          WHATSAPP'TAN GÖNDER
          <span>↗</span>
        </button>
      </div>
    </form>
  );
}
