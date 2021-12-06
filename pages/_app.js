import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { ThemeContext } from "../public/context";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [isNight, setIsNight] = useState(null);

  useEffect(() => {
    setIsNight(JSON.parse(localStorage.getItem("DARK_MODE")));
  }, []);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", isNight);
  });

  return (
    <ThemeContext.Provider value={{ isNight, setIsNight }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}
