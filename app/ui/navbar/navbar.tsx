"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface SignInButtonProps {
  visibilityConditions: string;
}

const SignInButton = ({visibilityConditions}: SignInButtonProps) => {
  const buttonStyleClasses = visibilityConditions + ` sign-in-button rounded-full w-24 py-1 bg-orange-400 text-white hover:bg-orange-500`;
  return (
    <button className={buttonStyleClasses}>SIGN IN</button>
  )
}

const DropdownMenu = () => {

  const DropdownListItem = ({addressUrl = '', itemTitle = ''}) => {
    return (
      <li className="hover:text-orange-500 my-1"><Link href={addressUrl}><span>{itemTitle}</span></Link></li>
    )
  }

  return (
    <div className="lg:hidden self-end text-right">
      <ul className="flex flex-col items-end mr-10">
        <DropdownListItem addressUrl="/" itemTitle="HOME" />
        <DropdownListItem addressUrl="/" itemTitle="ABOUT US" />
        <DropdownListItem addressUrl="/" itemTitle="REPORTS" />
        <DropdownListItem addressUrl="/" itemTitle="CSS PROGRAMS" />
        <DropdownListItem addressUrl="/" itemTitle="CLIENTS" />
        <DropdownListItem addressUrl="/" itemTitle="NEWS & EVENTS" />
        <DropdownListItem addressUrl="/" itemTitle="GOVERNANCE" />
        <DropdownListItem addressUrl="/" itemTitle="JOIN US NOW!" />
        <DropdownListItem addressUrl="/" itemTitle="CONTACT US" />
        <DropdownListItem addressUrl="/" itemTitle="PRIVACY NOTICE" /></ul>
      <SignInButton visibilityConditions='lg:hidden mt-4 mr-8'/>
    </div>
  )
}

export default function NavBar() {
  const [navBarIsOpen, setnavBarIsOpen] = useState(false);

  const toggleDropdown = () => {
    setnavBarIsOpen(!navBarIsOpen);
  };
  const NavigationBarLink = ({addressUrl='', itemTitle=''}) => {
    return (
      <li className="hover:text-orange-500"><Link href={addressUrl}><span>{itemTitle}</span></Link></li>
    )
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between w-11/12 items-center">
        <Link href="/">
          <Image src="/asa-logo.png" width={75} height={75} alt="ASA Logo"/></Link>
        <div className="hidden lg:flex w-full justify-around font-medium">
          <ul className="navigation-links flex justify-around list-none w-full">
          <NavigationBarLink addressUrl="/" itemTitle="HOME" />
          <NavigationBarLink addressUrl="/about/who-we-are" itemTitle="ABOUT US" />
          <NavigationBarLink addressUrl="/" itemTitle="REPORTS" />
          <NavigationBarLink addressUrl="/" itemTitle="CSS PROGRAMS" />
          <NavigationBarLink addressUrl="/" itemTitle="CLIENTS" />
          <NavigationBarLink addressUrl="/" itemTitle="NEWS & EVENTS" />
          <NavigationBarLink addressUrl="/" itemTitle="GOVERNANCE" />
          <NavigationBarLink addressUrl="/" itemTitle="JOIN US NOW!" />
          <NavigationBarLink addressUrl="/" itemTitle="CONTACT US" />
          <NavigationBarLink addressUrl="/" itemTitle="PRIVACY NOTICE" /></ul>
        </div>
        <Link href=""><SignInButton visibilityConditions='hidden lg:block'/></Link>
        <button onClick={toggleDropdown} className="lg:hidden"><i className="fa-solid fa-bars text-3xl hover:text-orange-600" /></button>
      </div>
      {navBarIsOpen && <DropdownMenu />}
    </div>
  )
}