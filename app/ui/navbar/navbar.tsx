import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="flex justify-between w-11/12 items-center">
      <Link href="/">
        <Image src="/asa-logo.png" width={75} height={75} alt="ASA Logo"/></Link>
      <ul className="flex list-none justify-around w-full">
        <li><Link href="/"><span>HOME</span></Link></li>
        <li><Link href="/"><span>ABOUT US</span></Link></li>
        <li><Link href="/"><span>REPORTS</span></Link></li>
        <li><Link href="/"><span>CSS PROGRAMS</span></Link></li>
        <li><Link href="/"><span>CLIENTS</span></Link></li>
        <li><Link href="/"><span>NEWS & EVENTS</span></Link></li>
        <li><Link href="/"><span>GOVERNANCE</span></Link></li>
        <li><Link href="/"><span>JOIN US NOW!</span></Link></li>
        <li><Link href="/"><span>CONTACT US</span></Link></li>
        <li><Link href="/"><span>PRIVACY NOTICE</span></Link></li></ul>
      <button className="sign-in-button rounded-full w-1/12 py-2 bg-orange-400 text-white">SIGN IN</button>
    </div>
      
  )
}