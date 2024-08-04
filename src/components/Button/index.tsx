import React from "react";

interface IButton {
  text: string;
  action: () => void;
}

function Button({ text, action }: IButton) {
  return (
    <button 
    className="bg-rose-500 rounded-lg p-2 hover:text-white text-rose-800" 
    onClick={action}>
      {text}
    </button>
  );
}

export default Button;
