import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import Spinner from "../../../Utils/Spinner";

export default function Registration() {
  let [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const signUpData = (data) => {
    const { username, email, password, confirmPass } = data;
    if (password === confirmPass) {
      console.log("pass match");
      createUserWithEmailAndPassword(email, password);
      navigate("/");
    } else alert("Does not match");
  };

  if (googleError || githubError || error) {
    return (
      <div>
        <p>Error: {googleError?.message ?? githubError?.message}</p>
      </div>
    );
  }
  if (googleLoading || githubLoading || loading) {
    return <Spinner />;
  }
  if (googleUser || githubUser || user) {
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
