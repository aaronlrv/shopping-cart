import { useEffect, useState } from "react";

function useDarkMode() {
  let [theme, setTheme] = useState("light");
  let colorTheme = theme === "light" ? "dark" : "light"; /// will be used in comparison often, it is the inverse of the current theme

  useEffect(() => {
    let root = window.document.documentElement;
    console.log(root);
    console.log("theme", theme);
    console.log("colortheme", colorTheme);
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [setTheme, colorTheme]);

  return [setTheme, colorTheme];
}

export default useDarkMode;

// proper way of doing it for learning purposes
// function useDarkMode() {
//     let [theme, setTheme] = useState("light");

//     function toggle() {
//       setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
//     }

//     useEffect(() => {
//       let root = window.document.documentElement;

//       root.classList.remove("dark");
//       root.classList.remove("light");
//       root.classList.add(theme);
//     }, [theme]);

//     return [theme, toggle];
//   }
