export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
        Contact Us
      </h1>
      <p className="mt-4 text-foreground/70">
        Have a project in mind? Get in touch with us.
      </p>
      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-1 block w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y"
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-accent px-8 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
