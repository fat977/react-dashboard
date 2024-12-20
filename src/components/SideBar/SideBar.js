import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TreeView } from "./Navlinks/TreeNode";
import { treeData } from "./Navlinks/TreeView";
import "./SideBar.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {  useEffect, useRef } from "react";
import {  useMenuContext } from "../../context/MenuContext";
import { useWindowSizeContext } from "../../context/WindowContext";
import useClickOutside from "../../hooks/oustsideClick";
import { useDarkMode } from "../../context/DarkModeContext";
export default function SideBar() {

  const {isOpen , setIsOpen} = useMenuContext();
  const {windowSize} = useWindowSizeContext();
 

  const sidebarRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  // Close sidebar when clicking outside
  useClickOutside(sidebarRef, () => setIsOpen(false));
  useEffect(() => {
    if (windowSize < 768) {
      setIsOpen(false);
    }
  }, [windowSize, setIsOpen]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.2)",
          display: windowSize < "768" && isOpen ? "block" : "none",
          zIndex: 3,
        }}
      ></div>
      <div>
        {isOpen || true ? (
          <div
            ref={sidebarRef}
            className="side-bar px-1"
            style={{
              left: windowSize < "768" ? (isOpen ? 0 : "-100%") : 0,
              width: isOpen ? "265px" : "fit-content",
              position: windowSize < "768" ? "fixed" : "fixed",
              display:
                windowSize < "768" ? (isOpen ? "block" : "none") : "block",
              backgroundColor: !isDarkMode && "var(--primary-color)",
            }}
          >
            <div
              style={{ height: "4rem" }}
              className={`pt-3 px-3 d-flex ${
                !isOpen && "justify-content-center"
              } align-items-center`}
            >
              <FontAwesomeIcon
                size="lg"
                icon={faCartShopping}
                className={`${isOpen ? "pe-3" : ""}`}
              />
              <h4
                className="mb-0"
                style={{ display: isOpen ? "block" : "none" }}
              >
                E-commerce
              </h4>
            </div>

            <TreeView data={treeData} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
