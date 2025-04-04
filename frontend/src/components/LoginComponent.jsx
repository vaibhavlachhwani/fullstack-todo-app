import LoginCard from "./LoginCard";

export default function LoginComponent() {
  return (
    <div
      className="h-screen grid grid-cols-1 md:grid-cols-2 gap-2 
        bg-[url(/src/assets/bg-login.webp)]"
    >
      <div className="hidden items-center justify-center md:flex ">
        <h2 className="text-5xl leading-15 font-bold text-slate-100 px-8">
          Simple.
          <br /> Functional.
          <br /> Efficient.
        </h2>
      </div>
      <div className="h-screen flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
}
