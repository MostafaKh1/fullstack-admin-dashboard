import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Quiz from "../components/Quiz";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Hero />
        <div className="ann_quiz">
          <Announcement />
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
