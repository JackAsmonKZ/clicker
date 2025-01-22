import React from "react";
import { createContext } from "react";

interface ClickContextType {
  click: number;
  setClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ClickContext = createContext<ClickContextType | null>(null);
