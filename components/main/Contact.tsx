"use client";

import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form: any = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q8vdku4",
        "template_ssqc8hg",
        form.current,
        "B873ChdBLgRbT98KY"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully. I will contact you soon.");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNo("");
          setMessage("");
        },
        (error) => {
          toast.error("Message Not Sent.");
        }
      );
  };
  return (
    <section id="contact" className="z-[100]">
      <div className=" text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20">Let&lsquo;s get in touch </div>
      <form
        ref={form}
        className=" bg-transparent flex flex-col md:w-[50%] w-[80%]  m-auto rounded-lg shadow-lg border border-[#2A0E61] py-10 mb-10"
        onSubmit={(e) => sendEmail(e)}
      >
        <div className="flex md:flex-row flex-col justify-around ">
          <div className="flex flex-col md:w-[50%] pl-10 pr-10 pb-5 md:pb-0 pb-5">
            <p className="text-white text-xs font-thin opacity-50 pb-3">
              First Name
            </p>
            <input
              type="text"
              name="firstName"
              className="bg-transparent text-white  shadow-lg border-b border-[#2A0E61] focus:outline-none"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="flex flex-col md:w-[50%] pl-10 pr-10">
            <p className="text-white text-xs font-thin opacity-50  pb-3">
              Last Name
            </p>
            <input
              type="text"
              name="lastName"
              className="bg-transparent text-white  shadow-lg border-b border-[#2A0E61] focus:outline-none mb-5 "
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
        <div className="flex justify-around pb-5 md:flex-row flex-col">
          <div className="flex flex-col md:w-[50%] pl-10 pr-10 md:pb-0 pb-5">
            <p className="text-white text-xs font-thin opacity-50  pb-3">
              Email
            </p>
            <input
              type="email"
              name="email"
              className="bg-transparent text-white  shadow-lg border-b border-[#2A0E61] focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col md:w-[50%] pl-10 pr-10 ">
            <p className="text-white text-xs font-thin opacity-50  pb-3">
              Phone No
            </p>
            <input
              type="text"
              name="phoneNo"
              className="bg-transparent text-white  shadow-lg border-b border-[#2A0E61] focus:outline-none"
              onChange={(e) => setPhoneNo(e.target.value)}
              value={phoneNo}
            />
          </div>
        </div>
        <div className="md:flex-row flex-col pl-10 w-full pr-10">
          <p className="text-white text-xs font-thin opacity-50  pb-3">
            Message
          </p>
          <input
            type="text"
            name="message"
            className="bg-transparent text-white  shadow-lg border-b border-[#2A0E61] focus:outline-none w-full"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button type="submit" className="text-white mt-7">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;
