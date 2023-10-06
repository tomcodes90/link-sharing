import Image from "next/image";
import LoginForm from "./components/LoginForm";
export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <Image
        className="pb-10"
        src="/images/logo-devlinks-large.svg"
        alt="company logo"
        width={182.5}
        height={100}
      />
      <LoginForm />
    </main>
  );
}
