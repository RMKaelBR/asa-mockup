import AuthNav from "../nav";
import SignOutPage from "./signout";

export default function Page() {
  return (
    <div className="flex flex-col items-center m-20">
      <AuthNav activePage="signout"/>
      <SignOutPage />
    </div>
  );
}
  