import React, { useState, useContext, useEffect } from "react";
import Promptform from "./Promptform";
import {
  ListGroup,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { PrContext } from "./PrContext";

function PromptList() {
  const { setPromptClue } = useContext(PrContext);

  const handleSelect = (e) => {
    console.log("prompt selection :", e.slice(1));
    setPromptClue(e.slice(1));
  };
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">OpenAI</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Prompts"
                menuVariant="dark"
                onSelect={handleSelect}
              >
                <NavDropdown.Item href="#Fun Facts About An Animal">
                  Fun Facts About An Animal
                </NavDropdown.Item>
                <NavDropdown.Item href="#Describe about a product">
                  Describe about a product
                </NavDropdown.Item>
                <NavDropdown.Item href="#Write a review for the Movie">
                  Write a review for the Movie
                </NavDropdown.Item>
                <NavDropdown.Item href="#Write a short poem about">
                  Write a short poem about
                </NavDropdown.Item>
                <NavDropdown.Item href="#Give details about a place">
                  Give details about a place
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default PromptList;
