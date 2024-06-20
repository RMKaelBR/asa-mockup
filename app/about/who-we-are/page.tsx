import AuthGuard from "@/app/components/AuthGuard";

export default function Page() {
  return (
    <AuthGuard>
      <div>
        <h1 className="text-4xl">WHO WE ARE</h1>
        <h2 className="text-3xl">Welcome to ASA Philippines Foundation</h2>
      </div>
    </AuthGuard>
  );
}
  