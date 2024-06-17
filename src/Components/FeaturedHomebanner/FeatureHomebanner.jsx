import React from "react";
import Slider from "react-slick";
import "../../Page/FeatureSalon/features.css";

const FeatureHomebanner = () => {
  const cardsContent = [
    {
      className: "cards-content",
      title: "CLIENTS",
      description:
        "Use AppointimiZe to spot trends, track client history, and book like a pro. Boost your customer's experience and make every visit unforgettable!",
    },
    {
      className: "cards-content",
      title: "INVOICING",
      description:
        "Nobody likes waiting at the checkout. With our speedy billing & job cards, long waits are history. Get in, get out, and get on with your day!",
    },
    {
      className: "cards-content",
      title: "STAFF TRAINING",
      description:
        "New staff? No problem. Deactivating former employees? Easy peasy. Say goodbye to paper files and hello to digital staff IDs. Trezlor makes staff management a breeze!",
    },
    {
      className: "cards-content",
      title: "DASHBOARD",
      description:
        "We got you with smart biz insights! Our clean data visuals and reports show you exactly what you need-no extra fluff. Make those big moves with confidence!",
    },
    {
      className: "cards-content",
      title: "APPOINTMENTS",
      description:
        "We get it-tech isn't everyone's thing. That's why AppointimiZe makes booking, confirming, and changing appointments super easy. Stress-free scheduling for you and your crew!",
    },
    {
      className: "cards-content",
      title: "CLOUD BASED",
      description:
        "Dive into effortless access with our device-independent, cloud-based platform, powered by top-tier data security and backup for total peace of mind.",
    },
    {
      className: "cards-content",
      title: "ATTENDANCE",
      description:
        "Seamlessly track attendance with our intuitive platform, offering hassle-free management and advanced features for streamlined operations.",
    },
    {
      className: "cards-content",
      title: "ANALYTICS",
      description:
        "Dive into insightful reporting and analytics with our cutting-edge platform, offering real-time data insights and actionable analytics for informed decision-making.",
    },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-feature-container">
      <div className="main-features">
        <h1>Unlock Business Excellence</h1>
        <p>
          Explore AppointimiZe's feature-rich solution crafted to unlock
          business excellence. Seamlessly manage appointments, empower staff,
          and delve into insightful reporting for optimized business
          performance. From intuitive booking to robust reporting, AppointimiZe
          has you covered.
        </p>
      </div>
      <div className="slider-wrap">
        <Slider {...settings} className="featured-cards">
          {cardsContent.map((item, id) => (
            <div key={id} className={item.className}>
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        
        </Slider>
      </div>
    </div>
  );
};

export default FeatureHomebanner;
