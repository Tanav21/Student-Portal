import React from "react";
import { useNavigate } from "react-router";
import PageLayout from "../Pages/PageLayout";

const SignUp = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    console.log("Form submitted");
  };

  return (
    <PageLayout>
      <main className="flex justify-center items-center min-h-screen dark:bg-gray-900 bg-gray-100">
        <section className="w-full max-w-md p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg m-4">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center dark:text-gray-200 text-gray-800 mb-6">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  className="w-full p-3 border rounded-lg shadow-sm dark:bg-indigo-700 dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full p-3 border rounded-lg shadow-sm dark:bg-indigo-700 dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg dark:text-gray-400 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="w-full p-3 border rounded-lg shadow-sm dark:bg-indigo-700 dark:text-gray-300 focus:scale-105 transition-transform ease-in-out duration-300"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <a
                className="block text-sm text-blue-400 hover:underline"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Forgot password clicked");
                }}
              >
                Forgot your password?
              </a>

              <button
                type="submit"
                className="w-full p-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform ease-in-out duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="dark:text-gray-300">
                Already have an account?{" "}
                <button
                  onClick={handleNavigateToLogin}
                  className="text-blue-400 hover:underline"
                >
                  Log In
                </button>
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
              <button
                onClick={() => console.log("Sign up with Google")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => console.log("Sign up with LinkedIn")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                  alt="LinkedIn"
                />
              </button>
              <button
                onClick={() => console.log("Sign up with GitHub")}
                className="p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6 dark:invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                  alt="GitHub"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default SignUp;
