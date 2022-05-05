import React from "react";
import "./NotFoundPage.css";
import notFoundPage from "../../images/notFoundPage.png";
const NotFoundPage = () => {
  return (
    <div>
      <h2 className="text-danger  text-center notFoundTitle">
        Page not found{" "}
      </h2>
      <img className="img w-100" src={notFoundPage} alt="" />
    </div>
  );
};

export default NotFoundPage;
