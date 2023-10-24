import UserAvatar from "./UserAvatar";
import { Notifications, Email, Menu, Close } from "@mui/icons-material";
import "../css/navbar.css";
import { UseAppDispatch, UseAppSelector } from "../store";
import { toggleMenu } from "../store/announcementSlice";
import { Button } from "@mui/material";

function Navbar() {
  const PathUser = "user4.jpg";
  const dispatch = UseAppDispatch();
  const { isOpen } = UseAppSelector((state) => state.announcement);

  return (
    <nav>
      <div className="container">
        <div>
          <h1>Welcome User</h1>
        </div>
        <div className="nav-bar-2">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-icons">
            <span>
              <Notifications style={{ fontSize: "3rem" }} />
            </span>
            <span>
              <Email style={{ fontSize: "3rem" }} />
            </span>
            <UserAvatar picturePath={PathUser} />
            <div className="menu">
              {isOpen ? (
                <Button color="error" onClick={() => dispatch(toggleMenu())}>
                  <Close style={{ fontSize: "3rem" }} />
                </Button>
              ) : (
                <Button color="primary" onClick={() => dispatch(toggleMenu())}>
                  <Menu style={{ fontSize: "3rem" }} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
