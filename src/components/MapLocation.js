import React from 'react'

const MapLocation = () => {
  return (
    <div id='location' className="mt-10 lg:px-20 h-60 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.001219026262!2d81.72631720926083!3d21.16777493719079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c483a38b3377%3A0xb1f94e1578d97224!2sMana%2C%20Chhattisgarh%20492015!5e1!3m2!1sen!2sin!4v1742473753603!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }} // Use curly braces for inline styles
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )
}

export default MapLocation