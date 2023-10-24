import { Button } from "@mui/material";
import "./homePage.css";
import { UseAppDispatch } from "../../store";
import { setLogin } from "../../store/announcementSlice";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const goToDashboard = () => {
    dispatch(setLogin());
    navigate("/dashboard");
  };

  return (
    <div className="home">
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={goToDashboard}
      >
        Please Click to Login
      </Button>
    </div>
  );
}

export default Homepage;
