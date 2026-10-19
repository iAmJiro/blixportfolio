
import { useState } from "react";
import Button from "../components/Button";

const services = [
  {
    number: "01",
    title: "Wedding Photography",
    description:
      "Emotive storytelling for once-in-a-lifetime moments, from intimate ceremonies to unforgettable celebrations.",
  },
  {
    number: "02",
    title: "Portrait Photography",
    description:
      "Thoughtful portraits that reveal personality, character and authentic human connection.",
  },
  {
    number: "03",
    title: "Editorial & Commercial",
    description:
      "Cinematic visual narratives for brands, publications and creative campaigns.",
  },
  {
    number: "04",
    title: "Events & Lifestyle",
    description:
      "Natural documentation of the energy, emotion and atmosphere that make every event unique.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "The first steps into photography, exploring composition, light and visual storytelling.",
  },
  {
    year: "2020",
    title: "Finding My Style",
    description:
      "Developing a signature aesthetic shaped by cinematic imagery and authentic moments.",
  },
  {
    year: "2023",
    title: "Creative Collaborations",
    description:
      "Expanding into editorial projects, portraits and meaningful client partnerships.",
  },
  {
    year: "Today",
    title: "The Story Continues",
    description:
      "Continuing to explore new perspectives and create timeless photographic work.",
  },
];

function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* PAGE INTRO */}
      <section className="border-b border-outline bg-surface py-20 md:py-28">
        <div className="page-container">
          <p className="eyebrow mb-6">Behind the Lens</p>

          <h1 className="display-heading">
            The person
            <br />
            behind the <em className="text-gold">camera.</em>
          </h1>

          <p className="body-copy mt-7 max-w-xl">
            A little about my journey, creative philosophy
            and the stories I love to tell.
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="section-padding">
        <div className="page-container grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="photo-placeholder h-[480px] sm:h-[650px]">
              <span className="photo-placeholder-label">
                Photographer Headshot
              </span>
            </div>

            <div className="absolute -bottom-5 -right-3 hidden border border-outline bg-surface px-8 py-5 sm:block">
              <p className="font-display text-3xl text-gold">
                Est. 2018
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                Capturing stories
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">Hello, I'm</p>

            <h2 className="section-heading">
              PHOTOGRAPHER
              <br />
              <em className="text-gold">NAME.</em>
            </h2>

            <div className="mt-8 space-y-5">
              <p className="body-copy">
                I'm a photographer passionate about capturing
                authentic moments, beautiful light and the
                unique stories that connect us.
              </p>

              <p className="body-copy">
                My journey began with a simple curiosity
                about the world and the desire to preserve
                meaningful experiences through imagery.
              </p>

              <p className="body-copy">
                Today, I approach every project with the
                same curiosity, care and attention to detail.
                Whether photographing a wedding, a portrait
                or an editorial story, my goal is to create
                work that feels honest and timeless.
              </p>
            </div>

            <div className="mt-9">
              <Button to="/gallery">
                Explore My Work ↗
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-surface">
        <div className="page-container">
          <p className="eyebrow mb-5">What I Do</p>

          <h2 className="section-heading mb-14">
            My <em className="text-gold">expertise.</em>
          </h2>

          <div className="grid gap-px overflow-hidden border border-outline bg-outline md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-surface p-8 transition-colors duration-300 hover:bg-elevated md:p-10"
              >
                <span className="text-xs tracking-widest text-gold">
                  {service.number}
                </span>

                <h3 className="mt-8 font-display text-3xl text-cream">
                  {service.title}
                </h3>

                <p className="body-copy mt-4 max-w-md">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-10 bg-gold/50 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding">
        <div className="page-container">
          <div className="mb-16">
            <p className="eyebrow mb-5">The Journey</p>

            <h2 className="section-heading">
              A story in <em className="text-gold">progress.</em>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="grid grid-cols-[80px_1fr] gap-5 sm:grid-cols-[140px_1fr] sm:gap-10"
              >
                <div className="pt-1 text-right">
                  <span className="font-display text-2xl text-gold">
                    {item.year}
                  </span>
                </div>

                <div className="relative border-l border-outline pb-14 pl-8">
                  <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-gold" />

                  <h3 className="font-display text-2xl text-cream">
                    {item.title}
                  </h3>

                  <p className="body-copy mt-3">
                    {item.description}
                  </p>

                  {index === timeline.length - 1 && (
                    <span className="absolute bottom-0 -left-px h-10 w-px bg-background" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section-padding scroll-mt-20 bg-surface"
      >
        <div className="page-container">
          <div className="mb-14">
            <p className="eyebrow mb-5">Get in Touch</p>

            <h2 className="section-heading">
              Let's make something
              <br />
              <em className="text-gold">beautiful.</em>
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="body-copy max-w-md">
                Have a project in mind, a question about
                availability, or simply want to say hello?
                I'd love to hear from you.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="eyebrow mb-3">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-lg text-cream hover:text-gold"
                  >
                    hello@example.com
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-3">Phone</p>
                  <a
                    href="tel:+10000000000"
                    className="text-lg text-cream hover:text-gold"
                  >
                    +1 (000) 000-0000
                  </a>
                </div>

                <div>
                  <p className="eyebrow mb-3">Follow Along</p>

                  <div className="flex flex-wrap gap-5 text-sm text-muted">
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold"
                    >
                      Instagram ↗
                    </a>

                    <a
                      href="https://pinterest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold"
                    >
                      Pinterest ↗
                    </a>

                    <a
                      href="https://behance.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold"
                    >
                      Behance ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-outline bg-background p-6 sm:p-9">
              <h3 className="font-display text-3xl">
                Send an enquiry
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                This is a frontend demonstration form.
                No message will be sent.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs uppercase tracking-widest text-muted"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your name"
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs uppercase tracking-widest text-muted"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      className="form-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={updateField}
                    placeholder="Tell me about your project"
                    className="form-field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={updateField}
                    placeholder="I'd love to hear your ideas..."
                    className="form-field resize-y"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Preview Submission ↗
                </Button>

                {submitted && (
                  <div
                    role="status"
                    className="border border-gold/40 bg-gold/10 p-4 text-sm leading-7 text-cream"
                  >
                    Form completed for demonstration.
                    Your message has not been sent.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
