'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/UserContext";

export default function SignOutPage() {
  const router = useRouter();
  const { logout } = useAuth();
  async function onSignOut() {
    logout();
    router.push('/auth/login');
  }
  
  return (
    <div className="w-min">
      <button className="m-4 p-2 w-max rounded-lg bg-blue-100 hover:bg-blue-200" type="submit" onClick={onSignOut}>Sign Out!</button>
    </div>
  )
}
