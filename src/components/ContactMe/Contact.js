import React, { useEffect } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    })

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_xb3hgvq', 'template_32maoi2', e.target,
            "user_4dDFap90gXZh3UHDAPQKe").then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        e.target.reset();

    }

    return (
        <div className="container" >
            <h1 className="my-3">Contact <span style={{ color: "tomato" }}>me</span></h1>


            <div class="row">
                <div className="col-12 col-md-6 " style={{
                    marginTop: "50px",
                    textAlign: "left",
                }} data-aos="fade-down">

                    <h1 className="animate__animated animate__bounce">Contact me </h1>
                    <h5>just fill the contact form </h5>
                    <p>Hey Do you want make your website you can contact with me </p>
                    <button type="button" className="btn btn-primary mt-5">See more</button>
                </div>
                <div className="col-12 col-md-6" data-aos="fade-down">
                    <div className=" container"
                        style={{
                            marginTop: "50px",
                            width: "95%",
                            backgroundImage: "url('https://i2.wp.com/esferacreativa.com/wp-content/uploads/2021/04/plugin-formulario-wordpress-email-marketing-MadridNYC.jpg?resize=702%2C459&ssl=1')",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}>
                        <h1 style={{ marginTop: "25px" }}>Contact form</h1>
                        <form className="row" style={{ margin: "2px 5px 5px 2px" }}
                            onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="name" name="name"></input>
                            <label>Email</label>
                            <input type="email" name="user_email" className="form-control"></input>

                            <label>Message</label>
                            <textarea name="message" rows="4" className="form-control"></textarea>
                            <input type="submit" value="send" className="form-control my-3  btn btn-primary" />

                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Contact;