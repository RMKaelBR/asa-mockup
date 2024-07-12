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

const DropdownListItem = ({addressUrl = '', itemTitle = '', extraStyle=''}) => {
  const tailwindStyles = extraStyle + " hover:text-orange-500 my-1 py-2 border-b border-orange-400 border-dashed" 
  return (
    <li className={tailwindStyles}><Link href={addressUrl}><span>{itemTitle}</span></Link></li>
  )
}

const DropdownMenu = () => {
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
        <Link href="/auth/login">
          <SignInButton visibilityConditions='lg:hidden mt-4 mr-8'/>
        </Link>
    </div>
  )
}

const NavigationBarLink = ({addressUrl='', itemTitle='', children}: any) => {
  return (
    <li className="group relative">
      <Link href={addressUrl}>
        <span className="hover:text-orange-400">{itemTitle}</span>
      </Link>
      {children}
    </li>
  )
}

export default function NavBar() {
  const [navBarIsOpen, setnavBarIsOpen] = useState(false);

  const toggleDropdown = () => {
    setnavBarIsOpen(!navBarIsOpen);
  };

  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between w-11/12 items-center">
        <Link href="/">
          <Image src="/asa-logo.png" width={75} height={75} alt="ASA Logo"/></Link>
        <div className="hidden lg:flex w-full justify-around font-medium">
          <ul className="navigation-links flex justify-around list-none w-full">
          <NavigationBarLink addressUrl="/" itemTitle="HOME" />
          <NavigationBarLink addressUrl="/" itemTitle="ABOUT US" >
            <ul className='absolute left-0 top-full w-max text-left hidden group-hover:block bg-white border-l border-b rounded shadow-md p-2 pt-8'>
              <DropdownListItem addressUrl='/about/who-we-are' itemTitle='WHO WE ARE' />
              <DropdownListItem addressUrl='/about/board-of-trustees' itemTitle='BOARD OF TRUSTEES' />
              <DropdownListItem addressUrl='/about/corporate-officers' itemTitle='CORPORATE OFFICERS' />
              <DropdownListItem addressUrl='/about/management-team' itemTitle='MANAGEMENT TEAM' />
            </ul>
          </NavigationBarLink>
          <NavigationBarLink addressUrl="/" itemTitle="REPORTS" >
            <ul className='absolute left-0 top-full w-max text-left hidden group-hover:block bg-white border-l border-b rounded shadow-md p-2 pt-8'>
              <DropdownListItem addressUrl='/' itemTitle='MONTHLY UNAUDITED FINANCIAL STATEMENT' />
              <DropdownListItem addressUrl='/' itemTitle='ISLAMIC FINANCING' />
              <DropdownListItem addressUrl='/' itemTitle='ANNUAL REPORTS' />
              <DropdownListItem addressUrl='/' itemTitle='AUDITED FINANCIAL STATEMENTS' />
              <DropdownListItem addressUrl='/' itemTitle='SOCIAL (GENDER) BOND FRAMEWORK' />
            </ul>
          </ NavigationBarLink>
          <NavigationBarLink addressUrl="/" itemTitle="CSS PROGRAMS" />
          <NavigationBarLink addressUrl="/" itemTitle="CLIENTS">
            <ul className='absolute left-0 top-full w-max text-left hidden group-hover:block bg-white border-l border-b rounded shadow-md p-2 pt-8'>
              <DropdownListItem addressUrl='/' itemTitle='TRUTH IN LENDING ACT' />
              <DropdownListItem addressUrl='/' itemTitle='10 BASIC RIGHTS OF A CLIENT' />
              <DropdownListItem addressUrl='/' itemTitle='SUCCESS STORIES' />
              <DropdownListItem addressUrl='/' itemTitle='PHOTOS' />
            </ul>
          </ NavigationBarLink>
          <NavigationBarLink addressUrl="/" itemTitle="NEWS & EVENTS">
            <ul className='absolute left-0 top-full w-max text-left hidden group-hover:block bg-white border-l border-b rounded shadow-md p-2 pt-8'>
              <DropdownListItem addressUrl='/' itemTitle='NEWS' />
              <DropdownListItem addressUrl='/' itemTitle='EVENTS' />
              <DropdownListItem addressUrl='/' itemTitle='PUBLICATIONS' />
            </ul>
          </ NavigationBarLink>
          <NavigationBarLink addressUrl="/" itemTitle="GOVERNANCE">
            <ul className='absolute left-0 top-full w-max text-left hidden group-hover:block bg-white border-l border-b rounded shadow-md p-2 pt-8'>
              <DropdownListItem addressUrl='/' itemTitle='BOARD CHARTER' />
              <DropdownListItem addressUrl='/' itemTitle='BOARD COMMITTEES' />
              <DropdownListItem addressUrl='/' itemTitle='CORPORATE GOVERNANCE' />
              <DropdownListItem addressUrl='/' itemTitle='WHISTLEBLOWER POLICY' />
            </ul>
          </ NavigationBarLink>
          <NavigationBarLink addressUrl="/join-us" itemTitle="JOIN US NOW!" />
          <NavigationBarLink addressUrl="/" itemTitle="CONTACT US" />
          <NavigationBarLink addressUrl="/" itemTitle="PRIVACY NOTICE" /></ul>
        </div>
        <Link href="/auth/login">
          <SignInButton visibilityConditions='hidden lg:block'/>
        </Link>
        
        {/*This button appears when the window size is smaller than 'lg' */}
        <button onClick={toggleDropdown} className="lg:hidden">
          <i className="fa-solid fa-bars text-3xl hover:text-orange-600" />
        </button>
      </div>
      {navBarIsOpen && <DropdownMenu />}
    </div>
  )
}