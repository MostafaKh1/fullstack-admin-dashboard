import { Button } from "@mui/material";
import styles from "../css/Hero.module.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div>
          <h1>{t("hero_title")}</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          </p>
          <span>
            perspiciatis totam neque molestiae similique unde nihil dicta lab{" "}
            perspiciatis totam neque molestiae si{" "}
          </span>
          <div className={styles.heroInfo}>
            <div style={{ marginTop: "10px" }}>
              <Button>
                <span className={styles.btn} style={{ color: "white" }}>
                  View exams tips
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            width={600}
            height={250}
            src="./hero.jpg"
            style={{ padding: "0px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
