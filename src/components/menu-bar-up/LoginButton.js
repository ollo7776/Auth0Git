import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <span className='login-button'
      onClick={() => loginWithRedirect()}
    >
      {/* Log In */}
      <svg
        viewBox="0 -3 25 25"
        width="30"
        height="20"
        >
        <path
          d='M6 3C0 4.5 0 18 10.5 18 21 18 21 4.5 15 3L15 0C25.5 1.5 25.5 21 10.5 21-4.5 21-4.5 1.5 6 0L6 3 9 1.5 9 1.5 12 1.5 12-3C12-4.5 9-4.5 9-3L9 1.5 12 1.5 12 9C12 10.5 9 10.5 9 9L9 1.5'
          // d="M18 6C18 1 18 2 11 2C1 2 2 1 2 10C2 20 1 19 11 19C18 19 18 20 18 16L20 16C20 21 20 21 11 21C-1 21 0 22 0 10C0-1-1 0 11 0C20 0 20 0 20 4L18 4M10 10 14 16 14 12 23 12 23 8 14 8 14 4 10 10"
          fill="grey" // fill="currentColor"
        />
      </svg>
      {/* Logout square with clue -> Path: M18 6C18 1 18 2 11 2C1 2 2 1 2 10C2 20 1 19 11 19C18 19 18 20 18 16L20 16C20 21 20 21 11 21C-1 21 0 22 0 10C0-1-1 0 11 0C20 0 20 0 20 4L18 4M10 8 10 12 23 12 23 16 30 10 23 4 23 8 10 8 */}
    {/* Login squer with clue -> Path: d='M18 6C18 1 18 2 11 2C1 2 2 1 2 10C2 20 1 19 11 19C18 19 18 20 18 16L20 16C20 21 20 21 11 21C-1 21 0 22 0 10C0-1-1 0 11 0C20 0 20 0 20 4L18 4M10 10 14 16 14 12 28 12 28 8 14 8 14 4 10 10' */}
    </span>
  );
};

export default LoginButton;