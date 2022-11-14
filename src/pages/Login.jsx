import { useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error, data } = await supabase.auth.signIn({email, password,}) 
            // window.location.href = '/dashboard/list_recipe';
        } catch (error) {            
            console.error(error + data);
        } 
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mx-auto">
                    <form onSubmit={handleSubmit} className="card card-body">
                        <div className="d-flex flex-column">
                            <img 
                                className="mb-2" 
                                src="https://vcwphjjgfaigvxqgvmcl.supabase.co/storage/v1/object/sign/tasks/logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0YXNrcy9sb2dvLnN2ZyIsImlhdCI6MTY2MzYzMzMwOSwiZXhwIjoxOTc4OTkzMzA5fQ.jpBp5-pzEjtvw2LCXRHusfZcNkNdZaY7g5eF-2EX4DY" 
                                alt="logo_login" 
                                width="60" 
                                height="auto"
                            />                        
                            <span className="me-auto lg-fs" id="basic-addon1">Bienvenidos de nuevo</span>
                            <span className="mb-2 me-auto md-fs text-secondary" id="basic-addon1">Ingresa, para continuar</span>
                        </div>
                        <div className="form-floating mb-1">
                            <input
                                type="email"
                                id="floatingInput"
                                autoComplete="on"
                                className="form-control md-fs"
                                placeholder="name@example.com"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <label htmlFor="floatingInput" className="md-fs">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"                            
                                className="form-control md-fs"
                                autoComplete="on"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                            <label htmlFor="floatingPassword md-fs">Contraseña</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary mb-2 md-fs" type="submit" >
                            {loading && (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            )}
                            {!loading &&(<span>Iniciar sesión</span>)}
                        </button>

                        <span className="mb-0 sm-fs">No tienes cuenta?
                            <NavLink className="mb-1 btn btn-link sm-fs" to="/sign_up">
                                Crear cuenta
                            </NavLink>
                        </span>
                    </form>
                </div>                
            </div>
        </div>
    );
}

export default Login;