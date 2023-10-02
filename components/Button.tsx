import React from 'react';

type Props = {
  children: React.ReactNode; // Content to be displayed inside the button.
  type?: 'button' | 'submit' | 'reset'; // Button type attribute (default is 'button').
  btnStyle?: string; // Custom CSS classes for styling the button.
  onClick?: () => void; // Optional click event handler.
};

const Button = ({ children, type, btnStyle, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick && onClick()} // Calls the onClick handler if provided.
      type={type || 'button'} // Sets the button type (default is 'button').
      className={`text-white bg-primary-gradient rounded-lg font-[700] hover:opacity-80 relative flex items-center justify-center ${btnStyle}`}
    >
      {children} {/* Displays the content passed as children. */}
    </button>
  );
};

export default Button;