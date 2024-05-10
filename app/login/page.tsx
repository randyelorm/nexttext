import { login, signup } from "./actions";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-center flex-col">
          <Image src={Logo} alt="logo" />
          <br />
          <h2 className="text-center text-bold">SIGN UP</h2>
        </div>

        <br />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            name="fullname"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <button
            className="bg-custom-bg hover:scale-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            formAction={signup}
          >
            Sign up
          </button>
          <br />
          Already have an account?
          <button
            className="bg-white hover:scale-125 text-custom-bg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-2 border-custom-bg"
            formAction={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
