import React from "react";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";

const SocialLoginPage = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>

      <div>
        <button className="btn btn-info w-50 d-block mx-auto mb-4">
          <img height={50} width={50} src={google} alt="" />
          <span className="px-2">Google SignIn</span>
        </button>

        <button className="btn btn-info w-50 d-block mx-auto">
          <img height={50} width={50} src={facebook} alt="" />
          <span className="px-2">FaceBook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLoginPage;
