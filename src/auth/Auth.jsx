import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { supabase } from "../supabase/client";

function AuthOnly({ children }) {

  const navigate = useNavigate();

  const [isAuthenticated] = useState(supabase.auth.user());

  /* If user is authenticated, the following line renders 
  the tags inside the AuthOnly Tag otherwise navigate the user to the auth view*/

  // <Navigate to='/login' />
  return isAuthenticated ? children : navigate("/login");
}

export default AuthOnly;