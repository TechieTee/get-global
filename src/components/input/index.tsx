"use client";

import React, { useState } from "react";
import styled from "styled-components";
//import { UseFormRegister } from "react-hook-form";

interface IProps {
  height?: number | string;
  label?: string;
  type?: string;
  placeholder?: string;
  //register?: UseFormRegister<any>;
  name: string;
  rules?: Record<string, any>;
  errors?: any;
  required?: boolean;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = (props: IProps) => {
  const {
    height = 50,
    label,
    type = "text",
    placeholder,
    //register,
    name,
    rules,
    errors,
    required,
    defaultValue,
    onChange,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className="mb-2 text-[#404D61] text-[18px] font-medium"
          htmlFor={name}
        >
          {label} {required && <span className="text-[#EB5757]"> *</span>}
        </label>
      )}

      <div className="relative">
        {type === "text" && (
          <input
            id={name}
            className="border border-[#d9d9d9] w-full bg-transparent px-3"
            style={{ height }}
            type="text"
            placeholder={placeholder!}
            defaultValue={defaultValue!}
            onChange={onChange!}
           // {...(register && register(name, { ...rules }))}
          />
        )}

        {type === "number" && (
          <input
            id={name}
            className="border border-[#d9d9d9] w-full  px-3"
            style={{ height }}
            type="number"
            placeholder={placeholder!}
            defaultValue={defaultValue!}
            onChange={onChange!}
           // {...(register && register(name, { ...rules }))}
          />
        )}

        {type === "password" && (
          <input
            id={name}
            className="border border-[#d9d9d9] h-[50px] w-full  pl-3 pr-16"
            style={{ height }}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
          //  {...(register && register(name, { ...rules }))}
          />
        )}

        {type === "password" && (
          <span onClick={() => setShowPassword(!showPassword)}>
          show
          </span>
        )}
      </div>

      {errors && (
        <>
          {errors?.message ? (
            <small className="mt-2 text-red-500">{errors.message}</small>
          ) : (
            <small className="mt-2 text-red-500">
              {label ?? "value"} is required
            </small>
          )}
        </>
      )}
    </div>
  );
};

export default Input;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 50px;

  .input {
    height: 100%;
    font-size: 16px;
    padding: 11px 15px;
    border: 1px solid #d9d9d9;
    width: 100%;
    outline: none;
    box-sizing: border-box;
  }
  .placeholder {
    pointer-events: none;
    position: absolute;
    font-weight: 400;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    padding: 0 8px;
    background-color: transparent!important;
    
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #9a9a9a;
  }

  .input:not(:placeholder-shown).input:not(:focus) + .placeholder {
    transform: scale(0.75) translateY(-36px) translateX(-15%);
    color: #cbd8e3;
    transition: 0.2s ease;
  }

  .input:focus {
    border-color: #367aff;
  }

  .input:focus + .placeholder {
    transform: scale(0.75) translateY(-48px) translateX(-15%);
    color: #367aff;
    transition: 0.2s ease;
  }

  .input:invalid:not(:placeholder-shown) {
    transition: 0.2s ease;
    border-color: #f52c5c;
  }

  .input:invalid:not(:placeholder-shown) + .placeholder {
    transition: 0.2s ease;
    color: #f52c5c;
  }
  .input:invalid:not(:placeholder-shown).input:not(:focus) + .placeholder {
    transform: scale(0.75) translateY(-36px) translateX(-15%);
    color: #f52c5c;
    transition: 0.2s ease;
  }
`;
