"use client";

interface ButtonProps {
  appName: string;
}

export const Button = ({ appName }: ButtonProps) => {
  return (
    <button onClick={() => alert(`Hello from your ${appName} app!`)}>
      Boop
    </button>
  );
};
