import styles from "./Post.module.css";

export default function Post({ title, src }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <img src={src} alt="post photo" className={styles.image} />
    </div>
  );
}
