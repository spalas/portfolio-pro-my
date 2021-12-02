import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_xb3hgvq', 'template_32maoi2', e.target,
            "user_4dDFap90gXZh3UHDAPQKe").then(res => {
                console.log(res)
            }).catch(err => console.log(err))

    }

    return (
        <div className="container"
            style={{
                marginTop: "50px",
                width: "50%",
                backgroundImage: "url('https://i2.wp.com/esferacreativa.com/wp-content/uploads/2021/04/plugin-formulario-wordpress-email-marketing-MadridNYC.jpg?resize=702%2C459&ssl=1')",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
            <h1 style={{ marginTop: "25px" }}>Contact form</h1>
            <form className="row" style={{ margin: "25px 85px 75px 100px" }}
                onSubmit={sendEmail}>
                <label>Name</label>
                <input type="name" name="name"></input>
                <label>Email</label>
                <input type="email" name="user_email" className="form-control"></input>

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control"></textarea>
                <input type="submit" value="send" className="form-control mt-3 btn btn-primary" />

            </form>
        </div>
    );
};

export default Contact;