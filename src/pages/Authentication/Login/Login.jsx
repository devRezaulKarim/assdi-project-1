import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
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
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [showPass, setShowPass] = useState("password");

  const navigate = useNavigate();

  const loginData = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  const handleShowPass = () => {
    setShowPass(showPass === "text" ? "password" : "text");
  };

  if (googleError || githubError || error) {
    return (
      <div>
        <p>
          Error:{" "}
          {googleError?.message ?? githubError?.message ?? error?.message}
        </p>
      </div>
    );
  }
  if (googleLoading || githubLoading || loading) {
    return <Spinner />;
  }
  if (googleUser || githubUser || user) {
    return navigate("/");
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
