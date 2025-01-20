import React from "react";
import "../PrivacyPolicy/privacy.css";
import { Typography, Box } from '@mui/material';
import { Info as InfoIcon, Security as SecurityIcon, Link as LinkIcon } from '@mui/icons-material';

const Privacy = () => {
  const privacyData = [
    {
      mainHeading: "Privacy Policy",
      // intro: "Introduction",
      paratext:
        "The terms We / Us / Our / Company refer to AppointimiZe – Unlink Technologies Private Limited, and the terms You / Your / Yourself refer to the users.",
      // heading1: "Information Collection",
      paraText1:
        "This Privacy Policy is an electronic record in accordance with the provisions of the Information Technology Act, 2000. It does not require any physical, electronic, or digital signature.",
      paraText2:
        "This Privacy Policy is a legally binding document between you and the Company. By using the Website or any associated services, you agree to the terms outlined below. If you do not agree with this Privacy Policy, please do not use our Website or services.",
      paraText3:
        "This document complies with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data of Information) Rules, 2011, under the Information Technology Act, 2000, and addresses the collection, use, storage, and transfer of sensitive personal data or information.",
      heading2: "User Information",
      paraText4:
        "When you register for services on our Website, we may collect the following details:",
      paraText5: (
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Gender</li>
          <li>Age</li>
          <li>PIN code</li>
          <li>Credit/Debit card details</li>
          <li>Medical records and history</li>
          <li>Sexual orientation</li>
          <li>Biometric data</li>
          <li>Password</li>
          <li>Occupation and interests</li>
        </ul>
      ),
      paraText6:
        "The information you provide allows us to improve our services and provide you with a better experience. Your information will only be used to maintain, protect, and improve our services.",
      heading3: "Cookies",
      paraText7:
        "To enhance user experience, we may use cookies or similar tools to collect information. Cookies are small files assigned to your device to uniquely identify your user session and provide personalized content.",
      paraText8:
        "Cookies do not collect personal data unless you voluntarily provide it (for example, during registration).",
      heading4: "Links to Other Sites",
      paraText9: "Our website may contain links to third-party websites. These sites operate independently of us, and we are not responsible for their privacy practices.",
      heading5: "Information Sharing",
      paraText10:
        "We do not share sensitive personal information with third parties without your consent, except in the following situations: When required by law or government authorities.",
      heading6: "Information Security",
      paraText11:
        "We take security seriously and implement appropriate measures to protect your data from unauthorized access, alteration, or disclosure.",
      heading7: "Changes to the Privacy Policy",
      paraText12:
        "We may update this Privacy Policy as the internet and regulations evolve. Any changes will not affect the use of information collected under the prior policy.",
      heading8: "Grievance Redressal",
      paraText13:
        "If you have any complaints or concerns regarding the handling of your data, please reach out to our designated Grievance Officer.",
      paraText14: (
        <span>
          <strong>Grievance Officer:</strong> Mrs. Honey
        </span>
      ),
      heading10: "AppointimiZe",
      paraText15: (
        <span>
          Email: <strong>info@appointimize.com</strong>
        </span>
      ),
      paraText16: (
        <span>
          Phone: <strong>+91-92660 42626</strong>
        </span>
      ),
    },
  ];

  return (
    <div className="main-privacy">
      <div className="privacy-top-banner">
        {/* Add a banner image or styling here */}
      </div>
      <div className="wrap-privacy-policy">
        {privacyData.map((item, id) => (
          <div key={id} className="privacy-policy-content">
            <Typography variant="h2" gutterBottom>
              {item.mainHeading}
            </Typography>
            {/* <Typography variant="h4" gutterBottom>
              {item.intro}
            </Typography> */}
            <Box mt={4}>
            <Typography variant="body1" paragraph>
              {item.paratext}
            </Typography>
            </Box>
            <Box mt={2}>
              {/* <Typography variant="h4">
                <InfoIcon fontSize="small" /> {item.heading1}
              </Typography> */}
              <Typography variant="body1" paragraph>
                {item.paraText1}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText2}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText3}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <InfoIcon fontSize="small" /> {item.heading2}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText4}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText5}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText6}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <SecurityIcon fontSize="small" /> {item.heading3}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText7}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText8}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <LinkIcon fontSize="small" /> {item.heading4}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText9}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <InfoIcon fontSize="small" /> {item.heading5}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText10}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <SecurityIcon fontSize="small" /> {item.heading6}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText11}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <InfoIcon fontSize="small" /> {item.heading7}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText12}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h4">
                <SecurityIcon fontSize="small" /> {item.heading8}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText13}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText14}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h6">
                {item.heading10}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText15}
              </Typography>
              <Typography variant="body1" paragraph>
                {item.paraText16}
              </Typography>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
