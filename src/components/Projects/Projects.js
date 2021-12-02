import React from 'react';
import project1 from '../../assests/Home/website/educatio.png'
import project2 from '../../assests/Home/website/fooddelivey.png'
import project3 from '../../assests/Home/website/splash.png'
import project4 from '../../assests/Home/website/sunglass.png'

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>

            <div class="row row-cols-1 row-cols-md-2 g-4">


                <div class="col">
                    <div class="card">
                        <img src={project1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Education Website</h5>
                            <p class="card-text"> This web site its only eucation website the its has login sytem create by firebase authentication and React</p></div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Fast-vip</h5>
                            <p class="card-text">Fast-vip website its made by only react framework using firebase and google login and client can register his name.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Splash-spa</h5>
                            <p class="card-text"> Splash-spa website it is health relate client can get his service add by logining his name email get his service .</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">two-sa-tar-sunglass</h5>
                            <p class="card-text">Two sunglass it niche type website it has register and google login sytem customer get acan get his by google and register
                            </p></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;