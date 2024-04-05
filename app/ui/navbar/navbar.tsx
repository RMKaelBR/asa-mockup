import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <Link href="/">
        <img src="@/public/asa-logo.png" />
      </Link>
      <ul>
        <li>
          <Link href="/">
            <span>HOME</span>
          </Link>
          <Link href="/">
            <span>ABOUT US</span>
          </Link>
          <Link href="/">
            <span>REPORTS</span>
          </Link>
          <Link href="/">
            <span>CSS PROGRAMS</span>
          </Link>
          <Link href="/">
            <span>CLIENTS</span>
          </Link>
          <Link href="/">
            <span>NEWS & EVENTS</span>
          </Link>
          <Link href="/">
            <span>GOVERNANCE</span>
          </Link>
          <Link href="/">
            <span>JOIN US NOW!</span>
          </Link>
          <Link href="/">
            <span>CONTACT US</span>
          </Link>
          <Link href="/">
            <span>PRIVACY NOTICE</span>
          </Link>
        </li>
      </ul>
    </div>
      
  )
}