import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="background">
            <div className="container mt-5">
                <div className="row">
                    <div style={{ textAlign: "left", padding: "10px", color: "white", }} className="col-6 col-md-6 col-lg-3">
                        <h3>About me</h3>
                        <p>Frontend and backed developer</p>
                    </div>
                    <div style={{ textAlign: "left", padding: "10px", color: "white" }} className="col-6 col-md-6 col-lg-3">
                        <h3>Contact me</h3>
                        <p>Email: spalash521@gmail.com</p>
                    </div>
                    <div style={{ textAlign: "left", padding: "10px", color: "white" }} className="col-6 col-md-6 col-lg-3">
                        <h3>Projects</h3>
                        <p>E-commerse </p>
                        <p>Education</p>
                        <p>health</p>
                        <p>Food delivey</p>
                    </div>
                    <div style={{ textAlign: "left", padding: "10px", color: "white" }} className="col-6 col-md-6 col-lg-3">
                        <h3>Social Media</h3>
                        <p>faceback</p>
                        <p>LinkedIn</p>
                        <p>Youtube</p>
                        <p>Behance</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;