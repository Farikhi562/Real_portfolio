import { useEffect, useCallback } from 'react'
import './news-lightbox.css'

export default function NewsLightbox({ story, imageIndex, onClose, onSetImageIndex }) {
  const total = story?.images?.length || 0
  const activeImage = total > 0 ? story.images[imageIndex] : null

  const next = useCallback(() => {
    if (!total) return
    onSetImageIndex((imageIndex + 1) % total)
  }, [imageIndex, total, onSetImageIndex])

  const prev = useCallback(() => {
    if (!total) return
    onSetImageIndex((imageIndex - 1 + total) % total)
  }, [imageIndex, total, onSetImageIndex])

  useEffect(() => {
    if (!story) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [story, onClose, next, prev])

  if (!story) return null

  return (
    <div className="lightbox-overlay" onMouseDown={onClose}>
      <div className="lightbox-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="lightbox-close mono" onClick={onClose} aria-label="Tutup">
          ESC <span>×</span>
        </button>

        <div className="lightbox-media">
          {activeImage && (
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={`${story.title} — ${activeImage.caption || `dokumentasi ${imageIndex + 1}/${total}`}`}
            />
          )}
          {total > 1 && (
            <>
              <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Foto sebelumnya">‹</button>
              <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Foto selanjutnya">›</button>
              <div className="lightbox-counter mono">{imageIndex + 1} / {total}</div>
            </>
          )}
          {activeImage?.caption && (
            <p className="lightbox-image-caption mono">{activeImage.caption}</p>
          )}
        </div>

        {total > 1 && (
          <div className="lightbox-thumbs">
            {story.images.map((img, i) => (
              <button
                key={img.src}
                className={`lightbox-thumb ${i === imageIndex ? 'active' : ''}`}
                onClick={() => onSetImageIndex(i)}
              >
                <img src={img.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <div className="lightbox-copy">
          <div className="story-meta mono">
            <span>{story.id}</span><span>/</span><span>{story.date}</span>
          </div>
          <p className="story-tag mono">{story.tag}</p>
          <h2>{story.title}</h2>
          <p className="dim lightbox-text">{story.detail || story.text}</p>
          {story.link && (
            <a className="btn story-link" href={story.link} target="_blank" rel="noreferrer">
              official announcement ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
