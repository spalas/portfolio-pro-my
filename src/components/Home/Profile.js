
import React from 'react';
import Typical from 'react-typical'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-delails">
                    <div className="colz">
                        <div className="colz-icon">



                            <a href='https://www.facebook.com/palashsarkar.sarkar.1'>
                                <i className='fab fa-facebook-square'> </i>
                            </a>
                            <a href='https://www.behance.net/palashsarkar'>
                                <i className='fab fa-behance-square'> </i>
                            </a>
                            <a href='https://www.instagram.com/palash6974/'>
                                <i className='fab fa-instagram-square'> </i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCt8Eo6tCp9Dw6MEiSEB2VaQ'>
                                <i className='fab fa-youtube'> </i>
                            </a>
                            <a href='https://www.linkedin.com/in/palash-sarkar-668350204/'>
                                <i className='fab fa-linkedin'> </i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello, I AM <span className="hightted-text"> Palash Sarkar</span>

                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical loop={Infinity}
                                    steps={[
                                        "Ethusastic Developer ",
                                        1000,
                                        "Full stack Developer",
                                        1000,
                                        "Mern stack Dev",
                                        1000,
                                        "UI/UX Designer",
                                        1000,
                                        "React Developer",
                                        1000,
                                    ]}


                                ></Typical>

                            </h1>
                            <span className='profile-role-tagline'>
                                Touch me for Building application with front-end and Back-End operations
                            </span>


                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn-parimary-btn">

                            {""}
                            HIRE ME{""}

                        </button>
                        <a href="resume.pdf" download="Palash sarkar resume.pdf">
                            <button className="highligted-btn"> GET RESUME</button>
                        </a>
                    </div>


                </div>

                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;