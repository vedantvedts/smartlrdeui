import React, { useRef } from "react";
import "./membership.css";
import MembershipCardHtmlComponent from 'components/membership/membership.card.html.component';



const MembershipFormComponent = () => {


    const membershipRef = useRef(null);
    const handlePrint = () => {
        if (membershipRef.current) {
          const printWindow = window.open("", "_blank");
          printWindow.document.write(`
            <html>
              <head>
                <title>Membership Card</title>
                <link rel="stylesheet" href="./membershipHtml.css">
              </head>
              <body>
                ${membershipRef.current.innerHTML}
              </body>
            </html>
          `);
          printWindow.document.close();
          printWindow.print();
        }
      };

  return (
    <div className="subscription-wrap">
      <main>
        <div className="subscription-title">
          <h1>Membership Card</h1>
          <p>
            To Download below Membership card{" "}
            <button className="btn-download" onClick={handlePrint}>Click Here!</button>
          </p>
        </div>

        <div className="membership-html-container">
        <MembershipCardHtmlComponent />
        </div>

      </main>
      <br />
      <br />
    </div>
  );
};

export default MembershipFormComponent;
