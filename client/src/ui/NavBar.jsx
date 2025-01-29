// import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar({
  logoutHandler,
  user,
  handleItemClick,
  activeItem,
}) {
  return (
    <Menu pointing inverted>
      <Menu.Item name={user.data ? user.data.name : "Гость"} />
      {user.data && (
        <Menu.Item
          as={Link}
          to="/books"
          name="Книги"
          active={activeItem === "Книги"}
          onClick={() => handleItemClick("Книги")}
        />
      )}
      {user.data && (
        <Menu.Item
          as={Link}
          to="/add"
          name="Добавить книгу"
          active={activeItem === "Добавить книгу"}
          onClick={() => handleItemClick("Добавить книгу")}
        />
      )}
      {user.data && (
        <Menu.Item
          as={Link}
          to="/mybooks"
          name="Мои книги"
          active={activeItem === "Мои книги"}
          onClick={() => handleItemClick("Мои книги")}
        />
      )}
      {!user.data && (
        <Menu.Item
          as={Link}
          to="/signin"
          name="Вход"
          active={activeItem === "Вход"}
          onClick={() => handleItemClick("Вход")}
        />
      )}
      {!user.data && (
        <Menu.Item
          as={Link}
          to="/signup"
          name="Регистрация"
          active={activeItem === "Регистрация"}
          onClick={() => handleItemClick("Регистрация")}
        />
      )}
      {user.data && (
        <Menu.Item
          position="right"
          name="Выход"
          active={activeItem === "Выход"}
          onClick={() => {
            handleItemClick("Выход");
            logoutHandler();
          }}
        />
      )}
    </Menu>
  );
}
