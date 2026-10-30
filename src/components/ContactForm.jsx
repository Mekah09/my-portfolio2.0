import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiMessageSquare } from "react-icons/fi";

const inputClassName =
  "mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-accent focus:ring-3 focus:ring-accent/10";

/**
 * Frontend-only contact form. Connect your POST request inside handleSubmit.
 * The optional onPrepare callback receives { name, email, subject, message }.
 * No request is made, and nothing is saved or cleared by this component.
 */
export default function ContactForm({ onPrepare }) {
  const [preparedMessage, setPreparedMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // Native required validation permits whitespace, so check trimmed values too.
    for (const fieldName of ["name", "email", "message"]) {
      const input = form.elements.namedItem(fieldName);
      if (!input.value.trim()) {
        input.setCustomValidity("Please fill in this field.");
        input.reportValidity();
        return;
      }
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      subject: formData.get("subject").trim(),
      message: formData.get("message").trim(),
    };

    // Add your backend POST integration here. Keep a real delivery response
    // separate from this local "prepared" state before showing a sent message.
    onPrepare?.(payload);
    setPreparedMessage(payload);
  }

  function handleInput(event) {
    event.target.setCustomValidity?.("");
    if (preparedMessage) setPreparedMessage(null);
  }

  return (
    <div className="rounded-2xl border border-line bg-white/65 p-6 sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-accent">
            A conversation starts here
          </p>
          <h3 className="mt-3 text-[27px] font-medium leading-tight tracking-[-.045em] text-ink">
            What are you thinking?
          </h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lilac/55 text-accent">
          <FiMessageSquare aria-hidden="true" size={19} />
        </span>
      </div>

      <form
        method="post"
        onSubmit={handleSubmit}
        onInput={handleInput}
        aria-label="Contact message"
        aria-describedby="contact-delivery-note"
        className="space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-[11px] font-semibold text-ink"
            >
              Your name <span className="text-accent">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your full name"
              className={inputClassName}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="text-[11px] font-semibold text-ink"
            >
              Email address <span className="text-accent">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="text-[11px] font-semibold text-ink"
          >
            Subject <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            maxLength={150}
            placeholder="A project, an opportunity, or just hello"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-[11px] font-semibold text-ink"
          >
            Your message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder="Tell me a little about what you have in mind…"
            className={`${inputClassName} min-h-36 resize-y leading-7`}
          />
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p
            id="contact-delivery-note"
            className="max-w-50 text-[10px] leading-5 text-muted"
          >
            Message delivery isn’t connected yet. Your message will stay here.
          </p>
          <button
            type="submit"
            className="motion-button group flex shrink-0 items-center gap-4 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-[11px] font-medium text-white transition hover:bg-accent"
          >
            Prepare message
            <span className="grid size-8 place-items-center rounded-full bg-lilac text-ink">
              <FiArrowUpRight
                aria-hidden="true"
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </button>
        </div>

        <div role="status" aria-live="polite" aria-atomic="true">
          {preparedMessage && (
            <div className="flex items-start gap-2.5 rounded-xl border border-accent/15 bg-lilac/35 p-4 text-[12px] leading-6 text-ink">
              <FiCheck
                aria-hidden="true"
                size={17}
                className="mt-1 shrink-0 text-accent"
              />
              <p>
                Your message is ready, {preparedMessage.name}. Delivery isn’t
                connected yet, so it hasn’t been sent. Your text is still in the
                form.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
