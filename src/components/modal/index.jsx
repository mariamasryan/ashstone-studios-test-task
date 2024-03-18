import styles from "./styles.module.scss";
import OutsideClickHandler from "react-outside-click-handler";

export const Modal = ({ post, close }) => {
  const handleOutsideClick = () => {
    close(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.close} onClick={() => close(false)}>
            Close
          </div>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={post.img} alt="" />
            </div>
            <div className={styles.postInfo}>
              <h2 className={styles.title}>{post.title}</h2>
              <a className={styles.tag}>{post.tags}</a>
              <div className={styles.info}>
                <div className={styles.author}>{post.autor}</div>
                <div className={styles.date}>{post.date}</div>
                <div className={styles.views}>{post.views}</div>
              </div>
              <div className={styles.description}>{post.text}</div>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
