"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../components/FormInput";
import { signIn } from "./login";
import { getAuth } from "firebase/auth";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Invalid Password").max(20, "Invalid Password"),
  });
  const methods = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => signIn(data.email, data.password);

  return (
    <section className="flex flex-col sm:items-center sm:justify-center sm:bg-gray-very-light h-screen p-4 w-full">
      <Image
        className="pb-10"
        src="/images/logo-devlinks-large.svg"
        alt="company logo"
        width={182}
        height={40}
      />
      <FormProvider {...methods}>
        <form
          className="flex flex-col w-full sm:h-[482px] sm:w-[476px] sm:p-4 bg-white "
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h1 className="pb-3">Login</h1>
          <p className="text-slate-400 pb-10">
            Add your details below to get back into the app
          </p>
          <FormInput
            type="email"
            label="email"
            iconSrc="/images/icon-email.svg"
            iconAlt="Email icon"
            placeholder="e.g.alex@email.com"
          />
          <FormInput
            type="password"
            label="password"
            iconSrc="/images/icon-password.svg"
            iconAlt="Password icon"
            placeholder="Insert your password here"
          />
          <button
            className="flex items-center justify-center text-white w-full h-10 rounded-md bg-purple hover:bg-purple-light my-6 shadow-xl"
            type="submit"
          >
            Login
          </button>
          <div className="flex flex-col sm:justify-center sm:gap-1 sm:flex-row items-center">
            <p className="text-gray font-light">Don't have an account?</p>
            <Link
              className="text-purple font-light cursor-pointer"
              href="/register"
            >
              Create account
            </Link>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
