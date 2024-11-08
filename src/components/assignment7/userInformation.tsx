'use client'
import { AppContext } from "@/context/assignment7/AppContext";
import { useContext } from "react";

export default function UserInformation() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("MyComponent must be used within an AppProvider");
  }

  const { userData} = context;
  return (
    <>
      <h5>Information</h5>
      <p>{userData.firstName}</p>
      <p>{userData.lastName}</p>
      <p>{userData.email}</p>
    </>
  );
}
