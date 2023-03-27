import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme !== theme && localTheme && setTheme(localTheme);
  }, [theme]);

  return [theme, themeToggler];
};

export default useDarkMode;
