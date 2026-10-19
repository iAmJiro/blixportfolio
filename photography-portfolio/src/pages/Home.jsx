
import { useState } from "react";
import Button from "../components/Button";
import GalleryCard from "../components/GalleryCard";
import {
  featuredGallery,
  galleryData,
  portfolioStats,
} from "../data/galleryData";
import { Link } from "react-router-dom";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#17120f]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

          <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <div className="photo-placeholder h-full">
              <span className="photo-placeholder-label">
                Image 01
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="page-container relative z-10 flex min-h-[calc(100svh-80px)] items-center py-20">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow mb-8">
              Fine Art & Editorial Photography
            </p>

            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.98] tracking-[-0.045em]">
              Moments
              <br />
              made
              <br />
              <em className="font-normal text-gold">
                timeless.
              </em>
            </h1>

            <div className="mt-9 max-w-lg border-l border-gold/70 pl-6">
              <p className="text-sm leading-8 text-cream/75 sm:text-base">
                PHOTOGRAPHER NAME — A visual storyteller
                capturing honest emotion, beautiful light,
                and the moments that deserve to last forever.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/gallery">
                Explore Gallery <span aria-hidden="true">↗</span>
              </Button>

              <Button to="/about" variant="outline">
                My Story
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-muted lg:flex">
          <span>Scroll to explore</span>
          <span className="h-px w-12 bg-gold" />
          <span>↓</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding">
        <div className="page-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">The Philosophy</p>
            <h2 className="section-heading">
              Every frame
              <br />
              <em className="text-gold">tells a story.</em>
            </h2>
          </div>

          <div>
            <p className="body-copy max-w-2xl">
              Photography is more than a picture. It is the
              art of noticing — the quiet details, fleeting
              emotions and extraordinary beauty found in
              ordinary moments.
            </p>

            <p className="body-copy mt-5 max-w-2xl">
              My approach combines thoughtful composition,
              natural storytelling and a cinematic perspective
              to create photographs that feel both personal
              and timeless.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-cream"
            >
              Discover my approach ↗
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-surface py-20 md:py-28">
        <div className="page-container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">Selected Portfolio</p>
              <h2 className="section-heading">
                Featured <em className="text-gold">work.</em>
              </h2>
            </div>

            <Button to="/gallery" variant="outline">
              View All Work ↗
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredGallery.slice(0, 4).map((image, index) => (
              <GalleryCard
                key={image.id}
                image={{
                  ...image,
                  height: index % 2 === 0 ? 500 : 420,
                }}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="border-y border-outline bg-background py-16">
        <div className="page-container grid gap-10 sm:grid-cols-3">
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="font-display text-5xl text-gold sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST WORK */}
      <section className="section-padding">
        <div className="page-container">
          <div className="mb-12">
            <p className="eyebrow mb-5">Recent Captures</p>
            <h2 className="section-heading">
              The latest <em className="text-gold">frames.</em>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.slice(4, 7).map((image) => (
              <GalleryCard
                key={image.id}
                image={{
                  ...image,
                  height: 390,
                }}
                onClick={setSelectedImage}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/gallery" variant="outline">
              Explore the Full Gallery ↗
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-elevated py-24 md:py-32">
        <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-bronze/10 blur-3xl" />

        <div className="page-container relative z-10 text-center">
          <p className="eyebrow mb-6">Let's Create Something</p>

          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
            Your story deserves
            <br />
            to be <em className="text-gold">remembered.</em>
          </h2>

          <p className="body-copy mx-auto mt-7 max-w-xl">
            Whether it's a milestone, a portrait or a
            creative collaboration, I'd love to bring your
            vision to life.
          </p>

          <div className="mt-9">
            <Button to="/about#contact">
              Start a Conversation ↗
            </Button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          role="presentation"
          onMouseDown={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            className="relative w-full max-w-4xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-sm uppercase tracking-widest text-white"
            >
              Close ✕
            </button>

            <div
              className="photo-placeholder"
              style={{
                height: "min(65vh, 650px)",
              }}
            >
              <span className="photo-placeholder-label">
                Image {selectedImage.number}
              </span>
            </div>

            <div className="mt-5 flex justify-between gap-4">
              <h3 className="font-display text-2xl">
                {selectedImage.title}
              </h3>
              <p className="eyebrow">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
