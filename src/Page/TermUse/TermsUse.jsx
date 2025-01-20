import React from 'react';
import '../TermUse/term.css';

const TermsUse = () => {
  const termsData = [
    {
      mainHeading: "Terms & Conditions",
      paratext: "Welcome to AppointimiZe! By accessing or using our website, you agree to the following terms and conditions. Please read them carefully, as they govern your use of our services. If you do not agree with these terms, we request that you discontinue using our website. AppointimiZe – Unlink Technologies Private Limited (hereby called AppointimiZe) reserves the right to update or modify these terms at any time, so we encourage you to review this page regularly.",
      heading1: "Ownership and Use of Content",
      paraText1: "All logos, designs, trademarks, and other content on this website are either owned by AppointimiZe or used with permission. While you’re free to browse and view this content, any commercial use, modification, copying, or distribution of it without our written consent is prohibited.",
      heading2: "Acceptable Use",
      paraText2: "We aim to maintain a safe and secure experience for all users. As a user, you agree to follow these rules:",
      heading3: "Security Rules",
      paraText3: "You are prohibited from attempting to compromise the security of the website. This includes, but is not limited to:",
      listItems1: [
        "Accessing data or logging into accounts that you are not authorized to access.",
        "Attempting to probe, scan, or test the website’s security measures without authorization.",
        "Disrupting the website’s functionality through actions like sending viruses, overloading the server, or any other malicious activity.",
        "Sending unsolicited promotional emails or advertisements (spam) using our website."
      ],
      paraText4: "Violations of the website’s security may lead to legal action. We will fully cooperate with law enforcement agencies to investigate and prosecute offenders.",
      heading4: "General Conduct",
      paraText5: "When using our website, you agree not to:",
      listItems2: [
        "Post or share any content that is illegal, abusive, defamatory, obscene, or otherwise harmful.",
        "Violate intellectual property rights, such as copyrights or trademarks, or privacy rights of others.",
        "Use the website to promote criminal activities or violate any applicable laws."
      ],
      heading5: "Unauthorized Email Use",
      paraText6: "You may not use the website to send unsolicited emails or spam, including promotions or advertisements, without the prior consent of AppointimiZe.",
      heading6: "Third-Party Liability",
      paraText7: "AppointimiZe is not responsible for the conduct, statements, or actions of third-party service providers or users. While we aim to provide a secure platform, we cannot be held accountable for any damages or issues arising from third-party interactions or content.",
      heading7: "Indemnity",
      paraText8: "You agree to indemnify and hold AppointimiZe, its officers, employees, and partners harmless from any claims, damages, liabilities, or expenses that arise due to your use of the website or violation of these terms.",
      heading8: "Limitation of Liability",
      paraText9: "AppointimiZe strives to provide a reliable and secure service, but we cannot guarantee that the website will always be free of errors, disruptions, or vulnerabilities. By using our services, you agree that:",
      listItems3: [
        "AppointimiZe will not be held responsible for any direct or indirect damages resulting from your use of the website, including but not limited to data loss, loss of profits, or hardware damage.",
        "Our liability for any claims related to the use of our services is limited to the amount you paid, if any, for those services."
      ],
      heading9: "No Guarantee of Uninterrupted Service",
      paraText10: "We make every effort to maintain our services, but we do not guarantee uninterrupted access. There may be times when we need to temporarily suspend or terminate services, either for maintenance or due to unforeseen issues. In such cases, AppointimiZe will not be liable for any loss or inconvenience caused.",
      heading10: "Changes to These Terms",
      paraText11: "AppointimiZe reserves the right to revise these Terms and Conditions at any time. Continued use of the website after any changes implies your acceptance of the updated terms. We will do our best to inform users of significant changes, but it is your responsibility to periodically review these Terms and Conditions."
    },
  ];

  return (
    <div className='main-terms'>
      <div className='terms-banner-img'>
        {/* You can add a banner image here if needed */}
      </div>
      <div className='wrap-terms'>
        {termsData.map((item, id) => (
          <div key={id} className='terms-content'>
            <h2>{item.mainHeading}</h2>
            <p>{item.paratext}</p>
            <h4>{item.heading1}</h4>
            <p>{item.paraText1}</p>
            <h4>{item.heading2}</h4>
            <p>{item.paraText2}</p>
            <h4>{item.heading3}</h4>
            <p>{item.paraText3}</p>
            <ul>
              {item.listItems1 && item.listItems1.map((listItem, index) => (
                <p><li key={index}>{listItem}</li></p>
              ))}
            </ul>
            <p>{item.paraText4}</p>
            <h4>{item.heading4}</h4>
            <p>{item.paraText5}</p>
            <ul>
              {item.listItems2 && item.listItems2.map((listItem, index) => (
                <p><li key={index}>{listItem}</li></p>
              ))}
            </ul>
            <h4>{item.heading5}</h4>
            <p>{item.paraText6}</p>
            <h4>{item.heading6}</h4>
            <p>{item.paraText7}</p>
            <h4>{item.heading7}</h4>
            <p>{item.paraText8}</p>
            <h4>{item.heading8}</h4>
            <p>{item.paraText9}</p>
            <ul>
              {item.listItems3 && item.listItems3.map((listItem, index) => (
                <p><li key={index}>{listItem}</li></p>
              ))}
            </ul>
            <h4>{item.heading9}</h4>
            <p>{item.paraText10}</p>
            <h4>{item.heading10}</h4>
            <p>{item.paraText11}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsUse;
