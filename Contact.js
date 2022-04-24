import React from "react";
import "./Contact.css";
import { useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [Data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
    Message: "",
  });
  let name, value;
  const Postdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...Data, [name]: value });
  };
  const Submit = async (e) => {
    e.preventDefault();
    const { fname, email, phone, Message } = Data;
    const response = fetch("https://armaan-b8d4a-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            email,
            phone,
            Message,
          }),
        }
      );
      if (response!=null) {
        alert("data added")
        ;
      } else {
        alert("data not added");
      }

    };

  return (
    <div>
      <form method="post" onSubmit={Submit} action="https://miniproject-photo-gallary-default-rtdb.firebaseio.com/userdata">
      <div className="first ">
        <div className="second">
          <h1 className="display-1 text-center fst-italic">Contact Us</h1>

          <div className="form d-flex flex-wrap border-rounder">
            <div className="name namescon fs-2 ">
              Name <ContactPageIcon style={{ color: "white", fontSize: "35px" }}/>
              <input
                value={Data.fname}
                onChange={Postdata}
                className=" namescon text-dark bg-dark namescon a1234 "
                type="text"
                name="fname"
                id=""
              />
            </div>
            <div className="email namescon namescon fs-2 ">
              Email:<MailIcon style={{ color: "white", fontSize: "35px" }}/>
              <input
                value={Data.email}
                onChange={Postdata}
                className="  text-dark bg-dark namescon a1234 "
                type="text"
                name="email"
                id=""
              />
            </div>
            <div className="name namescon fs-2 ">
              Phone:<PhoneAndroidIcon style={{ color: "white", fontSize: "35px" }}/>
              <input
                value={Data.phone}
                onChange={Postdata}
                className="  text-dark namescon bg-dark namescon a1234 "
                type="Number"
                name="phone"
                id=""
              />
            </div>
            <div className="name namescon fs-2 ">
              Issue:<FeedbackIcon style={{ color: "white", fontSize: "35px" }}/>
              <textarea
                value={Data.Message}
                onChange={Postdata}

                className="   bg-dark namescon a1234 "
                type="text"
                name="Message"
                row="20"
                cols="20"
                id=""
              />
              
              <button
                onClick={Submit}
                className="display-5 border-rounded text-center contact-btn text-end   fw-bolder"
              >
                Submit <SendIcon style={{ color: "black", fontSize: "45px" }}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Contact;
