import { useEffect, useRef } from 'react'

// Revela o conteúdo ao entrar na tela (leve: IntersectionObserver + CSS)
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(([x]) => {
      if (x.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
