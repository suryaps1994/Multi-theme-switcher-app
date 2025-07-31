// Importing necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ThemeContext from "./context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing toast CSS
import "./styles.css"; // Custom app styling

function App() {
  // Theme state - retrieves saved theme from localStorage or defaults to "theme1"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme1");

  // Manages fade-in/out effect class when theme changes
  const [fadeClass, setFadeClass] = useState("");

  // useRef to track if the component has mounted for the first time
  const firstLoad = useRef(true);
  // The useRef hook in React is used for storing a mutable value that persists across re-renders without causing a re-render when it changes.

  // Runs whenever the theme state changes
  useEffect(() => {
    setFadeClass("fade-transition"); // Add fade transition class
    localStorage.setItem("theme", theme); // Save selected theme to localStorage

    // Only show toast notification if not the first load
    if (!firstLoad.current) {
      toast.success(`Switched to ${theme}`, { autoClose: 2000 }); // Show success toast
    } else {
      firstLoad.current = false; // Set first load to false after first render
    }

    // Remove fade class after 500ms
    const timeout = setTimeout(() => {
      setFadeClass("");
    }, 500);

    // Cleanup the timeout when component unmounts or theme changes
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    // Providing theme context to the entire app
    // {/* All components inside can access theme and setTheme */}
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        {/* App container with dynamic theme and transition class */}
        <div className={`app ${theme} ${fadeClass} min-vh-100`}>
          <Header /> {/* Navigation header */}
          {/* Optional sidebar - only shown in theme2 */}
          {theme === "theme2" && (
            <div className="sidebar">
              <h5>Sidebar</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
          {/* Main content container with route-based navigation */}
          <div className="container mt-5 pt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} /> {/* Fallback route */}
            </Routes>
          </div>
          {/* Toast notification container positioned at the top center */}
          <ToastContainer position="top-center" />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
