import { Modal } from "../../components/modal";
import styles from "./styles.module.scss";
import { useState, memo } from "react";

export const Posts = memo(({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return (
    <main className={styles.container}>
      <div className={styles.parent}>
        {posts?.map((post, index) => (
          <div
            key={index}
            className={styles.post}
            onClick={() => setIsModalOpen(post)}
          >
            <>
              <div className={styles.image}>
                <img src={post.img} srcSet={post.img_2x} alt="" />
              </div>
              <div className={styles.content}>
                <a href="#" className={styles.tags}>
                  {post.tags}
                </a>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.info}>
                  <div className={styles.autor}>{post.autor}</div>
                  <span className={styles.oval}></span>
                  <div className={styles.date}>{post.date}</div>
                  <span className={styles.oval}></span>
                  <div className={styles.views}>{post.views}</div>
                </div>
                <p className={styles.text}>{post.text}</p>
              </div>
              {isModalOpen && (
                <Modal post={isModalOpen} close={setIsModalOpen} />
              )}
            </>
          </div>
        ))}
      </div>
    </main>
  );
});
