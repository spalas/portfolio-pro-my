import React from 'react';
import myPic from '../../../src/assests/Home/mypic.gif'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 style={{ paddingTop: "50px", paddingBottom: "30px" }} >About me </h1>
            <hr />
            <div className="row">
                <div className="image col-12 col-md-6 col-lg-6">
                    <img style={{ width: "100%" }} src={myPic} alt="" />
                </div>
                <div className="imageText col-12 col-md-6 col-lg-6 p-3 ">
                    <div className="hits">

                        <h2 style={{ color: 'blue', textAlign: "left" }}>Palash Sarkar</h2>
                        <h6 style={{ textAlign: "left" }}>Frontend and Backend Developer</h6>
                    </div>
                    <p style={{ padding: "2px", textAlign: "left", paddingTop: "50px" }}>
                        As a frontend developer of experience writing web apps that span consumer productivity.Creative extensive knowledge of front-end JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React . I have full-stack experience includes Node.js and Express, MongoDB as well as more traditional technologies Adode  Photoshop, adobe XD and MySQL
                    </p>
                    <button style={{ textAlign: "left" }} type="button" class="btn btn-primary mt-5 ">Read more</button>
                </div>

            </div>

        </div>
    );
};

export default AboutMe;