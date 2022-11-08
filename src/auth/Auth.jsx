import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { supabase } from "../supabase/client";

function AuthOnly({ children }) {


  const [isAuthenticated] = useState(supabase.auth.user());

  /* If user is authenticated, the following line renders 
  the tags inside the AuthOnly Tag otherwise navigate the user to the auth view*/


  return isAuthenticated ? children : <Navigate to='/login' />;
}

export default AuthOnly;