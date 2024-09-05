import React, { useRef, useState } from "react";
import Card1 from "./Card1";
import Card2 from './Card2';
import Card3 from "./Card3";
import Card4 from "./Card4";
import { toPng } from "html-to-image";
import { BsDownload } from "react-icons/bs"

const App = ({ id }) => {

  const idCardRef = useRef();

  const downloadIDCard = () => {
    if (idCardRef.current) {
      toPng(idCardRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "Invitation Card.png";
          link.click();
          alert("Thank You!\nHappy Ganesh Chaturthi to you and Your Family 😇");
        })
        .catch((err) => {
          alert("Error generating ID card image:", err);
        });
    }
  };

  const [info, setInfo] = useState(
    {
    heading: "Shree Ganesh",
    heading1: "Ganesh Chaturthi",
    desc: "You are cordially invited by me & my family to take blessings of Lord Ganesha at our home during the five days of Ganesh Festival.",
    month: "Sept",
    dates: "7th to 13th",
    dates1: "Sept 7th to Sept 13th",
    address: "Address",
    regards: "Dalvi's Family",
    contact: "+9191919191",
    contact1: "+9191919191",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const renderCard = () => {
    switch (id) {
      case 1:
        return <Card1 info={info} />;
      case 2:
        return <Card2 info={info} />;
      case 3:
        return <Card3 info={info} />;
      case 4:
          return <Card4 info={info} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="lg:w-10/12 m-auto my-2">
      <div ref={idCardRef}>
        {renderCard()}
      </div>

      {id && (
        <div className="lg:w-10/12 flex p-2 flex-col m-auto mt-4">
          <input
            type="text"
            className="w-full"
            name="heading"
            value={info.heading}
            placeholder={info.heading}
            onChange={handleInputChange}
          /><br />

          <textarea
            rows={2} cols={2}
            className="w-full"
            name="desc"
            value={info.desc}
            placeholder={info.desc}
            onChange={handleInputChange}
          /><br />

          <input
            type="text"
            className="w-full"
            name="month"
            value={info.month}
            placeholder={info.month}
            onChange={handleInputChange}
          /><br />

          <input
            type="text"
            className="w-full"
            name="dates"
            value={info.dates}
            placeholder={info.dates}
            onChange={handleInputChange}
          /><br />

          <input
            type="text"
            className="w-full"
            name="address"
            value={info.address}
            placeholder={info.address}
            onChange={handleInputChange}
          /><br />

          <input
            type="text"
            className="w-full"
            name="regards"
            value={info.regards}
            placeholder={info.regards}
            onChange={handleInputChange}
          /><br />

          <input
            type="number"
            name="contact"
            value={info.contact}
            placeholder={info.contact}
            onChange={handleInputChange}
          /><br />
          <input
            type="number"
            name="contact1"
            value={info.contact1}
            placeholder={info.contact1}
            onChange={handleInputChange}
          /><br />
        </div>
      )}

      {id && (
        <button className="font-mono" onClick={downloadIDCard}>
          <p className="flex justify-center items-center gap-2 px-4">
            Download Banner  <BsDownload />
          </p>
        </button>
      )}
    </div>
  );
};

export default App;