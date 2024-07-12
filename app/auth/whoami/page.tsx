'use client'
import { useUser } from "@/app/contexts/UserContext";
import WhoAmIPage from "./whoami";
import AuthNav from "../authnavigation";


export default function Page() {
  const user = useUser();
  console.log(user)

  return (
    <div className="flex w-full flex-col items-center">
      <AuthNav activePage="whoami" />
      <WhoAmIPage />
      <div>
        {user ? (
          <h3 className="text-lg">{`You're currently signed in as ${user.email}, just so y'know.`}</h3>
        ) : (
          <h3 className="text-lg">{`You're not currently signed in.`}</h3>
        )}
      </div>
    </div>
  );
}
  