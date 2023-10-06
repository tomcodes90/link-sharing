import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormType = {
  type: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  placeholder: string;
};

export default function FormInput({
  type,
  label,
  iconSrc,
  iconAlt,
  placeholder,
}: FormType) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label className="text-xs my-2">
        {label !== "confirmPassword" ? capitalizedLabel : "Confirm password"}
      </label>
      <div
        className={`flex h-10 border border-gray-light rounded-md py-2 hover:border-purple hover:shadow-xl ${
          errors[label] && "border-red"
        }`}
      >
        <Image
          className="mx-4"
          src={iconSrc}
          alt={iconAlt}
          width={15}
          height={15}
        />
        <input
          className="flex w-full font-light text-sm outline-none"
          type={type}
          placeholder={placeholder}
          {...register(`${label}`, { required: true })}
        />
        {`errors?.${label}` !== "" && (
          <ErrorMessage
            errors={errors}
            name={label}
            render={({ message }) => (
              <p className="flex items-center justify-end w-40 pr-2 text-xs text-red">
                {message}
              </p>
            )}
          />
        )}
      </div>
    </>
  );
}
