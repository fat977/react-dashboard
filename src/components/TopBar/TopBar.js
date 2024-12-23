import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFile,
  faMoon,
  faSearch,
  faSun,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../bootstrapComponent";
import { useEffect, useRef, useState } from "react";
import { faBell, faMessage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
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

  const { isOpen, setIsOpen } = useMenuContext();
  const { windowSize } = useWindowSizeContext();

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={
          " top-bar d-flex align-items-center justify-content-between px-3 px-lg-5"
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
              //display: windowSize < 768 ? "none" : "",
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
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="mt-2">
                <FontAwesomeIcon size="lg" icon={faBell} color="black" />

                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </Dropdown.Toggle>

             
                <Dropdown.Menu>
                <h4 className="text-center my-2 text-dark">
                    10 Notifications
                  </h4>
                  <hr />
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center justify-content-between px-2">
                      <div>
                        <FontAwesomeIcon icon={faUsers} className="me-2" />8
                        new registers
                      </div>
                      <span className="text-muted ms-5">3 mins</span>
                    </div>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center justify-content-between px-2">
                      <div>
                        <FontAwesomeIcon icon={faMessage} className="me-2" />4
                        new messages
                      </div>
                      <span>3 hours</span>
                    </div>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center justify-content-between px-2">
                      <div>
                        <FontAwesomeIcon icon={faFile} className="me-2" />2 new
                        reports
                      </div>
                      <span>4 days</span>
                    </div>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item className="text-center" href="#/action-1">
                    See all notifications
                  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="settings">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="p-0">
                <img
                  src={require(`../../assets/Admin/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png`)}
                  width={"50px"}
                  alt="admin-pic"
                  className="profile-img"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/page2">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      {isVisible && (
        <div
          ref={divRef}
          className=" w-50 border bg-light search-result"
          style={{
            position: "fixed",
            left:
              windowSize < "768"
                ? isOpen
                  ? 0
                  : '50px'
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
                  <a href={`/react-dashboard${parent.path}`} className="parent-link fw-bold">
                    {parent.name}
                  </a>

                  {parent.children.length > 0 && (
                    <ul className="child-links p-0">
                      {parent.children.map((child) => (
                        <li key={child.id}>
                          <a href={`/react-dashboard${child.path}`} className="child-link">
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
