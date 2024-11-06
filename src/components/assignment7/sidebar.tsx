"use client";
import { AppContext } from "@/context/assignment7/AppContext";
import { useContext } from "react";
import UserInformation from "@/components/assignment7/userInformation";

export default function Sidebar() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("MyComponent must be used within an AppProvider");
  }

  const { themeStyle } = context;
  return (
    <div
      className="m-1 border border-1 p-2"
      style={{
        ...themeStyle,
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation />
    </div>
  );
}
