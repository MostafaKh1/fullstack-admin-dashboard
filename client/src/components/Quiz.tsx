import styles from "../css/Quiz.module.css";
import All from "./All";
import QuizSection from "./QuizSection";
import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";

const data = [
  {
    id: "quiz1",
    tagline: {
      title: "Unite Quiz",
      icon: <HourglassFullOutlinedIcon />,
    },
    course: "Physics",
    topic: "Unit2 M..... and force",
    dueTo: "20 Dec 2017 - 09:00pm",
    start: "Start Quiz",
  },
  {
    id: "assignment",
    tagline: {
      title: "12-12 Assignment",
      icon: <HourglassFullOutlinedIcon />,
    },
    course: "Arabic",
    topic: "Arabic Word i guess",
    dueTo: "20 Dec 2017 - 09:00pm",
    start: "Solve Assignment",
  },
];

function Quiz() {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h4>What's due</h4>
        <All />
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
      </div>
      <div className={styles.quiz_section}>
        {data.map((box) => {
          return <QuizSection key={box.id} {...box} />;
        })}
      </div>
    </div>
  );
}

export default Quiz;
