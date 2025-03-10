import React from "react";

const MembershipCardHtmlComponent = () => {
  const membershipHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SMART Membership Card</title>
        <style>
            .smart-card-body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f4f4f4;
                margin: 0;
            }
            .smart-card-wrapper {
                border: 2px solid #ccc;
                border-radius: 10px;
                padding: 20px;
                text-align: center;
                background-color: white;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            }
            .smart-card-header {
                background: linear-gradient(45deg, #344b75, #3770d1);
                color: white;
                padding: 12px;
                font-size: 24px;
                font-weight: bold;
                border-radius: 5px;
            }
            .smart-card-content {
                padding: 20px 0;
            }
            .smart-card-section {
                font-size: 16px;
                font-weight: bold;
                color: #555;
            }
            .smart-card-year {
                font-size: 24px;
                font-weight: bold;
                margin: 10px 0;
            }
            .smart-card-name {
                font-size: 22px;
                font-weight: bold;
                margin: 5px 0;
            }
            .smart-card-id {
                font-size: 18px;
                color: #444;
            }
            .smart-card-duration {
                font-size: 14px;
                color: #777;
            }
            .smart-card-footer {
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid #ddd;
            }
            .smart-card-footer a {
                display: block;
                color: #3770d1;
                text-decoration: none;
                font-size: 14px;
                margin-top: 5px;
            }
            .smart-card-footer a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body class="smart-card-body">
        <div class="smart-card-wrapper">
            <div class="smart-card-header">
                <h2>SMART</h2>
            </div>

            <div class="smart-card-content">
                <p class="smart-card-section">You are a member of the</p>
                <h3>Bangalore Section</h3>

                <div class="smart-card-year">2025</div>

                <h2 class="smart-card-name">DR SOMSING RATHOD PH.D.</h2>
                <p class="smart-card-id">Member # 98931738</p>
                <p class="smart-card-section">Bangalore Section</p>

                <p class="smart-card-duration">
                    SMART Member for 2 years <br>
                    Valid through 31 December 2025
                </p>
            </div>

            <div class="smart-card-footer">
                <a href="http://smart.org/" target="_blank">http://smart.org/</a>
                <a href="http://www.smart.org/contactcenter" target="_blank">http://www.smart.org/contactcenter</a>
                <a href="https://www.smart.org/benefits/" target="_blank">https://www.smart.org/benefits/</a>
                <a href="https://www.smart.org/start" target="_blank">https://www.smart.org/start/</a>
            </div>
        </div>
    </body>
    </html>
  `;

  return <div dangerouslySetInnerHTML={{ __html: membershipHtml }} />;
};

export default MembershipCardHtmlComponent;
