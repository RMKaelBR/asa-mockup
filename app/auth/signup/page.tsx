import AuthNav from "../authnavigation";
import SignUpPage from "./signup";

export default function Page () {
  return (
    <div className="flex w-full flex-col items-center">
      <AuthNav activePage="signup"/>
      <SignUpPage />
    </div>
  )
}