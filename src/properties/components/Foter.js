import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/property.css';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaInstagramSquare } from'react-icons/fa';

const Footer = () => {
    return (
      <footer className=" bg-dark text-light text-center p-4 footer" id="footer">
        <div className="container">
          <div className="row text-center ">
            <div className="col-md-6">
              <p className="mb-0">
                <p><b>Folow us on:</b></p>
                <a href="https://facebook.com" className="text-light me-2 icon" target="_blank" rel="noopener noreferrer">
                  < FaTwitter size={30} color="#55acee" />
                 
                </a>
                <a href="https://twitter.com" className="text-light me-2 icon" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#55acee" />
                </a>
                <a href="https://linkedin.com" className="text-light icon" target="_blank" rel="noopener noreferrer">
                  <FaInstagramSquare size={30} color="#55acee" />
                </a>
                <a href="https://linkedin.com" className="text-light icon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={30} color="#55acee" />
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-0"><b>
                <Link to="#">
                Terms and Conditions Apply </Link>| &copy; {new Date().getFullYear()} Legado
              </b>
              </p>
              <p className="icon-name" ><b>Email: info@domainname.com</b></p>
              <p><b>Tel: +24712345678</b></p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;