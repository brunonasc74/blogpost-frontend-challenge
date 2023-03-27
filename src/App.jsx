import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, screen } from './components/Theme';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/home';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{ ...themeMode, screen }}>
      <GlobalStyles />
      <Router>
        <Navbar toggleTheme={themeToggler} theme={theme} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
