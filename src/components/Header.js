import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="d-flex justify-content-center">
      <Link className="m-3" to={"/rwd"}>
        Rwd
      </Link>

      <Link className="m-3" to={"/gallery"}>
        Gallery
      </Link>
    </div>
  );
}
