import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { supabase } from "../supabase/client";

function AuthOnly({ children }) {

  const navigate = useNavigate();

  const [isAuthenticated] = useState(supabase.auth.user());

  /* If user is authenticated, the following line renders 
  the tags inside the AuthOnly Tag otherwise navigate the user to the auth view*/

  // <Navigate to='/login' />
  // navigate("/login")
  return isAuthenticated ? children : <Navigate to='/login' />;
}

export default AuthOnly;