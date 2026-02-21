import { memo } from "react";

const Header = memo(function Header() {
  return (
    <header className="flex px-hoz-mobile md:px-hoz-tablet xl:px-hoz-desktop py-16 justify-center bg-gray-200 dark:bg-gray-700">
      <img src="logo.svg" alt="todo logo" />
    </header>
  );
});

export default Header;
