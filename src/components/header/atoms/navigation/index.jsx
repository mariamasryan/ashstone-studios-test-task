import styles from "./styles.module.scss";
import { postSelectors } from "../../../../features/config";
import { useSelector } from "react-redux";
import arrowIcon from "../../../../assets/icons/arrow.png";
import { memo } from "react";

export const Navigation = memo(() => {
  const subMenu = useSelector(postSelectors.selectSubmenuData);
  const menu = useSelector(postSelectors.selectMenuData);

  return (
    <div className={styles.down}>
      <nav className={styles.nav}>
        {menu?.map((item) => {
          return (
            <a key={item.id} href="#" className={styles.navItem}>
              <span>{item.name}</span>
              {item.img && <img src={arrowIcon} alt="" />}
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdown}>
                  {subMenu?.map((item) => {
                    return (
                      <div key={item.id} className={styles.list}>
                        <li className={styles.submenuList}>
                          <span className={styles.listName}>{item.name}</span>
                          <img src={item.img} alt="" />
                        </li>
                      </div>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
});
