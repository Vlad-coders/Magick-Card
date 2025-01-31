import { Menu, MenuItem } from 'semantic-ui-react';
import styles from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default function NavBar({ logoutHandler, user, handleItemClick, activeItem }) {
  return (
    <Menu pointing inverted>
      <MenuItem name={user?.data ? user?.data?.name : 'Гость'} />
      {user?.data && (
        // <MenuItem
        //   as={Link}
        //   to="/"
        //   name="Карты"
        //   active={activeItem === 'Карты'}
        //   // onClick={() => handleItemClick('Карты')}
        // />
        <NavLink to="/" end className={styles.linkCard}>
          Карты
        </NavLink>
      )}
      {user?.data && (
        <NavLink to="/account" end className={styles.linkCard}>
          Добавить карту
        </NavLink>
        // <MenuItem
        //   as={Link}
        //   to="/account"
        //   name="Добавить карту"
        //   active={activeItem === 'Добавить карту'}
        //   onClick={() => handleItemClick('Добавить карту')}
        // />
      )}
      {user?.data && (
        <NavLink
          to="/basket"
          end
          className={styles.linkCard}
          // onClick={() => handleItemClick('Корзина')}
        >
          Корзина
        </NavLink>
        // <MenuItem
        //   as={Link}
        //   to="/basket"
        //   name="Корзина"
        //   active={activeItem === 'Корзина'}
        //   onClick={() => handleItemClick('Корзина')}
        // />
      )}
      {!user?.data && (
        <NavLink
          to="/login"
          end
          className={styles.linkCard}
          // onClick={() => handleItemClick('Вход')}
        >
          Вход
        </NavLink>
        // <MenuItem
        //   as={Link}
        //   to="/login"
        //   name="Вход"
        //   active={activeItem === 'Вход'}
        //   onClick={() => handleItemClick('Вход')}
        // />
      )}
      {!user?.data && (
        <NavLink to="/signup" end className={styles.linkCard}>
          Регистрация
        </NavLink>
        // <MenuItem
        //   as={Link}
        //   to="/signup"
        //   name="Регистрация"
        //   active={activeItem === 'Регистрация'}
        //   onClick={() => handleItemClick('Регистрация')}
        // />
      )}
      {user?.data && (
        <NavLink end className={styles.linkCard} onClick={logoutHandler}>
          Выход
        </NavLink>
        // <MenuItem
        //   position="right"
        //   name="Выход"
        //   active={activeItem === 'Выход'}
        //   // onClick={() => handleItemClick("Выход")}
        //   onClick={logoutHandler}
        // />
      )}
    </Menu>
  );
}
