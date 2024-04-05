import Link from 'next/link';
import Image from 'next/image';
import Logo from './asa-logo.png';

export default function NavBar() {
  return (
    <div>
      <Link href="/">
        <Image 
          src={Logo} 
          width={75}
          height={75}
          alt="ASA Logo"/>
      </Link>
      <ul>
        <li>
          <Link href="/"><span>HOME
            </span></Link>
          <Link href="/"><span>ABOUT US
            </span></Link>
          <Link href="/"><span>REPORTS
            </span></Link>
          <Link href="/"><span>CSS PROGRAMS
            </span></Link>
          <Link href="/"><span>CLIENTS
            </span></Link>
          <Link href="/"><span>NEWS & EVENTS
            </span></Link>
          <Link href="/"><span>GOVERNANCE
            </span></Link>
          <Link href="/"><span>JOIN US NOW!
            </span></Link>
          <Link href="/"><span>CONTACT US
            </span></Link>
          <Link href="/"><span>PRIVACY NOTICE
            </span></Link>
        </li>
      </ul>
    </div>
      
  )
}