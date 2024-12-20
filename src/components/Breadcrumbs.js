import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .slice(3)
    .filter((path) => path); // Split path and remove empty segments

    if (location.pathname === '/dashboard/pages/register-login') return null;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathnames.length === 0 ? (
          <>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
              {/* Always link to Home */}
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </>
        ) : (
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        )}

        {pathnames.map((segment, index) => {
          // Generate URL for each breadcrumb link
          const pathTo = `/${pathnames.slice(1, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li
              key={index}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {decodeURIComponent(segment)} {/* Current page name */}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={pathTo}>{decodeURIComponent(segment)}</Link>{" "}
              {/* Clickable link */}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
