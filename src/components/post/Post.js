import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
      <div className={`${styles.post} ${styles.container}`}>
          <div className={styles.photo}>
            <img src="D:\Programming\Projects\dulcereact\src\components\post\img\Revuelto gramajo.jpg" alt="Revuelto Gramajo"></img>
          </div>
      </div>
  );
};

export default Post;