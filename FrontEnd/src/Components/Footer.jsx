import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 p-7 font-[sans-serif] tracking-wide">
      <div>
        <center>
          <p className="text-gray-300 text-sm mt-5">
            © NextGen. All rights reserved.
          </p>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
