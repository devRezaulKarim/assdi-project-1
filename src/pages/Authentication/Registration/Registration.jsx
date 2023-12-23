import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import Spinner from "../../../Utils/Spinner";

export default function Registration() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const { register, handleSubmit } = useForm();

  const signUpData = (data) => {
    console.log(data);
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
        <legend>Sign up</legend>
        <form
          onSubmit={handleSubmit((data) => {
            signUpData(data);
          })}
        >
          <input {...register("username")} placeholder="Username" type="text" />
          <input {...register("email")} placeholder="Email" type="email" />
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
          />
          <input
            {...register("confirmPass")}
            placeholder="Confirm Password"
            type="password"
          />

          <input type="submit" value="Sign up" />
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

        <div className="SignUpPageLoginBtn">
          Already have an account? <Link to="/authentication/login">Login</Link>
        </div>
      </fieldset>
    </div>
  );
}
