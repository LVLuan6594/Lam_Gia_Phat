import { useEffect } from 'react'
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
  </>
}
