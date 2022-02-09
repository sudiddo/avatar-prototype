import { useState } from "react";
import "./App.css";
import useDeviceDetect from "./useDeviceDetect";

function App() {
  const { isMobile } = useDeviceDetect();
  const [head, setHead] = useState(process.env.PUBLIC_URL + "/Head/Bob.png");
  const [face, setFace] = useState(process.env.PUBLIC_URL + "/Face/Mm.png");
  const [body, setBody] = useState(process.env.PUBLIC_URL + "/Body/Hoodie.png");

  const sections = [
    {
      name: "Head",
      content: [
        process.env.PUBLIC_URL + "/Head/Baldo.png",
        process.env.PUBLIC_URL + "/Head/Bob.png",
        process.env.PUBLIC_URL + "/Head/Kritink.png",
      ],
    },
    {
      name: "Face",
      content: [
        process.env.PUBLIC_URL + "/Face/Mm.png",
        process.env.PUBLIC_URL + "/Face/O.png",
        process.env.PUBLIC_URL + "/Face/Ohno.png",
      ],
    },
    {
      name: "Body",
      content: [
        process.env.PUBLIC_URL + "/Body/Dilan.png",
        process.env.PUBLIC_URL + "/Body/Hoodie.png",
        process.env.PUBLIC_URL + "/Body/Shirt.png",
      ],
    },
  ];

  const selectContent = (name, content) => {
    switch (name) {
      case "Head":
        setHead(content);
        break;
      case "Face":
        setFace(content);
        break;
      case "Body":
        setBody(content);
        break;
      default:
        break;
    }
  };
  return isMobile ? (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-red-100">
      <h1 className="text-xl font-bold text-[#1572A1]">
        {`Sorry, Desktop Only :(`}
      </h1>
    </div>
  ) : (
    <div className="h-screen w-full flex relative justify-center items-center bg-[#9AD0EC] font-mono">
      <h1 className="absolute top-7 text-4xl font-bold text-[#1572A1]">
        Avatar
      </h1>
      <div className="absolute top-20 text-md font-semibold flex flex-row items-center justify-center text-[#E3BEC6] border-2 bg-[#1572A1] px-3 py-1 rounded-lg">
        Art by
        <img
          src={process.env.PUBLIC_URL + "/reyner.gif"}
          alt="reyner"
          className="h-7 ml-2"
        />
      </div>

      <div className="h-[500px] w-[800px] border-4 border-[#1572A1] rounded-md flex bg-[#E3BEC6] mt-16">
        <div className="flex flex-col w-[350px] overflow-scroll pt-5">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="ml-5 mb-5 text-[#1572A1] font-semibold text-lg">
                {section.name}
              </h2>
              <div className=" flex flex-row overflow-x-auto snap-x snap-mandatory pl-5">
                {section.content.map((item, index) => (
                  <img
                    className={`snap-center h-32 w-32 object-contain mr-10 mb-5 border-2 rounded-md bg-white ${
                      head === item || body === item || face === item
                        ? "border-[#1572A1]"
                        : "border-black"
                    } cursor-pointer`}
                    onClick={() => selectContent(section.name, item)}
                    src={item}
                    alt={index}
                    key={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-[450px] flex flex-col justify-center items-center">
          <img
            src={process.env.PUBLIC_URL + "/Background/Putih.png"}
            alt="background"
            className="h-full w-[450px] object-cover absolute z-0"
          />
          <img src={body} alt="head" className="absolute z-10" />
          <img src={head} alt="head" className="absolute z-20" />
          <img src={face} alt="head" className="absolute z-30" />
        </div>
      </div>
        <h1 className="absolute bottom-7 text-sm font-bold text-[#1572A1]">
        ©Sudiddo, February 2022
        </h1>
    </div>
  );
}

export default App;
