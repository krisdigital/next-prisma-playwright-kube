import React from "react";

export type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button: React.FC<ButtonType> = (props) => {
  return <button {...props} className="bg-blue-500 rounded-sm p-2 px-5 text-white font-bold hover:bg-blue-600 cursor-pointer" />
}

export default Button;