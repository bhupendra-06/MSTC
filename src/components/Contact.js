import React from "react";
import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const initValues = { name: "", email: "", phone: "", message: "" };
  const initState = { isLoading: false, error: "", values: initValues };
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <div id="contact" className="bg-gray flex items-center justify-center p-6 pt-14 md:pt-20 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-200 to-orange-300 opacity-50 animate-pulse"></div>
      <div className="absolute -top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-20 md:top-1/2 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-30 animate-bounce duration-1000 "></div>
      <div className="absolute inset-0 wavy-background"></div>
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* Left Contact Info */}
        <div className="p-6 md:p-10">
          <h2 className="mb-4 md:mb-6 px-2 text-gray-600 text-2xl md:text-3xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-2 md:mt-4 text-gray-600">
            We&apos;re excited to hear from you! Whether you have questions or
            need assistance, we&apos;re here to help.
          </p>
          <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
            <ContactDetail
              Icon={GrLocation}
              title="Our Location"
              content="A-7/170 BD Shankar Nagar, Raipur (110018)"
            />
            <ContactDetail Icon={FaWhatsapp} title="WhatsApp" content="+91-XXXXX XXXXX" />
            <ContactDetail Icon={MdOutlineLocalPhone} title="Phone" content="+91-XXXXX XXXXX" />
            <ContactDetail Icon={MdEmail} title="Email" content="info@etuition.com" />
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-white bg-opacity-50 shadow-lg p-6 md:p-10 rounded-2xl relative overflow-hidden backdrop-blur-md border border-white/40">
          <div className="absolute -top-12 -right-12 md:-right-16 w-28 h-28 md:w-40 md:h-40 bg-orange-300/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-6 w-16 h-16 md:w-20 md:h-20 bg-yellow-200 rounded-full opacity-40 animate-float"></div>
          <h2 className="mb-4 md:mb-6 px-2 text-gray-600 text-2xl md:text-3xl font-bold">
            Send Us a <span className="text-orange-600">Message</span>
          </h2>
          <form className="space-y-4 md:space-y-5">
            <ContactInputBox
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <ContactInputBox
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <ContactInputBox
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Your Phone"
            />
            <ContactTextArea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Your Message"
            />
            <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactDetail = ({ Icon, title, content }) => (
  <div className="flex items-center space-x-3 md:space-x-4">
    <div className="p-3 md:p-4 bg-yellow-200 rounded-full">
      <Icon className="text-yellow-700 text-lg md:text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-yellow-700 text-sm md:text-base">{title}</h4>
      <p className="text-gray-600 text-xs md:text-sm">{content}</p>
    </div>
  </div>
);

const ContactTextArea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700 transition-transform hover:scale-105"
    rows="4"
  ></textarea>
);

const ContactInputBox = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 md:p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-700 transition-transform hover:scale-105"
  />
);
