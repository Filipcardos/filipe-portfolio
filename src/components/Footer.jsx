import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>{PROFILE.location}</span>
        <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
