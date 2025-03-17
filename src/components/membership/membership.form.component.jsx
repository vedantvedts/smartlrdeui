import React, { useRef } from "react";
import "./membership.css";
import MembershipCardHtmlComponent from 'components/membership/membership.card.html.component';

import pdfMake from "pdfmake/build/pdfmake";
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts"; // Import virtual font system


const MembershipFormComponent = () => {
  const membershipRef = useRef(null);

  const handlePrintPdf = () => {
    if (!membershipRef.current) {
      console.error("Membership card reference not found");
      return;
    }
    const membershipHtml = membershipRef.current.innerHTML;
    const pdfContent = htmlToPdfmake(membershipHtml);
    console.log('inside handlePrintPdf');

    const docDefinition = {
      info: {
        title: "Membership Print",
      },
      pageSize: "A4",
      pageOrientation: "portrait",
      pageMargins: [50, 50, 40, 40],
      content: pdfContent,
    };

    console.log('docDefinition completed loading');
    pdfMake.createPdf(docDefinition).download("Membership_Card.pdf");
    console.log('pdf successfully downloaded');
  };

  return (
    <div className="subscription-wrap">
      <main>
        <div className="subscription-title">
          <h1>Membership Card</h1>
          <p>
            To Download below Membership card{" "}
            <button className="btn-download" onClick={handlePrintPdf}>Click Here!</button>
          </p>
        </div>

        <div className="membership-html-container" ref={membershipRef}>
          <MembershipCardHtmlComponent />
        </div>
      </main>
      <br />
      <br />
    </div>
  );
};

export default MembershipFormComponent;
