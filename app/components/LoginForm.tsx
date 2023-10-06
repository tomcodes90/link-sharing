"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import FormInput from "./FormInput";

export default function LoginForm() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col h-screen w-full">
      <h1 className="pb-3">Login</h1>
      <p className="text-slate-400 pb-10">
        Add your details below to get back into the app
      </p>
      <form
        className="flex flex-col w-full"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormInput
          label="email"
          iconSrc="/images/icon-email.svg"
          iconAlt="Email icon"
          placeholder="e.g.alex@email.com"
        />
        <FormInput
          label="password"
          iconSrc="/images/icon-password.svg"
          iconAlt="Password icon"
          placeholder="Insert your password here"
        />
        <button
          className="flex items-center justify-center text-white w-full h-10 rounded-md bg-purple my-6 shadow-xl"
          type="submit"
        >
          Login
        </button>
        <div className="flex flex-col items-center">
          <p className="text-gray font-light">Don't have an account?</p>
          <Link
            className="text-purple font-light cursor-pointer"
            href="/register"
          >
            Create account
          </Link>
        </div>
      </form>
    </section>
  );
}
