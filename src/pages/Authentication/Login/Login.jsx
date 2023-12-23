import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const loginData = (data) => {
    console.log(data);
  };

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
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
          />

          <input type="submit" value="Login" />
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

        <div className="loginPageSignUpBtn">
          New here? <Link to="/authentication/registration">Sign up</Link>
        </div>
      </fieldset>
    </div>
  );
}
