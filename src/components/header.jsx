import { memo } from "react";

const Header = memo(function Header() {
  return (
    <header className="flex px-8 py-16 justify-center bg-gray-200 dark:bg-gray-700">
      <img src="logo.svg" alt="todo logo" />
    </header>
  );
});

export default Header;
