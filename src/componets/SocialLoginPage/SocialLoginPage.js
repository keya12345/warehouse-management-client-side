import React from "react";
import google from "../../images/google.png";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialLoginPage = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorMassage;

  if (error) {
    errorMassage = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      {errorMassage}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto mb-4"
        >
          <img height={50} width={50} src={google} alt="" />
          <span className="px-2">Google SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLoginPage;
