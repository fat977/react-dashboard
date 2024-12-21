import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFile,
  faMoon,
  faSearch,
  faSun,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useMenuContext } from "../../context/MenuContext";
import { useWindowSizeContext } from "../../context/WindowContext";

import "./TopBar.scss";
import "../../styles/themes/_dark-mode.scss";
import { useDarkMode } from "../../context/DarkModeContext";
import { treeData } from "../SideBar/Navlinks/TreeView";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  // Filter logic for parent and child links
  const filteredNavData = treeData
    .map((parent) => ({
      ...parent,
      children: parent.children
        ? parent.children.filter((child) =>
            child.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : "",
    }))
    .filter(
      (parent) =>
        parent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        parent.children.length > 0
    );

  const [isIconVisible, setIconVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  const toggleIconVisibility = () => {
    setIconVisible(!isIconVisible);
    setImageVisible(false);
  };

  const toggleImageVisibility = () => {
    setImageVisible(!isImageVisible);
    setIconVisible(false);
  };

  const {isOpen , setIsOpen} = useMenuContext();
  const {windowSize} = useWindowSizeContext();


  const { isDarkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  // Show the div when clicking the button
  const handleShowDiv = () => {
    setIsVisible(true);
  };

  // Hide the div when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={
          " top-bar d-flex align-items-center justify-content-between px-lg-5"
        }
        style={{
          left:
            windowSize < "768" ? (isOpen ? 0 : 0) : isOpen ? "265px" : "80px",
          width:
            windowSize < "768"
              ? isOpen
                ? "100%"
                : "100%"
              : isOpen
              ? "81vw"
              : "94vw",
          padding: windowSize < 490 ? "1rem 0.5rem" : "1rem 1.5rem",
          backgroundColor: !isDarkMode && "var(--primary-color)",
        }}
      >
        <div className="d-flex align-items-center gap-3 left-items">
          <FontAwesomeIcon
            onClick={() => setIsOpen(!isOpen)}
            cursor={"pointer"}
            size="lg"
            icon={faBars}
          />

          <div
            className="input-group search bg-white position-relative "
            style={{
              borderRadius: "5px",
              width: windowSize < 768 ? "70%" : "100%",
              height: "40px",
              display : windowSize < 768 ? "none" : ""
            }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              placeholder="Search..."
              onClick={handleShowDiv}
            />
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-end gap-4 right-items">
          <FontAwesomeIcon
            onClick={toggleDarkMode}
            icon={isDarkMode ? faSun : faMoon}
            size="lg"
            cursor={"pointer"}
          />

          <div className="position-relative notifications">
            {/* Font Awesome Icon Button */}
            <button
              onClick={toggleIconVisibility}
              className=" notifications-btn"
            >
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                4
              </span>
            </button>

            {/* Conditional Rendering of the Div */}
            {isIconVisible && (
              <div className="position-absolute d-flex bg-white notifications-body">
                <h6 className="text-center my-2 text-dark">10 Notifications</h6>
                <hr />
                <div className="d-flex justify-content-between  px-3 notifications-link">
                  <Link>
                    <FontAwesomeIcon icon={faMessage} /> 4 new Messages{" "}
                  </Link>
                  <p className="text-secondary">2 minutes ago</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between px-3 notifications-link">
                  <Link>
                    <FontAwesomeIcon icon={faUsers} /> 8 new Registers{" "}
                  </Link>
                  <p className="text-secondary">2 minutes ago</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between px-3 notifications-link">
                  <Link>
                    <FontAwesomeIcon icon={faFile} /> 2 new Reports{" "}
                  </Link>
                  <p className="text-secondary">2 minutes ago</p>
                </div>
              </div>
            )}
          </div>
          <div className="position-relative settings">
            {/* img */}
            <img
              src={require(`../../assets/Admin/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png`)}
              onClick={toggleImageVisibility}
              width={"50px"}
              alt="admin-pic"
              className="profile-img"
            />

            {/* Conditional Rendering of the Div */}
            {isImageVisible && (
              <div className="position-absolute d-flex align-items-center bg-white mt-2 settings-body">
                <div className="w-100 px-3 py-2">
                  <Link>Logout</Link>
                </div>
                <div className="w-100 px-3 py-2">
                  <NavLink to={"/profile"}>Profile</NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isVisible && (
        <div
          ref={divRef}
          className=" w-25 border bg-light search-result"
          style={{
            position:'fixed',
            left:
              windowSize < "768"
                ? isOpen
                  ? 0
                  : 0
                : isOpen
                ? "350px"
                : "175px",
            zIndex: 100000,
            top: "80px",
            display: searchTerm.length > 0 ? "block" : "none",
          }}
        >
          <nav className="p-0">
            {filteredNavData.length > 0 ? (
              filteredNavData.map((parent) => (
                <div key={parent.id} className="nav-item p-2">
                  <a href={parent.path} className="parent-link fw-bold">
                    {parent.name}
                  </a>

                  {parent.children.length > 0 && (
                    <ul className="child-links p-0">
                      {parent.children.map((child) => (
                        <li key={child.id}>
                          <a href={child.path} className="child-link">
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="p-2">No results found</p>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
