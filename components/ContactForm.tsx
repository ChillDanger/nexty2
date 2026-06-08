"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/submit-contact-form";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset the form
        (e.target as HTMLFormElement).reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    });
  };

  return (
    <div className="@container/form w-full max-w-md relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-3xl shadow-2xl shadow-black/30 p-6 @md/form:p-8">
      <h3 className="text-2xl font-medium tracking-tight text-white mb-8">
        Send a Message
      </h3>

      {status.type && (
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-sm text-white animate-in fade-in">
          {status.message}
        </div>
      )}

      <form className="space-y-3 @md/form:space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/50"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white placeholder:text-white/40 transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0"
            placeholder="Your name"
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white placeholder:text-white/40 transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0"
            placeholder="your.email@example.com"
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/50"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white placeholder:text-white/40 transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0"
            placeholder="What's this about?"
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/50"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 text-white placeholder:text-white/40 transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0"
            placeholder="Tell me about your project..."
            required
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-2xl bg-white px-6 py-4 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
