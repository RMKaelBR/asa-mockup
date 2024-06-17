import WhoAmIPage from "./whoami";
import AuthNav from "../nav";

export default function Page() {
  return (
    <div className="flex flex-col items-center m-20">
      <AuthNav activePage="whoami" />
      <WhoAmIPage />
    </div>
  );
}
  