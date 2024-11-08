"use client";

import Content from "@/components/assignment7/content";
import Header from "@/components/assignment7/header";
import Sidebar from "@/components/assignment7/sidebar";
import { AppContext } from "@/context/assignment7/AppContext";
import { useContext } from "react";

const Assignment7 = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("MyComponent must be used within an AppProvider");
  }

  const { isOpen } = context;
  return (
    <div className="App d-grid">
      <Header />
      <Content />
      {isOpen && <Sidebar />}
    </div>
  );
};

export default Assignment7;