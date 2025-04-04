import { useAuth } from "./security/AuthContext";

export default function LogoutComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  if (isAuthenticated) {
    authContext.logout();
  }

  return (
    <div className="h-screen flex justify-center items-center bg-[url(/src/assets/bg-login.webp)]">
      <div className="space-y-6">
        <h1 className="text-center font-extrabold text-8xl text-slate-100">
          You have successfully logged out!
        </h1>
        <p className="text-center font-bold text-4xl text-slate-100">
          Thanks for visiting
        </p>
      </div>
    </div>
  );
}
