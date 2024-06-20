import React from 'react'
import '../TermUse/term.css';
const TermsUse = () => {
    const privacyData = [
        {
          CompanyHeading:"Company Name:",
          companyName:"Unlink Technologies Pvt Ltd.",
          AddressHeading:"Company Address:",
          CompanyAddress:"B-305,Tower B,ATS BOUQUET,Block B, Sector 132, Noida,India 201304.",
          EmailText:"Email:hr@unlink-technologies.com",
          mainHeading: "Terms Of Service",
          paratext:" By browsing, accessing or using this website or by using any facilities or services made available through it or by transacting through or on it, you are agreeing to the terms and conditions that appear below (all of which are called the &ldquo;Agreement&rdquo;). This Agreement is made between you and us. Social Room (info@social-room.com) is a website (the &ldquo;Website&rdquo;) operated by Social Room (the &ldquo;Website Owner&rdquo;). The Website Owner, including subsidiaries and affiliates (or &ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo;) provides the information contained on this Website or any of the pages comprising the Website to visitors (&ldquo;Visitors&rdquo;) (cumulatively referred to as &ldquo;you&rdquo; or &ldquo;your&rdquo; hereinafter) subject to the terms and conditions set out in these Website terms and conditions, the privacy policy, refund policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of this website.The currency which is accepted by the merchant is USD(US$)",
          heading1: "Website Availability",
          paraText1:
            "In the event that Social Room, in its sole discretion, considers that you are making any illegal and/or unauthorised use of the Website, and/or your use of the Website is in breach of these Terms, we reserves the right to take any action that it deems necessary, including and not limited to termination of your use of the Website without notice and, in the case of illegal use, instigating legal proceedings.",
          paraText2:
            " We reserves all rights to make any changes to the Website or to discontinue any aspect or feature of the Website without prior notice. We may suspend the Website for any reason whatsoever, including but not limited to repairs, planned maintenance or upgrades, and shall not be liable to you for any such suspension.",
          heading2: "Your Status",
          paraText3:
            "By placing an order to purchase products (Order) through the Website, you warrant that: You are at least at the age of 18 years old; and You are legally capable of entering into binding contracts.",
          paraText4:
            "The Contract Between You and Us ",
          paraText5:
            "For the avoidance of doubt, your contract with us relates only to your use of the Website and the products available therein.",
          paraText6:
            "After placing an Order, you will receive an email from us acknowledging that we have received your order. Please note that this does not mean that your Order has been accepted. Your Order constitutes an offer to us to buy a product via the Website. All orders are subject to acceptance by us, and we will confirm such acceptance to you by sending you an email that confirms that the Purchase (the Purchase Confirmation). The contract between you and us (Contract) will only be formed when we send you the Purchase Confirmation.",
          heading3: "Credit Card Payment",
          paraText7:
            "The liability to use a card fraudulently will be on the user and the onus to ‘prove otherwise’ shall be exclusively on the user. We will not be liable for any credit card fraud. In a credit card transaction, you must use your own credit card.",
          heading4: "Trademarks",
          paraText8:
            " Trademarks, names, logos and service marks (collectively “trademarks”) displayed on this website are registered and unregistered trademarks of the Website Owner. Nothing contained on this website should be construed as granting any license or right to use any trademark without the prior written permission of the Website Owner.",
          heading5: "Specific Use",
          paraText9:
            " You further agree not to use the website to send or post any message or material that is unlawful, harassing, defamatory, abusive, indecent, threatening, harmful, vulgar, obscene, sexually orientated, racially offensive, profane, pornographic or violates any applicable law and you hereby INDEMNIFY the Website Owner against any loss, liability, damage or expense of whatever nature which the Website Owner or any third party may suffer which is caused by or attributable to, whether directly or indirectly, your use of the website to send or post any such message or material.",
            heading6:"Orders",
            paraText10:"By completing the purchase transaction, you will receive a receipt of purchase via email, completed with Order Id and date of purchase. Orders will only be confirmed when you receive the Purchase Confirmation email by us.",
            heading7:"Inappropriate Content and Misconduct Reporting",
            paraText11:"We are committed to maintaining a positive and respectful community, and we do not tolerate any inappropriate content or misconduct, whether on or off of the Services (including, but not limited to, on services operated by our affiliates). We encourage you to report any inappropriate Member Content or misconduct by other users. You can report a user directly through the Contact Us link.",
            heading8:"Your payment is refused;",
            paraText12:"If we refuse to accept an order, we will not be obliged to offer any compensation for loss or disappointment suffered by you.",
            heading9:"Disclaimer of Liability",
            paraText13:"When rendering our Services, we will not verify if, and cannot guarantee that, all information is accurate, complete or correct, nor can we be held responsible for any errors (including manifest and typographical errors), inaccurate, misleading or untrue information or non-delivery of information.",
            paraText14:"The Website Owner shall not be responsible for and DISCLAIMS all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party (including your company), as a result of or which may be attributable, directly or indirectly, to your access and use of the website, any information contained on the website, your or your company’s personal information or material and information transmitted over our system. In PARTICULAR, neither the Website Owner nor any third party or data or content provider shall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoever arising from any delays, inaccuracies, errors in, or omission of any share price information or the transmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason of non-performance or interruption, or termination thereof.",
            heading10:"User of the Website",
            paraText15:"The Website Owner does not make any warranty or representation that information on the website is appropriate for use in any jurisdiction (other than Hong Kong). By accessing the website, you warrant and represent to the Website Owner that you are legally entitled to do so and to make use of information made available via the website.",
            heading11:"Non-Commercial Use",
            paraText16:"This Website is for your personal, non-commercial use only. You may not use this site, or any of its content, to further any commercial purpose, including any advertising or advertising revenue generation activity on your own site. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, commercially exploit, create derivative works from, transfer, or sell any content, software, products, or services contained within this site.",
            heading12:"Visitor Registration",
            paraText:"Registration requirements may change from from time to time. When you register, you are required to provide information about yourself that is true, accurate, current and complete in all respects. Should any of your registration information change, please notify us immediately either using the Website’s automated service, or via e-mail at info@social-room.com. Visitors will need to register with the Website in order to use some of the services or features made available on this Website.",
        },
      ];
  return (
    <div className='main-terms'>
    <div className='terms-banner-img'>
  
    </div>
    <div className='wrap-terms'>
    {privacyData.map((item, id) => (
            <div key={id} className='terms-content'>
              <h2>{item.mainHeading}</h2>
              <p>{item.paratext}</p>
              <h4>{item.heading1}</h4>
              <p>{item.paraText1}</p>
              <p>{item.paraText2}</p>
              &nbsp;
              <h4>{item.heading2}</h4>
              <p>{item.paraText3}</p>
              <p>{item.paraText4}</p>
              <p>{item.paraText5}</p>
              <p>{item.paraText6}</p>
              &nbsp;
              <h4>{item.heading3}</h4>
              <p>{item.paraText7}</p>
              &nbsp;
              <h4>{item.heading4}</h4>
              <p>{item.paraText8}</p>
              &nbsp;
              <h4>{item.heading5}</h4>
              <p>{item.paraText9}</p>
            </div>
          ))}
</div>

    </div>

  )
}

export default TermsUse