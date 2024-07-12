import LoginPage from "./login";
import AuthNav from "../authnavigation";

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <AuthNav activePage="login"/>
      <LoginPage />
    </div>
  );
}
  