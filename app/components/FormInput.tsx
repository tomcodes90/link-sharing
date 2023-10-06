import Image from "next/image";
import React from "react";
export default function FormInput({ label, iconSrc, iconAlt, placeholder }) {
  return (
    <>
      <label className="text-xs mb-2">{label}</label>
      <div className="flex h-10 border rounded-md py-2 ">
        <Image
          className="mx-4"
          src={iconSrc}
          alt={iconAlt}
          width={15}
          height={15}
        />
        <input
          className="flex w-full font-light text-sm"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
