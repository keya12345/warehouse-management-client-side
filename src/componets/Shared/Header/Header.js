import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOUt = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img width={50} height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#items">Items</Nav.Link>
            <Nav.Link href="home#laptopCollection">LaptopCollection</Nav.Link>

            <Nav.Link href="home#computerCollection">
              ComputerCollection
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="blog">
              Blog
            </Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="additem">
                  AddItem
                </Nav.Link>
                <Nav.Link as={Link} to="controlitem">
                  ControlItem
                </Nav.Link>
                <Nav.Link as={Link} to="order">
                  Order
                </Nav.Link>
              </>
            )}

            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOUt}
              >
                SignOut
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
