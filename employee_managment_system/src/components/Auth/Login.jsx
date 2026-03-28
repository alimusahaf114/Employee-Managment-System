import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 rounded-xl  p-20 shadow-[0_2px_12px_rgba(0,0,0,0.15)]  ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);

          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            required
            className="border-2 border-blue-400 outline-none rounded-full py-3 px-4 text-xl  "
            type="email"
            placeholder="Enter your email.."
            onChange={(e)=>{
                setEmail(e.target.value)
            }}  
          />
          <input
            value={password}
            required
            className="border-2 border-blue-400 outline-none rounded-full py-3 px-4 mt-3 text-xl  "
            type="password"
            placeholder="Enter your password.."
            onChange={(e)=>{
                setPassword(e.target.value)
                e.target.value = ''
            }}
          />
          <button className=" text-white  bg-blue-700 rounded-full py-3 px-4 mt-3 text-xl w-full text-bold"
            >
            log in{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
