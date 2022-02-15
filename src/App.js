import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import useDeviceDetect from "./useDeviceDetect";
import { toPng } from "html-to-image";
import ImageCanvas from "./UI/atoms/canvas/ImageCanvas";
import ImageOption from "./UI/atoms/cards/ImageOption";
import { sections, gifSections } from "./data";
import { Switch } from "@headlessui/react";
import GIFCanvas from "./UI/atoms/canvas/GIFCanvas";

function App() {
  const ref = useRef(null);

  const { isMobile } = useDeviceDetect();
  const [isGif, setIsGif] = useState(false);
  const [content, setContent] = useState(sections);

  const [background, setBackground] = useState(
    sections.find((item) => item.name === "Background").content[0]
  );
  const [head, setHead] = useState(
    sections.find((item) => item.name === "Head").content[0]
  );
  const [face, setFace] = useState(
    sections.find((item) => item.name === "Face").content[0]
  );
  const [body, setBody] = useState(
    sections.find((item) => item.name === "Body").content[0]
  );
  const [eyes, setEyes] = useState(
    gifSections.find((item) => item.name === "Eyes").content[0]
  );
  const [limbs, setLimbs] = useState(
    gifSections.find((item) => item.name === "Limbs").content[0]
  );

  useEffect(() => {
    const reloadGif = () => {
      setBackground("");
      setHead("");
      setBody("");
      setEyes("");
      setLimbs("");
      setTimeout(() => {
        setEyes(gifSections.find((item) => item.name === "Eyes").content[0]);
        setBackground(
          gifSections.find((item) => item.name === "Background").content[0]
        );
        setHead(gifSections.find((item) => item.name === "Head").content[0]);
        setBody(gifSections.find((item) => item.name === "Body").content[0]);
        setLimbs(gifSections.find((item) => item.name === "Limbs").content[0]);
      }, 0);
    };

    if (isGif) {
      setContent(gifSections);
      reloadGif();
    } else {
      setContent(sections);
      setBackground(
        sections.find((item) => item.name === "Background").content[0]
      );
      setHead(sections.find((item) => item.name === "Head").content[0]);
      setFace(sections.find((item) => item.name === "Face").content[0]);
      setBody(sections.find((item) => item.name === "Body").content[0]);
    }
  }, [isGif]);

  const saveAs = useCallback(() => {
    console.log("ref", ref.current);
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      canvasWidth: 1024,
      canvasHeight: 1024,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "avatar.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const selectContent = (name, content) => {
    switch (name) {
      case "Background":
        setBackground(content);
        break;
      case "Head":
        setHead(content);
        break;
      case "Face":
        setFace(content);
        break;
      case "Body":
        setBody(content);
        break;
      case "Limbs":
        setLimbs(content);
        break;
      case "Eyes":
        setEyes(content);
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

      {!isGif && (
        <div className="absolute right-20 flex flex-col">
          <h1>
            Like it? <span className="font-bold">Save it!</span>
          </h1>
          <button
            className="border p-2 text-sm mt-2 text-[#E3BEC6] bg-[#1572A1] hover:text-[#FFF] hover:shadow-lg"
            onClick={saveAs}
          >
            Click to save!
          </button>
        </div>
      )}

      <div className="absolute left-20 flex flex-row items-center">
        <h1>Image</h1>
        <Switch
          checked={isGif}
          onChange={setIsGif}
          className={`${isGif ? "bg-teal-900" : "bg-teal-700"}
          mx-4
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">GIF?</span>
          <span
            aria-hidden="true"
            className={`${isGif ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
        <h1>GIF</h1>
      </div>

      <div className="h-[500px] w-[800px] border-4 border-[#1572A1] rounded-md flex bg-[#E3BEC6] mt-16">
        <div className="flex flex-col w-[350px] no-scrollbar overflow-scroll pt-5 border-r-4 border-[#1572A1]">
          {content.map((item, index) => (
            <div key={index}>
              <h2 className="ml-5 mb-5 text-[#1572A1] font-semibold text-lg">
                {item.name}
              </h2>
              <div className="no-scrollbar flex flex-row overflow-x-scroll pl-5 ">
                {item.content.map((image, index) => (
                  <ImageOption
                    key={index}
                    head={head}
                    body={body}
                    limbs={limbs}
                    eyes={eyes}
                    face={face}
                    background={background}
                    item={image}
                    selectContent={(name, content) =>
                      selectContent(name, content)
                    }
                    name={item.name}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {isGif ? (
          <GIFCanvas
            ref={ref}
            background={background}
            body={body}
            head={head}
            face={face}
            eyes={eyes}
            limbs={limbs}
          />
        ) : (
          <ImageCanvas
            ref={ref}
            background={background}
            body={body}
            head={head}
            face={face}
          />
        )}
      </div>
      <h1 className="absolute bottom-7 text-sm font-bold text-[#1572A1]">
        ©Sudiddo, February 2022
      </h1>
    </div>
  );
}

export default App;
