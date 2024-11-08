"use client";
import { AppContext } from "@/context/assignment7/AppContext";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";

export default function HeaderAssignment7() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("MyComponent must be used within an AppProvider");
  }

  const { userData, isOpen, setIsOpen, isDay, setIsDay, themeStyle } = context;
  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="m-1 border border-1 p-2 "
      style={{
        ...themeStyle,
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        gridRow: "1 / 2",
      }}
      
    >
      <div className="fs-4">Hello {userData.firstName} {userData.lastName}</div>
        <div className="d-flex justify-content-between">
      <Button variant={isDay?"primary":"light"} onClick={toggleSidebar}>Show profile</Button>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={isDay ? "Light" : "Dark"}
          onChange={toggleTheme}
          checked={isDay}
        />
      </Form>
      </div>
    </div>
  );
}
