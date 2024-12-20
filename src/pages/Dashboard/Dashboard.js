import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import { useState, useEffect } from "react";
import { useMenuContext } from "../../context/MenuContext";
import { useWindowSizeContext } from "../../context/WindowContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Dashboard() {

  const {isOpen } = useMenuContext();
  const {windowSize} = useWindowSizeContext();


   const {setIsDarkMode}  = useDarkMode();

  const [selectedColor, setSelectedColor] = useState(() => {
    return localStorage.getItem("selectedColor") || "#fff"; // Default color if none saved
  });

  const [isIconVisible, setIconVisible] = useState(false);

  const toggleIconVisibility = () => {
    setIconVisible(!isIconVisible);
  };

  // Array of colors for the palette
  const colors = [
    "#eb765d",
    "#7bdf8c",
    "#737fb9",
    "#FFFFFF",
    "#b173c1",
    "#9ae4de",
  ];

  useEffect(() => {
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setSelectedColor(savedColor); // Set saved color if it exists
    }
  }, []);

  // Save the color to local storage whenever it changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      selectedColor
    );
    localStorage.setItem("selectedColor", selectedColor);
  }, [selectedColor]);
  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color); // Update the selected color in state
    setIsDarkMode(false)
  };

  return (
    <div
      className={` position-relative dashboard d-flex flex-column `}
     
    >
      <SideBar />
      <FontAwesomeIcon
        onClick={toggleIconVisibility}
        className="palette"
        icon={faGear}
        cursor={"pointer"}
        size="2xl"
        style={{ zIndex: 6666 }}
      />
      {isIconVisible && (
        <div
          className="palette-colors bg-dark d-flex justify-content-center align-items-center flex-wrap p-3"
          style={{ zIndex: 5555 }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: color,
                borderRadius: "50%",
                cursor: "pointer",
                border: selectedColor === color ? "3px solid black" : "none",
              }}
              onClick={() => handleColorChange(color)} // Set color on click
            />
          ))}
        </div>
      )}

      <>
        <TopBar />

        <div
          className="outlet"
          style={{
            marginTop: "82px",
            marginLeft: windowSize > "768" && (isOpen ? "265px" : "80px"),
            transition: 'all 0.3s ease',
            padding: "0 8px",
            zIndex: 2,
            position: "relative",
          }}
        >
          <Outlet />
        </div>
        <div
          style={{
            marginLeft: windowSize > "768" && (isOpen ? "265px" : "80px"),
          }}
        >
          <Footer />
        </div>
      </>
    </div>
  );
}
