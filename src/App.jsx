import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, screen } from './theme';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{ ...themeMode, screen }}>
      <GlobalStyles />
      <Router>
        <Navbar toggleTheme={themeToggler} theme={theme} />
        <Routes>
          <Route path='/' element={<h1>Hello React</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
