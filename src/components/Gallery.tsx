import { useEffect, useRef, useState } from 'react'
import { images } from '../data/company'

const projectAlbums = [
  { name: 'Nhà phố', photos: images.projects.slice(0, 3) },
  { name: 'Nhà phố hiện đại', photos: images.projects.slice(3).reverse() },
]

type ProjectAlbum = (typeof projectAlbums)[number]

export function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState<ProjectAlbum | null>(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)
  const returnScrollYRef = useRef(0)

  useEffect(() => {
    if (!activeAlbum || !dialogRef.current || dialogRef.current.open) return
    dialogRef.current.showModal()
    dialogRef.current.querySelector<HTMLButtonElement>('.album-viewer-close')?.focus()
  }, [activeAlbum])

  const openAlbum = (album: ProjectAlbum, opener: HTMLButtonElement) => {
    openerRef.current = opener
    returnScrollYRef.current = window.scrollY
    setActivePhotoIndex(0)
    setActiveAlbum(album)
  }

  const closeAlbum = () => {
    if (dialogRef.current?.open) dialogRef.current.close()
  }

  const movePhoto = (direction: -1 | 1) => {
    if (!activeAlbum) return
    setActivePhotoIndex(index => (index + direction + activeAlbum.photos.length) % activeAlbum.photos.length)
  }

  const handleDialogClose = () => {
    setActiveAlbum(null)
    requestAnimationFrame(() => {
      openerRef.current?.focus({ preventScroll: true })
      window.scrollTo({ top: returnScrollYRef.current, behavior: 'auto' })
    })
  }

  return (
    <section className="tint gallery-section" id="hinh-anh" data-scroll-reveal>
      <div className="wrap section">
        <h2 className="gallery-heading">
          <span className="gallery-heading-main">Một trong những công trình đã xây dựng</span>
          <span className="gallery-heading-sub">Bởi Lâm Gia Phát</span>
        </h2>
        <div className="project-album-grid">
          {projectAlbums.map(album => (
            <article className="project-album" key={album.name}>
              <div className="project-album-preview">
                {album.photos.slice(0, 2).map(photo => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    style={{ objectPosition: photo.objectPosition }}
                  />
                ))}
              </div>
              <div className="project-album-footer">
                <div className="project-album-info">
                  <h3>{album.name}</h3>
                  <p>{album.photos.length} ảnh</p>
                </div>
                <button className="project-album-button" onClick={event => openAlbum(album, event.currentTarget)}>
                  <span className="project-album-button-full">Xem ảnh công trình</span>
                  <span className="project-album-button-short">Xem ảnh</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="album-viewer"
        ref={dialogRef}
        aria-labelledby="album-viewer-title"
        onClose={handleDialogClose}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            event.preventDefault()
            closeAlbum()
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            movePhoto(-1)
          } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            movePhoto(1)
          }
        }}
      >
        {activeAlbum && (
          <div className="album-viewer-content">
            <header className="album-viewer-header">
              <h2 id="album-viewer-title">{activeAlbum.name}</h2>
              <button className="album-viewer-close" onClick={closeAlbum} aria-label="Đóng album">×</button>
            </header>
            <img
              className="album-viewer-image"
              src={activeAlbum.photos[activePhotoIndex].src}
              alt={activeAlbum.photos[activePhotoIndex].alt}
            />
            <div className="album-viewer-controls">
              <button onClick={() => movePhoto(-1)}>Trước</button>
              <p aria-live="polite">{activePhotoIndex + 1} / {activeAlbum.photos.length}</p>
              <button onClick={() => movePhoto(1)}>Sau</button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
