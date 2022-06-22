import React from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

export default function Navb() {
  return (
    <div className="d-flex justify-content-around row">
      <Navbar color="warning" expand="md" fixed="" light>
        <div>
          <NavbarBrand href="/" className="navbar-brand">
            Nimadir
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
        </div>
        <div>
          <Collapse navbar>
            <NavbarText>Movie</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
