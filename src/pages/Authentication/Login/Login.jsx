import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import Spinner from "../../../Utils/Spinner";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [showPass, setShowPass] = useState("password");

  const loginData = (data) => {
    console.log(data);
  };

  const handleShowPass = () => {
    setShowPass(showPass === "text" ? "password" : "text");
  };

  if (googleError || githubError) {
    return (
      <div>
        <p>Error: {googleError?.message ?? githubError?.message}</p>
      </div>
    );
  }
  if (googleLoading || githubLoading) {
    return <Spinner />;
  }
  if (googleUser || githubUser) {
    return (
      <div>
        <p>Signed In User: {googleUser?.email ?? githubUser?.email}</p>
      </div>
    );
  }

  return (
    <div className="loginForm">
      <fieldset>
        <legend>Login</legend>
        <form
          onSubmit={handleSubmit((data) => {
            loginData(data);
          })}
        >
          <input {...register("email")} placeholder="Email" type="email" />
          <div className="pass">
            <input
              {...register("password")}
              placeholder="Password"
              type={showPass}
            />
            <span onClick={handleShowPass}>
              {showPass === "text" ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <input type="submit" value="Login" />
        </form>
        <div className="socialLogin">
          <p>or</p>
          <div className="socialLoginBtn">
            <button onClick={() => signInWithGoogle()}>
              Continue with <FaGoogle />
            </button>
            <button onClick={() => signInWithGithub()}>
              Continue with <FaGithub />
            </button>
          </div>
        </div>

        <div className="loginPageSignUpBtn">
          New here? <Link to="/authentication/registration">Sign up</Link>
        </div>
      </fieldset>
    </div>
  );
}
