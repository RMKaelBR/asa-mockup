
'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/UserContext";

export default function SignOutPage() {
  const router = useRouter();
  const { logout } = useAuth();
  async function onSignOut() {
    await logout();
    router.push('/auth/login');
    
    // try{
    //   const response = await fetch(`http://localhost:3000/auth/signout`, {
    //   method: 'POST',
    //   credentials: 'include',
    // })
    //   if (response.ok) {
    //     console.log(response);
    //     router.push('/');
    //   }
    //   else {
    //     console.error('Failed to sign out', await response.json());
    //   }
    // } catch (error) {
    //   console.log("An error occurred during sign out: ", error);
    // }
  }
  
  return (
    <div className="w-min">
      <button className="m-4 p-2 w-max rounded-lg bg-blue-100 hover:bg-blue-200" type="submit" onClick={onSignOut}>Sign Out!</button>
    </div>
  )
}
