import { useEffect, useState } from 'react'
import { company, images, navigation } from '../data/company'

export function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const header = document.querySelector<HTMLElement>('.header')
        if (!header) return

        const activationLine = window.scrollY + header.getBoundingClientRect().height + 24
        let currentId: string | null = null

        for (const [id] of navigation) {
          const section = document.getElementById(id)
          if (section && section.getBoundingClientRect().top + window.scrollY <= activationLine) {
            currentId = id
          }
        }

        const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
        setActiveId(atPageEnd ? 'lien-he' : currentId)
      })
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('hashchange', updateActiveSection)
    updateActiveSection()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [])

  return (
    <header className="header" onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }}>
      <div className="wrap header-row">
        <a className="brand" href="#trang-chu" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="" /><strong>{company.name}</strong>
        </a>
        <button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? 'Đóng menu' : 'Menu ☰'}
        </button>
        <nav id="nav" aria-label="Điều hướng chính" className={open ? 'open' : ''}>
          {navigation.map(([id, label]) => (
            <a key={id} href={'#' + id} aria-current={activeId === id ? 'location' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
