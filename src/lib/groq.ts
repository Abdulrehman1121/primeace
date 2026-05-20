/**
 * Groq API integration placeholder.
 *
 * To wire up the live Groq integration:
 *
 * 1. Add your Groq API key as a secret named GROQ_API_KEY
 *    (use the secrets tool — never hardcode it).
 *
 * 2. Create a server function (e.g. `src/lib/chat.functions.ts`) that
 *    reads `process.env.GROQ_API_KEY` inside its `.handler()` and
 *    proxies the request to https://api.groq.com/openai/v1/chat/completions.
 *
 * 3. Call that server function from `sendMessageToGroq` below using
 *    `useServerFn`. Replace the simulated response with the real one.
 *
 * The frontend purposely never sees the API key.
 */

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function sendMessageToGroq(
  messages: ChatMessage[],
): Promise<string> {
  // TODO: replace this stub with a call to your Groq-backed server function.
  //
  // Example wiring (uncomment when the server fn is in place):
  //
  //   import { useServerFn } from "@tanstack/react-start";
  //   import { chatWithGroq } from "@/lib/chat.functions";
  //   const fn = useServerFn(chatWithGroq);
  //   const { reply } = await fn({ data: { messages } });
  //   return reply;

  await new Promise((r) => setTimeout(r, 900));

  const lastUser = messages.filter((m) => m.role === "user").at(-1)?.content ?? "";

  if (/price|cost|budget|quote/i.test(lastUser)) {
    return "Projects typically range from $8k for an MVP web build up to enterprise engagements. Share a few details on the Contact page and our team will send a tailored quote within 24 hours.";
  }
  if (/service|offer|do you/i.test(lastUser)) {
    return "PRIMEACE delivers custom software, web & mobile apps, AI automation, cloud/DevOps, UI/UX and ongoing support. Which one are you exploring?";
  }
  if (/ai|chatbot|automation/i.test(lastUser)) {
    return "We build production-grade AI agents on Groq, OpenAI and Claude — from internal copilots to customer-facing chatbots. Want a 20-minute discovery call?";
  }
  return "Thanks for reaching out — once the Groq API key is wired up I'll be answering live. Meanwhile, the team is one form away on the Contact page.";
}
