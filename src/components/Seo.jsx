import { useEffect } from 'react'

const SITE_NAME = 'fauzan — model_in_training'
const DEFAULT_DESCRIPTION =
  'Fauzan — Informatics student, AI Engineer in training, Co-Founder & CEO of NEXA Tech Labs. Portfolio, studi kasus, dan proof of work.'
const DEFAULT_IMAGE = '/assets/profile.jpg'

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

/**
 * Drop <Seo /> near the top of any page component to control that
 * route's <title>, meta description, canonical URL, and social
 * preview tags. No dependency needed — plain DOM writes on mount.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    const href =
      typeof window !== 'undefined' ? `${window.location.origin}${path}` : path
    setMeta('property', 'og:url', href)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', href)
  }, [title, description, path, image, type, noIndex])

  return null
}
