import { Button } from "@mui/material";
import styles from "../css/QuizSection.module.css";

interface IQuizSectionProps {
  id?: string;
  tagline: {
    title: string;
    icon: JSX.Element;
  };
  course: string;
  topic: string;
  dueTo: string;
  start: string;
}

function QuizSection({
  course,
  dueTo,
  tagline,
  topic,
  start,
}: IQuizSectionProps) {
  return (
    <div className="quiz">
      <div className={styles.flex}>
        <span>{tagline.icon}</span>
        <h5>{tagline.title}</h5>
      </div>
      <div className={styles.flex}>
        <p>Course</p>
        <p>{course}</p>
      </div>
      <div className={styles.flex}>
        <p>Topics</p>
        <p>{topic}</p>
      </div>
      <div className={styles.flex}>
        <p>Due to </p>
        <p>{dueTo}</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "8px" }}>
        <Button
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#" className={styles.btn}>
            {start}
          </a>
        </Button>
      </div>
      <hr style={{ marginTop: "18px" }} />
    </div>
  );
}

export default QuizSection;
