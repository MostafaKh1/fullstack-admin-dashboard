import "../css/Side.css";
import {
  Home,
  DateRange,
  StickyNote2,
  School,
  BarChart,
  Campaign,
} from "@mui/icons-material";
import { UseAppSelector } from "../store";

function Sidebar() {
  const { isOpen } = UseAppSelector((state) => state.announcement);

  const dataSidebar = [
    {
      icon: <Home style={{ fontSize: "2.5rem" }} />,
      title: "Dashboard",
    },
    {
      icon: <DateRange style={{ fontSize: "2.5rem" }} />,
      title: "Schedule",
    },
    {
      icon: <StickyNote2 style={{ fontSize: "2.5rem" }} />,
      title: "Courses",
    },
    {
      icon: <School style={{ fontSize: "2.5rem" }} />,
      title: "Gradebook",
    },
    {
      icon: <BarChart style={{ fontSize: "2.5rem" }} />,
      title: "Performance",
    },
    {
      icon: <Campaign style={{ fontSize: "2.5rem" }} />,
      title: "Announcement",
    },
  ];

  return (
    <div className="sidebar" style={{ left: `${isOpen ? "0" : "-100%"}` }}>
      <h1>Coligo</h1>
      <ul>
        {dataSidebar.map(({ icon, title }, index) => {
          return (
            <li key={index}>
              <div className="item">
                <span style={{ color: `${index === 0 && "#274d6a"}` }}>
                  {icon}
                </span>
                <h3
                  style={{
                    color: `${index === 0 && "#4dccc5"}`,
                    display: `${isOpen && "block"}`,
                  }}
                >
                  {title}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
