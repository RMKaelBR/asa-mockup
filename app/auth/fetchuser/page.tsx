import AuthNav from "../nav";
import FetchUserPage from "./fetchuser";

export default function Page() {
  return (
    <div className="flex flex-col items-center m-20">
      <AuthNav activePage="fetchuser"/>
      <FetchUserPage />
    </div>
  );
}
  