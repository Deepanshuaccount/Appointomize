import React from "react";
import "../PrivacyPolicy/privacy.css";
const Privacy = () => {
  const privacyData = [
    {
      mainHeading: "Privacy Policy",
      intro:"Introduction",
      paratext:
        " Appointimize is committed to protecting your privacy. This policy outlines how we collect, use, and protect your information.",
      heading1: "Information Collection",
      paraText1:
        "We collect personal information such as name, email, phone number, and payment details when you register or use our services.",
      heading2: "Use of Information",
      paraText3:
        "Your information is used to manage appointments, process payments, and enhance your user experience. We may also use it to send promotional materials and updates.",
      
      heading3: "Data Protection",
      paraText7:
        "We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure.",
        heading4: "Third-Party Sharing",
        paraText4:"We do not sell, trade, or share your personal information with third parties without your consent, except as required by law.",
      heading6: "Cookies",
      paraText6:
        "We use cookies to improve your experience on our website. You can control cookie preferences through your browser settings.",
        heading10: "Your Rights",
      paraText10:
      <span> You have the right to access, modify, or delete your personal information. Contact us at <span style={{color:"blue"}}>info@appointimize.com </span>for any privacy-related inquiries.</span>,
  
        heading9: "Changes to Policy",
      paraText9:
        " We may update this policy periodically. Changes will be posted on our website with the updated date.",
        heading11: "Contact Information",
        paraText11:
         <span> For questions or concerns about our privacy practices, please contact us at<span style={{color:"blue"}}> info@appointimize.com.</span></span>,
    },
  ];
  return (
    <>
      <div className="main-privacy">
        <div className="privacy-top-banner">
        </div>
          <div className="wrap-privacy-policy">
            {privacyData.map((item, id) => (
              <div key={id} className="privacy-policy-content">
                <h2>{item.mainHeading}</h2>
                <h4>{item.intro}</h4>
                <p>{item.paratext}</p>
                <h4>{item.heading1}</h4>
                <p>{item.paraText1}</p>
                &nbsp;
                <h4>{item.heading2}</h4>
                <p>{item.paraText3}</p>
                &nbsp;
                <h4>{item.heading3}</h4>
                <p>{item.paraText7}</p>
                &nbsp;
                <h4>{item.heading4}</h4>
                <p>{item.paraText4}</p>
                &nbsp;
                <h4>{item.heading6}</h4>
                <p>{item.paraText6}</p>
                <h4>{item.heading10}</h4>
                <p>{item.paraText10}</p>
                <h4>{item.heading9}</h4>
                <p>{item.paraText9}</p>
                <h4>{item.heading11}</h4>
                <p>{item.paraText11}</p>
             
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Privacy;
