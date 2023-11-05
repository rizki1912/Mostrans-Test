import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} Mostrans Test Frontend Developer
    </Container>
  );
};

export default Footer;
