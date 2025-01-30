import { Menu, MenuItem } from "semantic-ui-react";

import { Link } from "react-router-dom";
export default function NavBar({
  logoutHandler,
  user,
  handleItemClick,
  activeItem,
}) {
  return (
    <Menu pointing inverted>
      <MenuItem name={user?.data ? user?.data?.name : "Гость"} />
      {user?.data && (
        <MenuItem
          as={Link}
          to="/books"
          name="Карты"
          active={activeItem === "Карты"}
          onClick={() => handleItemClick("Карты")}
        />
      )}
      {user?.data && (
        <MenuItem
          as={Link}
          to="/add"
          name="Добавить карту"
          active={activeItem === "Добавить карту"}
          onClick={() => handleItemClick("Добавить карту")}
        />
      )}
      {user?.data && (
        <MenuItem
          as={Link}
          to="/mybooks"
          name="Мои книги"
          active={activeItem === "Мои книги"}
          onClick={() => handleItemClick("Мои книги")}
        />
      )}
      {!user?.data && (
        <MenuItem
          as={Link}
          to="/login"
          name="Вход"
          active={activeItem === "Вход"}
          onClick={() => handleItemClick("Вход")}
        />
      )}
      {!user?.data && (
        <MenuItem
          as={Link}
          to="/signup"
          name="Регистрация"
          active={activeItem === "Регистрация"}
          onClick={() => handleItemClick("Регистрация")}
        />
      )}
      {user?.data && (
        <MenuItem
          position="right"
          name="Выход"
          active={activeItem === "Выход"}
          // onClick={() => handleItemClick("Выход")}
          onClick={logoutHandler}
        />
      )}
    </Menu>
  );
}
