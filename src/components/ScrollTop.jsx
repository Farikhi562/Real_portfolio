import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './scroll-top.css'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setVisible(false) }, [location.pathname])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      className={`scroll-top mono ${visible ? 'visible' : ''}`}
      onClick={scrollUp}
      aria-label="Kembali ke atas"
    >
      ↑ <span>top</span>
    </button>
  )
}
