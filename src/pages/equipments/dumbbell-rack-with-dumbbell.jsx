import React, { useEffect, useState } from "react";
import EquipmentHeader from "../../components/partials/Header/equipmentheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/equipments.css";
import EquipmentFooter from "../../components/partials/Footer/equipmentfooter";
import Accordion from "react-bootstrap/Accordion";
import "../../assets/css/equipments-1.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { sendInquiry } from "../../assets/js/utils/contact-us.js";
import EquipmentProductSection from "../../components/EquipmentProductSection.jsx";
import EquipmentMobileProductSection from "../../components/EquipmentMobileProductSection.jsx";
import { Helmet } from "react-helmet";

function DumbbellRackWithDumbbell() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [firm, setFirm] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nBudget: ${budget}\n\nFirm: ${firm}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FG Equipment Dumbbell Rack With Dumbbell Page",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setBudget("");
      setFirm("");
      setCity("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  const product = [
    "/assets/images/equipment/dumbbell-rack-with-dumbbell-inner-1.webp",
    "/assets/images/equipment/dumbbell-rack-with-dumbbell-inner-2.webp",
    "/assets/images/equipment/dumbbell-rack-with-dumbbell-inner-3.webp",
    "/assets/images/equipment/dumbbell-rack-with-dumbbell-inner-4.webp",
  ];
  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Dumbbell Rack With Dumbbell Stand - Gomzi Ftiness Equiptment
        </title>
        <meta
          name="description"
          content="The GOMZI Fitness Dumbbell Set with Rack provides a range of weight options for strength training for easy access and storage, ideal for home or gym gear."
        />
        <meta
          name="keyword"
          content="fitness equipment, elliptical machine, cardio equipment, gym accessories, gym machinery, exercise tools, gym gear, workout gear, weightlifting equipment, gym machinery, weightlifting gear, best gym equipment"
        />
        <meta
          property="og:title"
          content="Dumbbell Rack With Dumbbell Stand - Gomzi Ftiness Equiptment"
        />
        <meta
          property="og:description"
          content="The GOMZI Fitness Dumbbell Set with Rack provides a range of weight options for strength training for easy access and storage, ideal for home or gym gear."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/equipments/dumbbell-rack-with-dumbbell"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>
          {`
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '814465640729634');
fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=814465640729634&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <EquipmentHeader />
      <main className="page--content p-0">
        <section
          className="page-introduction--section text-white bg-black p-relative 800:pt-16 pb-48 800:pb-80 sibling-direct focus-region-white"
          data-hook="intersectionAnimation"
          data-animation-delay="200"
          data-class-active="opacity-1 transform-none"
          data-class-inactive="opacity-0 transform-t-16"
          data-controller-index="147"
          style={{ marginTop: "70px" }}
        >
          <div
            className="page-introduction--image bg-no-repeat bg-cover bg-center c-intros-gradient intros-gradient-sm aspect-ratio-2/1 800:aspect-ratio-none 800:mx-0 p-relative 800:p-absolute 800:inset-0"
            data-roundingwidths="standard"
            data-hook="bgImage"
            data-controller-index="144"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/dumbbell-rack-with-dumbbell-banner.webp)`,
            }}
          ></div>
          <div
            className="page-introduction--wrap -mt-1/12 800:mt-0 px-sides max-w-1600 mx-auto p-relative"
            role="presentation"
          >
            <h1 className="type--heading max-w-480 text-white pt-16 800:pt-1/6">
              <span
                className="type--main-heading d-block h1 text-36-54 text-white transition-medium opacity-1 transform-none"
                data-hook="intersectionAnimation.subject"
                data-class-active="opacity-1 transform-none"
                data-class-inactive="opacity-0 transform-t-16"
              >
                dumbbell rack with dumbbells
              </span>
              <span
                className="type--sub-heading d-block h2 transition-medium text-white opacity-1 transform-none"
                data-hook="intersectionAnimation.subject"
                data-class-active="opacity-1 transform-none"
                data-class-inactive="opacity-0 transform-t-16"
              >
                Strength in Your Hands
              </span>
            </h1>
          </div>
        </section>
        <div className="sibling-direct sibling-direct:border-t-16 border-white border-solid">
          <section className="rich-text--section p-relative px-sides pb-48 800:pt-72 800:pb-72 d-none d-lg-block">
            <div className="row">
              <EquipmentProductSection product={product} />
              <div className="col-lg-6 mt-4">
                <div
                  className="rich-text contains-links text-15-18 leading-140 font-sans text-black brand-colorway-red colorway-light links-red contains-tables margins-tall"
                  data-hook="scrollTables videoRatios conformRichText"
                  data-video-keywords="youtube vimeo wistia"
                  data-video-ratio="aspect-ratio-16/9"
                  data-video-layout="max-w-800 mx-auto my-16"
                  data-table-container="contains-tables"
                  role="presentation"
                  data-controller-index="162"
                >
                  <h2 className="h2-fs">
                    <b>Fitness at Your Fingertips</b>
                  </h2>
                  <p>
                    Dumbbells are versatile and indispensable tools in fitness,
                    offering a wide range of exercises to target various muscle
                    groups. Their compact design allows for convenient use at
                    home or in the gym, making them accessible to individuals of
                    all fitness levels. Dumbbell exercises engage stabilizer
                    muscles, promoting balance and coordination while improving
                    strength and endurance.
                  </p>
                  <p>
                    From classic moves like bicep curls and shoulder presses to
                    compound exercises like lunges and rows, dumbbells provide
                    limitless possibilities for strength training and
                    conditioning. With adjustable weights, they accommodate
                    progression and customization, allowing users to tailor
                    workouts to their specific goals and abilities.
                  </p>
                  <ul>
                    <li className="mt-2">
                      Versatility: Dumbbells allow for a wide range of exercises
                      targeting various muscle groups.
                    </li>
                    <li className="mt-2">
                      Improved Joint Stability: Engaging stabilizer muscles
                      enhances joint stability and flexibility.
                    </li>
                    <li className="mt-2">
                      Unilateral Strength: Promotes balance and strength on each
                      side of the body, reducing muscular imbalances.
                    </li>
                    <li className="mt-2">
                      Portability: Dumbbells are highly portable and require
                      minimal space, ideal for home workouts or on-the-go
                      training.
                    </li>
                    <li className="mt-2">
                      Muscle Building: Builds muscle mass and strength, leading
                      to improved overall body composition.
                    </li>
                    <li className="mt-2">
                      Functional Fitness: Improves overall health,
                      functionality, and athletic performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="rich-text--section p-relative px-sides pb-48 800:pt-72 800:pb-72 d-block d-lg-none">
            <div className="row">
              <EquipmentMobileProductSection product={product} />
              <div className="col-lg-6 mt-5">
                <div
                  className="rich-text contains-links text-15-18 leading-140 font-sans text-black brand-colorway-red colorway-light links-red contains-tables margins-tall"
                  data-hook="scrollTables videoRatios conformRichText"
                  data-video-keywords="youtube vimeo wistia"
                  data-video-ratio="aspect-ratio-16/9"
                  data-video-layout="max-w-800 mx-auto my-16"
                  data-table-container="contains-tables"
                  role="presentation"
                  data-controller-index="162"
                >
                  <h2 className="h2-fs">
                    <b>Fitness at Your Fingertips</b>
                  </h2>
                  <p>
                    Dumbbells are versatile and indispensable tools in fitness,
                    offering a wide range of exercises to target various muscle
                    groups. Their compact design allows for convenient use at
                    home or in the gym, making them accessible to individuals of
                    all fitness levels. Dumbbell exercises engage stabilizer
                    muscles, promoting balance and coordination while improving
                    strength and endurance.
                  </p>
                  <p>
                    From classic moves like bicep curls and shoulder presses to
                    compound exercises like lunges and rows, dumbbells provide
                    limitless possibilities for strength training and
                    conditioning. With adjustable weights, they accommodate
                    progression and customization, allowing users to tailor
                    workouts to their specific goals and abilities.
                  </p>
                  <ul>
                    <li className="mt-2">
                      Versatility: Dumbbells allow for a wide range of exercises
                      targeting various muscle groups.
                    </li>
                    <li className="mt-2">
                      Improved Joint Stability: Engaging stabilizer muscles
                      enhances joint stability and flexibility.
                    </li>
                    <li className="mt-2">
                      Unilateral Strength: Promotes balance and strength on each
                      side of the body, reducing muscular imbalances.
                    </li>
                    <li className="mt-2">
                      Portability: Dumbbells are highly portable and require
                      minimal space, ideal for home workouts or on-the-go
                      training.
                    </li>
                    <li className="mt-2">
                      Muscle Building: Builds muscle mass and strength, leading
                      to improved overall body composition.
                    </li>
                    <li className="mt-2">
                      Functional Fitness: Improves overall health,
                      functionality, and athletic performance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className="fifty--section bg-white px-sides sibling-direct sibling-direct:border-t-16 border-white border-solid"
            data-hook="intersectionAnimation"
            data-animation-delay="200"
            data-class-active="opacity-1 transform-none"
            data-class-inactive="opacity-0 transform-t-16"
            data-controller-index="148"
          >
            <div
              className="fifty-fifty--wrap max-w-1600 mx-auto overflow-hidden p-relative bg-black focus-region-white 960:d-flex items-stretch justify-center 960:min-h-33vw 1920:min-h-640"
              role="presentation"
            >
              <div
                className="fifty--image bg-no-repeat bg-cover bg-center 960:bg-left p-relative 960:w-1/2 960:inset-y-0 aspect-ratio-1/1 800:aspect-ratio-3/2 960:left-0 transition-medium transform-none opacity-1"
                data-class-active="transform-none opacity-1"
                data-class-inactive="transform-t-16 800:transform-l-32 opacity-0"
                data-roundingwidths="standard"
                data-controller-index="5"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/dumbbells-description-1.webp)`,
                }}
              ></div>
              <div
                className="fifty--contents--wrap d-flex items-center flex-grow 960:ml-auto 960:w-1/2 p-relative -mt-96 640:-mt-192 960:mt-0 bg-vr-black80-black-96 640:bg-vr-black80-black-192 960:bg-black"
                role="presentation"
              >
                <div
                  className="fifty--contents max-w-800 p-relative py-32 px-sides 960:pt-96 960:pb-96 960:px-32 1120:px-64 1360:px-96 transition-medium transform-none opacity-1"
                  data-class-active="transform-none opacity-1"
                  data-class-inactive="transform-t-16 800:transform-r-32 opacity-0"
                  data-hook="intersectionAnimation.subject"
                  role="presentation"
                >
                  <h2 className="h2-fs type--heading text-white">
                    {/* <span className="type--sub-heading d-block h2 text-white"><b>TOTAL FITNESS</b></span> */}
                    <span className="type--main-heading d-block h1 text-32-40 mt-4 text-white">
                      <b>Elevate Fitness with Dumbbells</b>
                    </span>
                  </h2>
                  <div
                    className="rich-text contains-links text-15-18 leading-140 font-sans text-white brand-colorway-red colorway-dark links-white contains-tables mt-24"
                    data-hook="scrollTables videoRatios conformRichText"
                    data-video-keywords="youtube vimeo wistia"
                    data-video-ratio="aspect-ratio-16/9"
                    data-video-layout="max-w-800 mx-auto my-16"
                    data-table-container="contains-tables"
                    role="presentation"
                    data-controller-index="163"
                  >
                    <p>
                      Dumbbells are essential equipment for strength training
                      and muscle development. Their versatility allows for a
                      wide variety of exercises targeting different muscle
                      groups, including the arms, shoulders, chest, back, and
                      legs. Dumbbell workouts can range from isolation exercises
                      like bicep curls and tricep extensions to compound
                      movements such as squats and lunges, providing a
                      comprehensive full-body workout. Additionally, they are
                      suitable for individuals of all fitness levels, from
                      beginners to advanced athletes, due to their adjustable
                      weight options. With proper form and technique, dumbbell
                      exercises not only build muscle mass and strength but also
                      improve stability, balance, and functional movement
                      patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="fifty--section bg-white px-sides sibling-direct sibling-direct:border-t-16 border-white border-solid"
            data-hook="intersectionAnimation"
            data-animation-delay="200"
            data-class-active="opacity-1 transform-none"
            data-class-inactive="opacity-0 transform-t-16"
            data-controller-index="149"
          >
            <div
              className="fifty-fifty--wrap max-w-1600 mx-auto overflow-hidden p-relative bg-black focus-region-white 960:d-flex 960:flex-row-reverse items-stretch justify-center 960:min-h-33vw 1920:min-h-640"
              role="presentation"
            >
              <div
                className="fifty--image bg-no-repeat bg-cover bg-center 960:bg-left p-relative 960:w-1/2 960:inset-y-0 aspect-ratio-1/1 800:aspect-ratio-3/2 960:right-0 transition-medium transform-none opacity-1"
                data-class-active="transform-none opacity-1"
                data-class-inactive="transform-t-16 800:transform-r-32 opacity-0"
                data-roundingwidths="standard"
                data-controller-index="6"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/dumbbells-description-2.webp)`,
                }}
              ></div>
              <div
                className="fifty--contents--wrap d-flex items-center flex-grow justify-end 960:w-1/2 p-relative -mt-96 640:-mt-192 960:mt-0 bg-vr-black80-black-96 640:bg-vr-black80-black-192 960:bg-black"
                role="presentation"
              >
                <div
                  className="fifty--contents max-w-800 p-relative py-32 px-sides 960:pt-96 960:pb-96 960:px-32 1120:px-64 1360:px-96 transition-medium transform-none opacity-1"
                  data-class-active="transform-none opacity-1"
                  data-class-inactive="transform-t-16 800:transform-l-32 opacity-0"
                  data-hook="intersectionAnimation.subject"
                  role="presentation"
                >
                  <h2 className="h2-fs type--heading text-white">
                    {/* <span className="type--sub-heading d-block h2 text-white"><b>TOTAL FITNESS</b></span> */}
                    <span className="type--main-heading d-block h1 text-32-40 mt-4 text-white">
                      <b>Versatile Strength Training</b>
                    </span>
                  </h2>
                  <div
                    className="rich-text contains-links text-15-18 leading-140 font-sans text-white brand-colorway-red colorway-dark links-white contains-tables mt-24"
                    data-hook="scrollTables videoRatios conformRichText"
                    data-video-keywords="youtube vimeo wistia"
                    data-video-ratio="aspect-ratio-16/9"
                    data-video-layout="max-w-800 mx-auto my-16"
                    data-table-container="contains-tables"
                    role="presentation"
                    data-controller-index="164"
                  >
                    <p>
                      Dumbbells offer numerous benefits beyond just muscle
                      building. They improve joint stability and flexibility due
                      to the need for stabilizing muscles during exercises.
                      Additionally, they can be used for cardiovascular
                      workouts, such as dumbbell complexes or high-intensity
                      interval training, which elevate heart rate and burn
                      calories effectively. Dumbbells also promote unilateral
                      strength and balance by allowing each side of the body to
                      work independently, reducing muscular imbalances and
                      decreasing injury risk. Furthermore, they are highly
                      portable and require minimal space, making them ideal for
                      home workouts or on-the-go training. Incorporating
                      dumbbells into fitness routines enhances overall health,
                      functionality, and athletic performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="list-carousel--section bg-white p-relative px-sides sibling-direct sibling-direct:border-t-16 border-white border-solid pt-48 pb-48 800:pt-72 800:pb-72">
          <div className="type--wrap px-sides">
            <h2 className="h2-fs type--heading h1 text-32-40 text-ltblack max-w-1600 p-relative z-100 mx-auto">
              <span className="type--heading-accent text-red">
                Product
                <br />
              </span>
              Categories
            </h2>
          </div>
          <div
            className="-mx-sides px-sides"
            data-hook="swiperCarousel"
            role="presentation"
            data-controller-index="49"
          >
            <OwlCarousel
              loop
              autoplay
              nav
              dots={false}
              id="equipment-button"
              className="owl-theme"
              data-ride="carousel"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 4,
                },
              }}
            >
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/treadmill"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-2.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Heavy duty commercial treadmill
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/leg-press-machine"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-17.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Leg Press Machine
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/cable-cross-over"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-4.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Multi purpose Cable cross over
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/power-gauge"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-5.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Power gauge
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/bicep-preacher-curl"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-7.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Bicep Preacher curl
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/shoulder-press"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-9.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Machine shoulder press
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/back-blaster"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-10.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Back blaster
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/chest-press"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-11.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Machine chest press
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/leg-extension-curl"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-12.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Leg extension & curl
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/stationary-bikes"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-13.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Stationary bikes
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/machine-chest-flies"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-14.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Machine chest flies
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/seated-calf-raise"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-16.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Seated calf raise
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/back-extension"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-3.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Back extension
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/plate-loader"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-6.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Plate loader
                    </span>
                  </div>
                </Link>
              </div>
              {/* <div className='mx-2 mb-4'>
                                <Link
                                    className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                                    to="/equipments/dumbbell-rack-with-dumbbell"
                                    style={{ margin: '0px 10px' }}>
                                    <div
                                        className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                                        style={{
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-15.webp)`
                                        }}></div>
                                    <div
                                        className="list-carousel--item-text px-8 mt-16 800:px-24"
                                        role="presentation">
                                        <span
                                            className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                                            Dumbbell rack with dumbbell
                                        </span>
                                    </div>
                                </Link>
                            </div> */}
              <div className="mx-2 mb-4">
                <Link
                  className="bg-vr-grayee-white d-block pb-24 800:pb-32 transition-fast c-block-color-red"
                  to="/equipments/medicine-ball"
                  style={{ margin: "0px 10px" }}
                >
                  <div
                    className="list-carousel--item-image bg-no-repeat bg-cover bg-center aspect-ratio-1/1 border-24 border-solid border-transparent mt-32 480:mt-0 960:mt-32 1120:mt-24 1280:mt-0"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/equipment/equipment-1.webp)`,
                    }}
                  ></div>
                  <div
                    className="list-carousel--item-text px-8 mt-16 800:px-24"
                    role="presentation"
                  >
                    <span className="list-carousel--item-name text-18-24 font-display leading-125 text-black d-block">
                      Medicine Ball
                    </span>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section className="list-carousel--section p-relative px-sides sibling-direct sibling-direct:border-t-16 border-white border-solid pt-48 pb-48 800:pt-72 800:pb-72 bg-grayf4">
          <div
            className="list-carousel--text-wrap max-w-1600 w-1/1 p-relative z-100 mx-auto"
            role="presentation"
          >
            <h2 className="h2-fs type--heading">
              <span className="type--main-heading d-block h1 text-32-40 text-ltblack">
                FAQ's
              </span>
            </h2>
          </div>
          <div className="row mt-4 pb-5 justify-content-center overflow-hidden">
            <div className="col-md-8">
              <div className="check">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0" className="p-4">
                    <Accordion.Header className="f-18 lp-2">
                      How can we contact the manufacturer?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      You can contact the manufacturer via contact on this above
                      number +91 63540-51487 And give a mail id And you can
                      contact them.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mt-3 p-4">
                    <Accordion.Header className="f-18 lp-2">
                      What are the series available?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      There are three series available. Affordable, standard and
                      premium.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="mt-3 p-4">
                    <Accordion.Header className="f-18 lp-2">
                      How if I want to set up a gym? how much time it will take?
                      how much money it will require?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      This in three different manner first is if you want to
                      start with the affordable gym cities that's cost up to
                      around 20 lakh rupees and that takes around approximately
                      one month to prepare if you want to go for standard series
                      of hours that will cost around 42 lakh and it will take
                      around 1.5 months to get prepared or get ready and we
                      customize many things like color, sitting, cushion, angles
                      and many things in the machines also and if you want to go
                      in a very premium series then we can then it ranges up to
                      one CR and it will going to conduct a lot of customization
                      okay and customization from colors up to the shape and the
                      logos which you required.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="mt-3 p-4">
                    <Accordion.Header className="f-18 lp-2">
                      Do you third party work?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      Yes, we do third party manufacturing we add your logos and
                      we add your we make exercise machines for you as per your
                      brand and you can sell it out further and we'll give you a
                      proper good margin also as a manufacturer if you give
                      orders in bulk.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="mt-3 p-4">
                    <Accordion.Header className="f-18 lp-2">
                      Are You open dealership?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      We are open for dealership in cities like Bombay, Delhi,
                      Hamdawad, Rajkot, Kolkata, Kerala and Assam.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-list--section bg-white sibling-direct sibling-direct:border-t-16 border-white border-solid pt-48 pb-48 800:pt-72 800:pb-72">
          <div className="accordion">
            <div className="container">
              <div className="accordion-item">
                <div className="type--wrap">
                  <h2 className="h2-fs type--heading h1 text-32-40 mb-4 text-ltblack max-w-1600 p-relative z-100 mx-auto">
                    <span className="type--heading-accent text-red">
                      Contact&nbsp;
                    </span>
                    Here
                  </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="col-md-12">
                    <div className="">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/equipment/equipment-form.webp"
                            }
                            alt="Fggroup"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-user"></i> Full
                                Name
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-phone"></i> WhatsaApp Number
                              </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Enter WhatsaApp Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-location-dot"></i>{" "}
                                City
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-envelope"></i>{" "}
                                Email Address
                              </Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-regular fa-message"></i>{" "}
                                Enquiry Message
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={1}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                              />
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-indian-rupee-sign"></i>{" "}
                                Select Budget
                              </Form.Label>
                              <Form.Select
                                className="form-control"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                              >
                                <option value="">Select</option>
                                <option value="10 lakh To 20 lakh">
                                  10 lakh To 20 lakh
                                </option>
                                <option value="40 lakh To 50 lakh">
                                  40 lakh To 50 lakh
                                </option>
                                <option value="Upto 1 crore">
                                  Upto 1 crore
                                </option>
                              </Form.Select>
                              <Form.Label
                                className="mt-3"
                                style={{ color: "#d11f2e" }}
                              >
                                <i className="mr-1 fa-solid fa-building"></i>{" "}
                                Select Firm
                              </Form.Label>
                              <Form.Select
                                className="form-control"
                                value={firm}
                                onChange={(e) => setFirm(e.target.value)}
                              >
                                <option value="">Select</option>
                                <option value="Personal Use">
                                  Personal Use
                                </option>
                                <option value="Commercial Use">
                                  Commercial Use
                                </option>
                              </Form.Select>
                            </Form.Group>
                          </Form>
                          <div className="brand-list--card-text inset-x-0 pb-3 text-center">
                            <Button
                              onClick={handleApplyForInquiry}
                              className="standard-button d-inline-flex mt-24 bg-red text-white font-700 leading-100 text-12-16 uppercase px-16 min-h-48 py-8 justify-center transition-fast items-center rounded-2 text-center group-hover:bg-white group-hover:text-black"
                            >
                              get a quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EquipmentFooter />
    </>
  );
}

export default DumbbellRackWithDumbbell;
