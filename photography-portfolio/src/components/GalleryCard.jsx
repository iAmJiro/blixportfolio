
function GalleryCard({
  image,
  onClick,
  showDetails = true,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(image)}
      aria-label={`View ${image.title}, image ${image.number}`}
      className={`group relative block w-full overflow-hidden bg-[#555555] text-left ${className}`}
    >
      <div
        className="photo-placeholder transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ height: `${image.height}px` }}
      >
        <span className="photo-placeholder-label">
          Image {image.number}
        </span>
      </div>

      {showDetails && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-6 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            {image.category}
          </span>

          <h3 className="mt-2 font-display text-2xl text-white">
            {image.title}
          </h3>

          <span className="mt-3 text-xs uppercase tracking-widest text-white/70">
            View photograph ↗
          </span>
        </div>
      )}
    </button>
  );
}

export default GalleryCard;
