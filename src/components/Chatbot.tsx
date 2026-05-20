import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { sendMessageToGroq, type ChatMessage } from "@/lib/groq";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi, I'm PRIMEACE Assistant. How can I help you today?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);
    try {
      const reply = await sendMessageToGroq(next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full btn-primary !p-0 animate-glow-pulse"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[540px] flex flex-col glass rounded-3xl overflow-hidden shadow-elevated animate-fade-in">
          <div className="px-5 py-4 border-b border-border/60 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <p className="font-semibold text-sm">PRIMEACE Assistant</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Online
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-br-sm"
                      : "bg-secondary/70 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary/70 px-4 py-2.5 rounded-2xl rounded-bl-sm">
                  <Loader2 size={16} className="animate-spin text-primary" />
                </div>
              </div>
            )}
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-border/60 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 bg-secondary/40 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="h-10 w-10 rounded-full btn-primary !p-0 disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
