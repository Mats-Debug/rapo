import React from "react";
import { useFormContext, FieldValues } from "react-hook-form";

interface TextInputProps {
  placeHolder?: string;
  type?: string;
  name: string;
  onInput?: (value: string) => void;
  disabled?: boolean;
}

export function TextInput(props: TextInputProps) {
  const { name, type, placeHolder, onInput, disabled } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const error = errors[name] as { type: string; message: string };
  return (
    <div className="relative w-full items-center flex flex-col ">
      <input
        {...register(name)}
        type={type}
        disabled={disabled}
        onChange={(e) => (onInput != null ? onInput(e.target.value) : "")}
        id={name}
        className="bg-neutral-100 rounded-lg w-full h-[40px]  px-5 "
        placeholder={placeHolder}
      />
      {errors[name] ? (
        <p className="text-red-600 text-sm">{error.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

interface TextInput2Props {
  placeHolder?: string;
  type?: string;
  name: string;
  onInput?: (value: string) => void;
  disabled?: boolean;
}

export function TextInput2(props: TextInput2Props) {
  const { name, type, placeHolder, onInput, disabled } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const error = errors[name] as { type: string; message: string };
  return (
    <div className="relative w-full items-center flex flex-col justify-center">
      <label className="absolute  left-3  ">$</label>
      <div className="inline-block w-full ">
        <input
          {...register(name, { required: "This is Required" })}
          type={type}
          disabled={disabled}
          onChange={(value) =>
            onInput != null ? onInput(value.target.value) : ""
          }
          id={name}
          className="bg-neutral-100   flex  text-gray-900 rounded-lg  w-full  pr-3 pl-8 h-[40px] "
          placeholder={placeHolder}
        />
        {errors[name] ? (
          <p className="text-red-600 text-sm">{error.message}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

interface TextAreaProps {
  placeHolder?: string;
  name: string;
  onInput: (value: string) => void;
}

export function TextArea(props: TextAreaProps) {
  const { name, placeHolder, onInput } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const error = errors[name] as { type: string; message: string };

  return (
    <div className="relative w-full items-center flex flex-col ">
      <textarea
        id={name}
        {...register(name)}
        onChange={(value) => onInput(value.target.value)}
        rows={5}
        className="w-full px-5 pt-2 rounded-lg bg-neutral-100  "
        placeholder={placeHolder}
      />
      {errors[name] ? (
        <p className="text-red-600 text-sm">{error.message}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
