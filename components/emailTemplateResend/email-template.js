import * as React from "react";
export const EmailTemplate = ({
  fullName,
  email,
  Phone,
  comment,
}) => (
  <div>
    <p><strong>Full name :</strong>{fullName}</p>
    <p>You have received a message from a contact interested in your services on the MOROCCO FALCON CLUB website:</p>
    <div>
      <p><strong>Email : </strong>{email}</p>
      <p><strong>Phone : </strong>{Phone}</p>
      <p><strong>Message : </strong>{comment || "No message provided by customer"}</p>
    </div>
   
  </div>
);
