import Link from "next/link";
import clsx from 'clsx';

export default function AuthNav ({activePage=''}) {
  return (
    <div className="flex justify-between w-full text-xl xl:text-2xl">
      <Link href="/" className="hover:bg-yellow-200"><i className="fa-solid fa-house"></i></Link>
      <Link href="/auth/login" className={clsx("hover:bg-yellow-200", activePage === "login" && "text-blue-600")}>Login</Link>
      <Link href="/auth/signup" className={clsx("hover:bg-yellow-200", activePage === "signup" && "text-blue-600")}>SignUp</Link>
      <Link href="/auth/whoami" className={clsx("hover:bg-yellow-200", activePage === "whoami" && "text-blue-600")}>WhoAmI</Link>
      <Link href="/auth/fetchuser" className={clsx("hover:bg-yellow-200", activePage === "fetchuser" && "text-blue-600")}>FetchUser</Link>
      <Link href="/auth/signout" className={clsx("hover:bg-yellow-200", activePage === "signout" && "text-blue-600")}>SignOut</Link>
    </div>
  )
}