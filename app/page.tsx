import Image from "next/image";
import LoginForm from "./components/LoginForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <Image
        className="pb-10"
        src="/images/logo-devlinks-large.svg"
        alt="company logo"
        width={182.5}
        height={100}
      />
      <h1 className="pb-3">Login</h1>
      <p className="text-slate-400 pb-10">
        Add your details below to get back into the app
      </p>
      <LoginForm />
    </main>
  );
}
