import { useContext } from "react";
import { ClickContext } from "../context/ClickContext";

export const useClickContext = () => {
  const context = useContext(ClickContext);
  if (context === undefined) {
    throw new Error("useClickContext must be used within a ClickProvider");
  }
  return context;
};
