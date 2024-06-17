import AuthNav from "../nav";
import SignUpPage from "./signup";

export default function Page () {
  return (
    <div className="flex flex-col items-center m-20">
      <AuthNav activePage="signup"/>
      <SignUpPage />
    </div>
  )
}