import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLoginPage from "../SocialLoginPage/SocialLoginPage";
import { async } from "@firebase/util";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-primary text-center mt-3">REGISTER</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
        </Form.Group>

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

        <input
          onClick={() => setTerms(!terms)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={terms ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFot="terms"
        >
          Terms and Conditions
        </label>

        <Button
          disabled={!terms}
          variant="primary w-50 mx-auto d-block mt-2"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <p>
        Have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLoginPage></SocialLoginPage>
    </div>
  );
};

export default Register;
