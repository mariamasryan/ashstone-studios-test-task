import styles from "./styles.module.scss";
import { postSelectors } from "../../../../features/config";
import { useSelector } from "react-redux";
import arrowIcon from "../../../../assets/icons/arrow.png";
import logoIcon from "../../../../assets/icons/Logotype.png";
import closeIcon from "../../../../assets/icons/delete.png";

export const MobileMenu = ({ close }) => {
  const subMenu = useSelector(postSelectors.selectSubmenuData);
  const menu = useSelector(postSelectors.selectMenuData);

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileLogo}>
        <img src={logoIcon} alt="" />
        <div className={styles.close}>
          <img src={closeIcon} alt="" onClick={() => close(false)} />
        </div>
      </div>
      <div className={styles.mobileMenuBody}>
        <nav className={styles.mobileNav}>
          {menu?.map((item) => {
            return (
              <a key={item.id} href="#" className={styles.item}>
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
    </div>
  );
};
