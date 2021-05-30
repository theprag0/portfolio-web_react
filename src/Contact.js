import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {useInputState} from './hooks/useInputState';
import './styles/Contact.css';
// import img1 from './assets/images/xps.jpg';
import img2 from './assets/images/pic2.jpeg';
// import img2 from './assets/images/the-new-york-public-library.jpg';

function Contact(props) {
    const [name, handleNameChange, resetName] = useInputState("");
    const [email, handleEmailChange, resetEmail] = useInputState("");
    const [subject, handleSubjectChange, resetSubject] = useInputState("");
    const [message, handleMessageChange, resetMessage] = useInputState("");
    const [button, setButton] = useState("Send Message")
    // const [bgImg, setBgImg] = useState();

    // useEffect(() => {
    //     const imgs = [img1, img2];
    //     const rand = Math.floor(Math.random() * imgs.length);
    //     setBgImg(imgs[rand]);
    // }, [bgImg]);

    const resetForm = () => {
        resetName();
        resetEmail();
        resetSubject();
        resetMessage();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButton("Sending...");
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                if (result.text === "OK") {
                    resetForm();
                    setButton("Sent!");
                    setTimeout(() => {
                        setButton("Send Message");
                    }, 2000);
                }
            }, (error) => {
                alert("Error sending mail, Please try again later.");
                setButton("Send Message");
            });
    }

    return (
        <section id="contact" style={{backgroundImage: `url(${img2})`}}>
            <div className="container">
                <div id="contact-text">
                    <h1>Contact Me</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                name="name"
                                type="text" 
                                value={name} 
                                onChange={handleNameChange} 
                                placeholder="Your Name" required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                className="form-control"
                                name="email"
                                type="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                placeholder="Your Email" 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                name="subject"
                                type="text" 
                                value={subject} 
                                onChange={handleSubjectChange} 
                                placeholder="Subject" 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                className="form-control" 
                                name="message"
                                value={message} 
                                onChange={handleMessageChange} 
                                placeholder="Message" 
                                required
                            />
                        </div>
                        <button type="submit">
                            {button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;