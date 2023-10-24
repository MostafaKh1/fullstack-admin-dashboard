import { useEffect } from "react";
import styles from "../css/Announcement.module.css";
import All from "./All";
import AnnouncementList from "./AnnouncementList";
import { UseAppDispatch, UseAppSelector } from "../store";
import { setAnnouncements } from "../store/announcementSlice";

function Announcement() {
  const { announcement } = UseAppSelector((state) => state.announcement);

  const dispatch = UseAppDispatch();
  useEffect(() => {
    fetch(`https://backend-acc-quiz.onrender.com/announcements`)
      .then((response) => response.json())
      .then((data) => dispatch(setAnnouncements(data)))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.tagline}>
          <div className={styles.info}>
            <h4>Announcement</h4>
            <p>Some title Here title that i cant see it</p>
          </div>
          <All />
        </div>
        <div className={styles.ann_list}>
          {announcement &&
            announcement.map((item, i) => {
              return <AnnouncementList key={i} {...item} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Announcement;
