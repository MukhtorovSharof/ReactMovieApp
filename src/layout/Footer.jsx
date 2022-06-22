import React from "react";

export default function Footer() {
  return (
    <div className="row">
      <footer className="fixed-bottom bg-warning text-center text-lg-start">
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Mukhtorov
          </a>
        </div>
      </footer>
    </div>
  );
}
