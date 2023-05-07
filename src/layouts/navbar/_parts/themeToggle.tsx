import { createSignal } from "solid-js";

import { FaRegularMoon } from "solid-icons/fa";
import { WiDaySunny } from "solid-icons/wi";

const ThemeToggle = () => {
  type theme = "light" | "dark";
  const [currentTheme, setCurrentTheme] = createSignal<theme>("dark");

  if (localStorage.getItem("theme")) {
    const currentTheme = localStorage.getItem("theme") as theme;
    setCurrentTheme(currentTheme);
  }

  const setThemeToggle = () => {
    const htmlRoot = document.querySelector("html");
    if (currentTheme() == "light") {
      setCurrentTheme("dark");
      htmlRoot.dataset.theme = "dark";
    } else {
      setCurrentTheme("light");
      htmlRoot.dataset.theme = "light";
    }
  };

  return (
    <>
      <div class="inline-block w-10">
        <button
          class="btn btn-base-100 rounded-btn transition-all duration-300 ease-in-out h-10 w-10"
          onClick={setThemeToggle}
        >
          <span class="m-auto text-3xl">
            {currentTheme() == "dark" ? <WiDaySunny /> : <FaRegularMoon />}
          </span>
        </button>
      </div>
    </>
  );
};
export default ThemeToggle;
