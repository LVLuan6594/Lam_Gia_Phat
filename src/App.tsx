import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Consultation } from './components/Consultation'
import { Gallery } from './components/Gallery'
import { Cafe } from './components/Cafe'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    if (!import.meta.env.PROD) return

    const restrictShortcuts = (event: KeyboardEvent) => {
      const target = event.target
      if (target instanceof HTMLElement && (target.matches('input, textarea') || target.isContentEditable)) return

      const key = event.key.toLowerCase()
      const noModifiers = !event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey
      const windowsLinuxShortcut =
        (event.ctrlKey && !event.altKey && !event.metaKey && event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        (event.ctrlKey && !event.altKey && !event.metaKey && !event.shiftKey && key === 'u')
      const macShortcut =
        event.metaKey && event.altKey && !event.ctrlKey && !event.shiftKey && ['i', 'j', 'c', 'u'].includes(key)

      if ((key === 'f12' && noModifiers) || windowsLinuxShortcut || macShortcut) {
        if (event.cancelable) event.preventDefault()
      }
    }

    window.addEventListener('keydown', restrictShortcuts)
    return () => window.removeEventListener('keydown', restrictShortcuts)
  }, [])

  useEffect(() => {
    const hero = document.getElementById('trang-chu')
    if (!hero) return

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(([entry]) => {
        setShowBackToTop(!entry.isIntersecting)
      })
      observer.observe(hero)
      return () => observer.disconnect()
    }

    const updateVisibility = () => setShowBackToTop(hero.getBoundingClientRect().bottom <= 0)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    updateVisibility()

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = [...document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')]
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        currentObserver.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px 8% 0px', threshold: 0.08 })

    let scrollFrame = 0
    const revealPassedTargets = () => {
      if (scrollFrame) return
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0
        targets.forEach(target => {
          if (target.classList.contains('is-revealed')) return
          const { top, bottom } = target.getBoundingClientRect()
          if (bottom < 0 || top < window.innerHeight + 120) {
            target.classList.add('is-revealed')
            observer.unobserve(target)
          }
        })
      })
    }

    targets.forEach(target => {
      if (target.matches(':target') || target.contains(document.activeElement)) {
        target.classList.add('is-revealed')
        return
      }

      target.classList.add('is-reveal-pending')
      observer.observe(target)
    })

    window.addEventListener('scroll', revealPassedTargets, { passive: true })
    window.addEventListener('resize', revealPassedTargets)
    revealPassedTargets()

    return () => {
      cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', revealPassedTargets)
      window.removeEventListener('resize', revealPassedTargets)
      observer.disconnect()
    }
  }, [])

  return <>
    <a className="skip" href="#noi-dung">Đến nội dung chính</a>
    <Header />
    <main id="noi-dung">
      <Hero />
      <About />
      <Services />
      <Consultation />
      <Gallery />
      <Cafe />
      <FAQ />
    </main>
    <Footer />
    <button
      className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
      type="button"
      aria-label="Về đầu trang"
      aria-hidden={!showBackToTop}
      tabIndex={showBackToTop ? 0 : -1}
      onClick={event => {
        if (event.detail === 0) {
          document.querySelector<HTMLElement>('.brand')?.focus({ preventScroll: true })
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          window.scrollTo(0, 0)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5m-7 7 7-7 7 7" />
      </svg>
    </button>
  </>
}
