"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const GREETING: Message = {
  role: "assistant",
  text: "Hi! 👋 I'm Yash's portfolio assistant.\n\nLeave your name and message — I'll forward it directly to Yash's inbox and he'll get back to you soon!",
};

const STAGE_PROMPTS = {
  name: "What's your name?",
  message: "Got it! What would you like to say to Yash?",
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="inline-block size-1.5 rounded-full bg-white/40 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={["flex gap-2 px-3", isUser ? "flex-row-reverse" : "flex-row"].join(" ")}>
      {/* Avatar */}
      <div
        className={[
          "shrink-0 size-6 rounded-full grid place-items-center text-xs font-bold code-mono mt-0.5",
          isUser ? "bg-sky-500/80 text-white" : "bg-violet-500/80 text-white",
        ].join(" ")}
      >
        {isUser ? "U" : "Y"}
      </div>

      {/* Bubble */}
      <div
        className={[
          "max-w-[80%] rounded-xl px-3 py-2 text-xs code-mono leading-relaxed whitespace-pre-wrap wrap-break-word",
          isUser
            ? "bg-sky-500/20 border border-sky-500/30 text-sky-100"
            : "bg-white/8 border border-white/10 text-white/80",
        ].join(" ")}
      >
        {msg.text}
      </div>
    </div>
  );
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [stage, setStage] = useState<"name" | "message" | "sent" | "error">("name");
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (stage !== "sent" && stage !== "error") {
      inputRef.current?.focus();
    }
  }, [stage]);

  function addAssistant(text: string, delay = 600) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: "assistant", text }]);
    }, delay);
  }

  async function handleSend() {
    const val = input.trim();
    if (!val || sending) return;
    setInput("");

    const userMsg: Message = { role: "user", text: val };
    setMessages(prev => [...prev, userMsg]);

    if (stage === "name") {
      setName(val);
      setStage("message");
      addAssistant(STAGE_PROMPTS.message);
      return;
    }

    if (stage === "message") {
      setSending(true);
      setTyping(true);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, message: val }),
        });
        setTyping(false);
        if (res.ok) {
          setStage("sent");
          setMessages(prev => [
            ...prev,
            {
              role: "assistant",
              text: `Thanks ${name || ""}! ✅\n\nYour message has been sent to Yash. He'll reply at the earliest. Have a great day!`,
            },
          ]);
        } else {
          setStage("error");
          setMessages(prev => [
            ...prev,
            {
              role: "assistant",
              text: "Hmm, something went wrong sending the message. Please try reaching Yash directly at yashsharma4841@gmail.com",
            },
          ]);
        }
      } catch {
        setTyping(false);
        setStage("error");
        setMessages(prev => [
          ...prev,
          {
            role: "assistant",
            text: "Network error. Please reach Yash directly at yashsharma4841@gmail.com",
          },
        ]);
      } finally {
        setSending(false);
      }
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function restart() {
    setMessages([GREETING]);
    setStage("name");
    setName("");
    setInput("");
  }

  const placeholder =
    stage === "name"
      ? "Your name…"
      : stage === "message"
        ? "Your message… (Enter to send)"
        : "";

  return (
    <div className="w-full min-h-0 flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <span className="text-violet-400 text-base leading-none">✦</span>
        <div>
          <div className="text-xs tracking-widest text-white/45 code-mono">EXTENSIONS</div>
          <div className="text-xs text-white/60 code-mono mt-0.5">Chat with Yash</div>
        </div>
        {(stage === "sent" || stage === "error") && (
          <button
            type="button"
            onClick={restart}
            title="Start new chat"
            className="ml-auto text-xs code-mono text-white/35 hover:text-white/70 transition border border-white/15 rounded px-2 py-0.5"
          >
            ↺ New
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto py-3 flex flex-col gap-3">
        {messages.map((m, i) => (
          <Bubble key={i} msg={m} />
        ))}
        {typing && (
          <div className="flex gap-2 px-3">
            <div className="shrink-0 size-6 rounded-full grid place-items-center text-xs font-bold code-mono mt-0.5 bg-violet-500/80 text-white">
              Y
            </div>
            <div className="bg-white/8 border border-white/10 rounded-xl">
              <TypingDots />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {stage !== "sent" && stage !== "error" && (
        <div className="border-t border-white/10 p-3">
          <div className="flex items-end gap-2 bg-white/6 border border-white/12 rounded-xl px-3 py-2 focus-within:border-sky-400/50 transition">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={sending}
              className="flex-1 resize-none bg-transparent text-xs code-mono text-white placeholder:text-white/30 outline-none leading-relaxed max-h-28 overflow-y-auto disabled:opacity-50"
              style={{ height: "auto" }}
              onInput={e => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
              }}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || sending}
              className="shrink-0 size-6 rounded-lg bg-sky-500/80 hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed grid place-items-center transition"
              aria-label="Send"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-white/20 code-mono">
            Enter ↵ to send · Shift+Enter for new line
          </p>
        </div>
      )}
    </div>
  );
}
