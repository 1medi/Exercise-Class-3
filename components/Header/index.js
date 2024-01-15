import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>Header Here</h1>
      <Link href='/'></Link>
    </header>
  )
}