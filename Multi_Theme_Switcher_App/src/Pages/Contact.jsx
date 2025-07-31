import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out at:{" "}
        {/* here {" "} :- This ensures there is a space after the colon (:) and before the email link. */}
        <a href="mailto:samplecontact@example.com">samplecontact@example.com</a>
      </p>
    </div>
  );
}

export default Contact;
