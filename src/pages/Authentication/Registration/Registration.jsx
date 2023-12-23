import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Registration() {
  const { register, handleSubmit } = useForm();

  const signUpData = (data) => {
    console.log(data);
  };
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
            <button>
              Continue with <FaGoogle />
            </button>
            <button>
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
