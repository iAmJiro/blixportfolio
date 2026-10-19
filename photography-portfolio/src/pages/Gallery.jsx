
import { useEffect, useMemo, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import {
  categories,
  galleryData,
} from "../data/galleryData";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryData;
    }

    return galleryData.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const navigateImage = (direction) => {
    if (selectedIndex < 0) return;

    const nextIndex =
      (selectedIndex + direction + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="border-b border-outline bg-surface py-20 md:py-28">
        <div className="page-container">
          <p className="eyebrow mb-6">The Portfolio</p>

          <h1 className="display-heading">
            Collected
            <br />
            <em className="text-gold">moments.</em>
          </h1>

          <p className="body-copy mt-7 max-w-xl">
            A curated collection of stories told through
            light, perspective and emotion.
          </p>
        </div>
      </section>

      {/* FILTERS AND GALLERY */}
      <section className="section-padding">
        <div className="page-container">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter photographs by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedImage(null);
                  }}
                  aria-pressed={activeCategory === category}
                  className={`border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 ${
                    activeCategory === category
                      ? "border-gold bg-gold text-background"
                      : "border-outline text-muted hover:border-gold hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {String(filteredImages.length).padStart(2, "0")} Photographs
            </p>
          </div>

          {/* MASONRY GRID */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="mb-5 break-inside-avoid"
              >
                <GalleryCard
                  image={image}
                  onClick={setSelectedImage}
                />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="border border-outline py-24 text-center">
              <p className="text-muted">
                No photographs found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg sm:p-8"
          onMouseDown={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${selectedImage.title}`}
            className="relative w-full max-w-5xl animate-fade-in"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between gap-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(filteredImages.length).padStart(2, "0")}
              </p>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image viewer"
                className="border border-outline px-4 py-2 text-xs uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Close ✕
              </button>
            </div>

            <div className="relative">
              <div
                className="photo-placeholder"
                style={{
                  height: "min(65vh, 700px)",
                }}
              >
                <span className="photo-placeholder-label">
                  Image {selectedImage.number}
                </span>
              </div>

              <button
                type="button"
                onClick={() => navigateImage(-1)}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/60 text-2xl text-white transition-colors hover:bg-gold hover:text-background sm:left-5"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => navigateImage(1)}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/60 text-2xl text-white transition-colors hover:bg-gold hover:text-background sm:right-5"
              >
                ›
              </button>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow mb-2">
                  {selectedImage.category}
                </p>

                <h2 className="font-display text-2xl text-cream sm:text-3xl">
                  {selectedImage.title}
                </h2>
              </div>

              <p className="text-xs uppercase tracking-widest text-muted">
                Frame {selectedImage.number}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
