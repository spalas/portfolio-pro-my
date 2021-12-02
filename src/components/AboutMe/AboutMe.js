import React from 'react';
import myPic from '../../../src/assests/Home/mypic.gif'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 >About me </h1>
            <hr />
            <div className="row">
                <div className="image col-12 col-md-6 col-lg-6">
                    <img style={{ width: "100%" }} src={myPic} alt="" />
                </div>
                <div className="imageText col-12 col-md-6 col-lg-6 p-3 ">
                    <div className="hits p-5 ">

                        <h3 style={{ color: 'blue', padding: "20px" }}>Palash Sarkar</h3>
                        <h6>Frontend and Backend Developer</h6>
                    </div>
                    <p style={{ padding: "2px" }}>
                        As a frontend developer of experience writing web apps that span consumer productivity.Creative extensive knowledge of front-end JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React . I have full-stack experience includes Node.js and Express, MongoDB as well as more traditional technologies Adode  Photoshop, adobe XD and MySQL
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AboutMe;