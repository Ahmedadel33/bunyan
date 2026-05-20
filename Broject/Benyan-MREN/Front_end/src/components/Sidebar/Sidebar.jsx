import { NavLink } from "react-router-dom";
import { useFormStatus } from "../../context/FormStatusContext"; 
import Style from "./Sidebar.module.css";

export default function Sidebar() {
  const { typingStatus } = useFormStatus();

  const links = [
    { icon: "fa-users", title: "Status", path: "/" },
    { icon: "fa-building", title: "User management", path: "/Users", badgeKey: "users" }, 
    { icon: "fa-building", title: "Project management", path: "/Projects", badgeKey: "projects" }, 
    { icon: "fa-code", title: "Developer management", path: "/Developer", badgeKey: "developer" },
    { icon: "fa-users", title: "cms management", path: "/CMS" },  
    { icon: "fa-message", title: "Live Chat management", path: "/Chat" },  
  ];

  return (
    <aside className={`${Style.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>
      <nav>
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => 
              `${Style.navitem} d-flex align-items-center justify-content-between px-3 py-4 ${isActive ? Style.active : ""}`
            }
          >
            <div className="d-flex align-items-center">
              <i className={`fa-solid ${item.icon} fs-3`}></i>
              <span className={Style.Title}>{item.title}</span>
            </div>

            {item.badgeKey && typingStatus[item.badgeKey] && (
              <span className={Style.dotBadge} title="Draft / Typing..."></span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}