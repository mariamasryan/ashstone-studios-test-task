import styles from "./styles.module.scss";
import searchIcon from "../../assets/icons/search.png";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../features/config";
import { Posts } from "../../pages/posts";
import logoIcon from "../../assets/icons/Logotype.png";
import { Navigation } from "./atoms/navigation";
import menuIcon from "../../assets/icons/menu.png";
import { MobileMenu } from "./atoms/mobileMenu";

export const Header = () => {
  const [text, setText] = useState("");
  const posts = useSelector(postSelectors.selectPostsData);
  const [filtredPosts, setFiltredPosts] = useState([]);
  const displayPosts = filtredPosts.length ? filtredPosts : posts;
  const [isOpen, setIsOpen] = useState(false);

  // const subMenu = useSelector(postSelectors.selectSubmenuData);
  // const menu = useSelector(postSelectors.selectMenuData);

  const handleSearchingText = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setFiltredPosts(() => {
      const filteredData = posts.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.text.toLowerCase().includes(text.toLowerCase())
      );
      return [...filteredData];
    });
  }, [text]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.up}>
          <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
            <img src={menuIcon} alt="" />
          </div>
          {isOpen && <MobileMenu close={setIsOpen} />}
          <div className={styles.logo}>
            <img src={logoIcon} alt="" />
          </div>
          <div className={styles.search}>
            <input
              type="text"
              value={text}
              onChange={(e) => handleSearchingText(e)}
              className={styles.searchInput}
            />
            <img src={searchIcon} alt="" className={styles.searchIcon} />
          </div>
        </div>
        <Navigation />
      </div>
      <Posts posts={displayPosts} />
    </>
  );
};
