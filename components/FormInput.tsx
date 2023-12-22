import React from "react";

const FormInput = ({ onChange, value, name, label }: FormInputProps) => (
  <div className="sm:col-span-2">
    <label className="block text-sm font-semibold leading-6 text-white">
      {label}
    </label>
    <div className="mt-2.5">
      <input
        type={name}
        name={name}
        id={name}
        autoComplete={name}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 focus:ring-xenon-400 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
);

export default FormInput;
