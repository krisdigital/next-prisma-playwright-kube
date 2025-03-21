import React from "react";

export type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input: React.FC<InputType> = (props) => {
  return <input {...props} className="border-gray-400 border-1 rounded-sm p-2 w-full focus:shadow-blue-400/50 focus:border-blue-500 focus:shadow-sm focus:ring-0 focus:outline-0" />
}

export default Input;