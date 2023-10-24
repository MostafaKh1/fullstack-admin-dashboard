import UserAvatar from "./UserAvatar";
import styles from "../css/AnnouncementList.module.css";

interface IAnnouncementListProps {
  name: string;
  title: string;
  avatar: string;
  description: string;
}

function AnnouncementList({
  name,
  title,
  avatar,
  description,
}: IAnnouncementListProps) {
  console.log(description);
  return (
    <div className={styles.ann_main}>
      <div className={styles.info_container}>
        <div className={styles.ann_info}>
          <UserAvatar picturePath={avatar} />
          <div>
            <h5>{name}</h5>
            <p>{title}</p>
          </div>
        </div>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementList;
