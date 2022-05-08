import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLoginPage from "../SocialLoginPage/SocialLoginPage";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  let errorMassage;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    //navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (error) {
    errorMassage = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://shielded-harbor-12298.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const forgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("reset password");
    } else {
      toast("Enter your email ");
    }
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center mt-3">LOGIN</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      {errorMassage}
      <p>
        New account?{" "}
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password:{" "}
        <button
          className="text-success pe-auto text-decoration-none btn btn-link"
          onClick={forgetPassword}
        >
          Forget Password
        </button>
      </p>
      <SocialLoginPage></SocialLoginPage>
      <ToastContainer />
    </div>
  );
};

export default Login;
