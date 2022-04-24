import React from "react";
import styles from "./SectionInfo.module.scss";

const SectionInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container_block}>
          <div className={styles.container_block_name}>
            <h1>Vasya Pupkin</h1>
            <p>Блог фронтенд-разработчика</p>
          </div>
          <div className={styles.container_block_photo}>
            <img
              src="https://av-film.ru/wp-content/uploads/2021/09/morten-pedersen-Z-bgD8pMv30-unsplash.jpg?v=1638952738"
              alt="Мое фото"
            />
          </div>
          <div className={styles.container_block_about_me}>
            <h2>Обо мне</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque diam arcu risus. Imperdiet dolor, porttitor
              pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc
              suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed
              porta ac enim. Mattis quam accumsan ipsum commodo sed purus mi.
              Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra
              viverra quis mattis tincidunt laoreet amet, laoreet proin. Duis
              mi, aliquam tincidunt amet phasellus malesuada non nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionInfo;
