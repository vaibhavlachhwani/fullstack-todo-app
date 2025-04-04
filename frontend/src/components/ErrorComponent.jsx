export default function ErrorComponent() {
    return (
      <div className="h-screen flex justify-center items-center bg-[url(/src/assets/bg-login.webp)]">
        <div className="space-y-6">
          <h1 className="text-center font-extrabold text-8xl text-slate-100">
            404
          </h1>
          <p className="text-center font-bold text-4xl text-slate-100">
            This page does not exist! Check back later.
          </p>
        </div>
      </div>
    );
  }