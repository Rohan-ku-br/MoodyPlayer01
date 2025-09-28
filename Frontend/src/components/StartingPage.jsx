import React from "react";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";
import Live from "./Live";
import MainRoutes from "../routes/MainRoutes";
const StartingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(time);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default StartingPage;
