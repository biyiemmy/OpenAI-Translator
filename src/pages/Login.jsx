import { Link } from "react-router-dom";
import loginImg from "../assets/robot-handshake-human-background-futuristic-digital-age_53876-129770.avif";

export const Login = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover mr-4"
            src={loginImg}
            alt=""
          />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-xl dark:text-white font-bold text-center pb-5">
              Already have an account with us!
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <div className="">
                <Link to="/main">
                  <button
                    type="button"
                    className="text-white w-32 bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm hover:font-extrabold px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-between mt-3 text-gray-400">
              <div>
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <p>Register now</p>
                </Link>
              </div>
              <Link to="/reset">
                <p>Forgot Password</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
