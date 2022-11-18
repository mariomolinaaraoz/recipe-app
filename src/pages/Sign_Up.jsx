import { useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate, NavLink } from "react-router-dom";
import validator from "validator";

function Sign_Up() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("");
  
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastLiveExample)

      toast.show()
    })
  }

  const validateEmail = (value) => {
    if (!value) {
      setEmailMessage("");
    } else if (validator.isEmail(value)) {
      setEmailMessage("✅");
      setEmail(value);
    } else {
      setEmailMessage(" - Enter a valid email");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordMessage("");
    } else if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setPasswordMessage("✅");
      setPassword(value);
    } else {
      setPasswordMessage("Is Not Strong Password");
    }
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordMessage("");
    } else if (
      validator.equals(value, password)
    ) {
      setConfirmPasswordMessage("✅");
      setConfirmPassword(value);
    } else {
      setConfirmPasswordMessage("No es igual");
    }
  };

  const handleSubmit = async (e) => {   

    if (password !== confirmpassword) {
      alert("Passwords don't match");
    } else {
      e.preventDefault();
      setLoading(true);
      try {
        const { error, data } = await supabase.auth.signUp({ email, password });
        if (!error) {
          alert("Un email de confirmación fue enviado a la dirección '" +
          email +
          "'. Haga click en el link del email, para activar la cuenta.");

        } else {
          alert("Nuestro intento por enviarle un mail de confirmación, fallaron. Por favor intente mas tarde. Gracias");
        }
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      } 
    }   
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mx-auto">
          <form onSubmit={handleSubmit} className="card card-body">
            <span className="mb-2 me-auto lg-fs" id="basic-addon1">
              Crear cuenta
            </span>

            <div className="email form-floating mb-2">
              <input
                required
                type="email"
                autoComplete="on"
                className="form-control md-fs"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => validateEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">
                Email<span className="text-danger">{emailMessage}</span>
              </label>
            </div>
            <div className="password form-floating mb-2">
              <input
                required
                type="password"
                autoComplete="on"
                className="form-control md-fs"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => validatePassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">
                Contraseña <span className="text-danger">{passwordMessage}</span>
              </label>
            </div>

            <div className="confirm_password form-floating mb-3">
              <input
                required
                type="password"
                autoComplete="on"
                className="form-control md-fs"
                id="floatingConfirmPassword"
                placeholder="Confirm password"
                onChange={(e) => validateConfirmPassword(e.target.value)}
              />
              <label htmlFor="floatingConfirmPassword">
                Confirmar contraseña <span className="text-danger md-fs">{confirmPasswordMessage}</span>
              </label>
            </div>

            <button className="w-100 btn btn-md btn-success mb-2 md-fs" type="submit">
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {!loading && <span>Crear cuenta</span>}            
            </button>

            <span className="mb-0 sm-fs">
              Tienes cuenta?
              <NavLink
                className="mb-1 btn btn-link sm-fs"
                to="/login"
              >
                Ingresar
              </NavLink>
            </span>
          </form>
        </div>        
      </div>

    </div>
  );
}

export default Sign_Up;