import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {  useMenuContext } from "../../../context/MenuContext";

export default function TreeNode({ node }) {
  const location = useLocation(); // React Router hook for the current path
  const fullPath = location.pathname;

  const pathParts = fullPath.split("/").filter(Boolean);
  const secondSegment = pathParts[1]; // e.g., "dashboard"

  const [expanded, setExpanded] = useState(() => {
    const savedState = localStorage.getItem("expandedNodes");
    return savedState ? JSON.parse(savedState) : {};
  });

  const isExpanded = expanded[node.id];

  const {isOpen} = useMenuContext();
  // Toggle the expanded state for a given node
  const handleToggle = (id) => {
    const newExpanded = { ...expanded, [id]: !expanded[id] };
    setExpanded(newExpanded);

    // Save updated state to localStorage
    localStorage.setItem("expandedNodes", JSON.stringify(newExpanded));
  };

  return (
    <>
      {node.path ? (
        <div onClick={() => handleToggle(node.id)}>
          <NavLink
            to={node.path}
            className={`d-flex align-items-center justify-content-${
              isOpen ? "between" : "center"
            }   sidebar-link`}
          >
            <div
              className={`d-flex ${isOpen ? "gap-2" : ""} align-items-center`}
            >
              <span className="d-flex">{node.icon}</span>
              <span style={{ display: isOpen ? "block" : "none" }}>
                {node.name}
              </span>
            </div>
          </NavLink>
        </div>
      ) : (
        <div onClick={() => handleToggle(node.id)}>
          <div
            className={`
              d-flex align-items-center justify-content-${
                isOpen ? "between" : "center"
              } my-2 sidebar-link
              ${
                secondSegment === node.name.toLocaleLowerCase()
                  ? "active "
                  : " "
              }`}
          >
            <div
              className={`d-flex ${isOpen ? "gap-2" : ""} align-items-center`}
            >
              <span className="d-flex">{node.icon}</span>
              <span style={{ display: isOpen ? "block" : "none" }}>
                {node.name}
              </span>
            </div>
            {node.children && (
              <span>
                {isExpanded ? (
                  <FontAwesomeIcon
                    style={{ display: isOpen ? "block" : "none" }}
                    icon={faAngleDown}
                    size="sm"
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ display: isOpen ? "block" : "none" }}
                    size="sm"
                    icon={faAngleLeft}
                  />
                )}
              </span>
            )}
          </div>
        </div>
      )}
      {isExpanded && node.children && (
        <div className="children">
          {node.children.map((child) => (
            <NavLink
              to={child.path}
              className={`d-flex align-items-center ${
                isOpen ? "gap-2" : "justify-content-center"
              } sidebar-link mt-1`}
              key={child.id}
            >
              <FontAwesomeIcon icon={faCircle} />

              <span style={{ display: isOpen ? "block" : "none" }}>
                {child.name}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export const TreeView = ({ data }) => {
  return (
    <div className="sidebar-scroll">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};
