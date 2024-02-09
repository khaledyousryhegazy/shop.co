import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  window.scrollTo({ top: 0, behavior: "auto" });

  //   const [loginEmail,setLoginEmail] = useState("");
  //   const [loginPassword,setLoginPassword] = useState("");

  //   const [registerEmail,setRegisterEmail] = useState("");
  //   const [registerPassword,setRegisterPassword] = useState("");
  //   const [registerName,setRegisterName] = useState("");
  //   const [registerAvatar,setRegisterAvatar] = useState("");

  const LoginForm = () => {
    return (
      <div className="bg-[#F2F0F1] py-7 rounded-lg shadow-lg flex flex-col w-full items-center max-w-4xl">
        <h2 className="p-3 text-3xl font-bold text-black">SHOP.CO</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-black border-solid"></div>
        <h3 className="text-xl font-semibold text-black pt-2">Sign In!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon">
            <FaFacebookSquare className="text-xl" />
          </div>
          <div className="socialIcon">
            <FaGithubSquare className="text-xl" />
          </div>
          <div className="socialIcon">
            <FaGoogle className="text-xl" />
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          ></input>
          <button className="rounded-2xl m-2 text-white bg-black w-2/5 px-4 py-2 shadow-md hover:text-black hover:bg-white">
            Sign In
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-black border-solid"></div>
        <p className="text-black mt-4 text-sm">Don't have an account?</p>
        <p
          className="text-black mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="bg-[#F2F0F1] rounded-lg shadow-lg py-7  flex flex-col w-full items-center max-w-4xl">
        <h2 className="p-3 text-3xl font-bold text-black">SHOP.CO</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-black border-solid"></div>
        <h3 className="text-xl font-semibold text-black pt-2">
          Create Account!
        </h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon border-black">
            <FaFacebookSquare className="text-black text-xl" />
          </div>
          <div className="socialIcon border-black">
            <FaGithubSquare className="text-black text-xl" />
          </div>
          <div className="socialIcon border-black">
            <FaGoogle className="text-black text-xl" />
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col items-center justify-center mt-2">
          <input
            type="password"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Name"
          ></input>
          <input
            type="email"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          ></input>
          <input
            type="password"
            className="rounded-md px-2 py-1 w-4/5 md:w-full border-[1px] border-black m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Avatar URL"
          ></input>
          <button className="rounded-md m-4 text-black bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-black">
            Sign Up
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-black border-solid"></div>
        <p className="text-black mt-4 text-sm">Already have an account?</p>
        <p
          className="text-black mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account?
        </p>
      </div>
    );
  };

  return (
    <div className="container min-h-screen md:py-2 flex items-center justify-center">
      <main className="flex items-center w-full px-2 md:px-20">
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
