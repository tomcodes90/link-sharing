"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUp } from "./register";

import FormInput from "../components/FormInput";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const schema: ZodType<FormData> = z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, "Invalid Password")
        .max(20, "Invalid Password"),
      confirmPassword: z
        .string()
        .min(8, "Invalid Password")
        .max(20, "Invalid Password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const methods = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => signUp(data.email, data.password);

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
          <h1 className="pb-3 text-black">Register</h1>
          <p className="text-gray pb-8 font-light">
            Let's get you started sharing your links!
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
            placeholder="At least 8 characters"
          />
          <FormInput
            type="password"
            label="confirmPassword"
            iconSrc="/images/icon-password.svg"
            iconAlt="Password icon"
            placeholder="At least 8 characters"
          />
          <button
            className="flex items-center justify-center text-white w-full h-10 rounded-md bg-purple hover:bg-purple-light my-6 shadow-xl"
            type="submit"
          >
            Create new account
          </button>
          <div className="flex flex-col sm:justify-center sm:gap-1 sm:flex-row items-center">
            <p className="text-gray font-light">Already have an account?</p>
            <Link
              className="text-purple font-light cursor-pointer"
              href="/login"
            >
              Login
            </Link>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
