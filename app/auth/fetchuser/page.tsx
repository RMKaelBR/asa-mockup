import AuthNav from "../authnavigation";
import FetchUserPage from "./fetchuser";

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <AuthNav activePage="fetchuser"/>
      <FetchUserPage />
    </div>
  );
}
