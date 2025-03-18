import React, { useEffect, useState } from "react";
import axios from "axios";

// @REVIEW - Constants variable should be declared here, like
//  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginForm() {
  //truoc tien la lay gia tri cua email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  // @REVIEW - Need consistency in naming convention. Normal function name should not start with capital letter, as the compiler might mistake it as functional components
  const [isValid, SetValid] = useState(false);
  // @REVIEW - Constant like this (unchanged variable) should not be declared in functions, unless you need the constant to be cleaned up after the function finished running, or in this case, when the component unmounted.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // lap function kiem tra gia tri
  const checkAccount = () => {
    console.log("co chay");
    if (email == null) {
      setError("This could not leave empty");
    } else if (!emailRegex.test(email)) {
      setError("Your email is not valid, please try again");
    } else if (password == null) {
      setError("This could not leave empty");
    } else if (password.length < 8) {
      setError("Your password is not valid, please try again");
    }
    SetValid(true);
    // @REVIEW - Why not calling the user login here instead of triggering it via useEffect?
  };
  // @REVIEW - Normal function name should not start with capital letter, as the compiler might mistake it as functional components
  const LoginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email: email,
        password: password,
      });
      console.log("email: ", email);
      console.log("password:", password);
      const token = response.data.token;
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isValid) {
      LoginUser();
      SetValid(false);
    }
  }, [isValid]);

  return (
    <div>
      <form className="max-w-sm mx-auto p-20 border-2 rounded-md flex flex-col items-center">
        <h2 className=" mb-5 font-bold text-lg">Login</h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email@example.com"
            required
            // @REVIEW - Avoid declaring and calling function in component. Create a separate function instead
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="your pass****"
            required
            // @REVIEW - Avoid declaring and calling function in component. Create a separate function instead
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <p className="text-red-600">{error}</p>
        <button
          type="submit"
          // @REVIEW - Please either use className, or inline styling but not both of them. See https://tailwindcss.com/docs/styling-with-utility-classes#using-arbitrary-values on how to use custom value in tailwind
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          style={{ backgroundColor: "#ff0000" }}
          // @REVIEW - Avoid declaring and calling function in component. Create a separate function instead
          onClick={() => checkAccount()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
