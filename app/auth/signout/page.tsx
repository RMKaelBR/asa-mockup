import AuthNav from "../authnavigation";
import SignOutPage from "./signout";

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <AuthNav activePage="signout"/>
      <SignOutPage />
    </div>
  );
}
  