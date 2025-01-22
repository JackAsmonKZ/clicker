import { Button } from "antd";
import { MouseEventHandler } from "react";

type CustomButtonTypes = {
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
  type?: "text" | "primary" | "link" | "default" | "dashed" | undefined;
  shape?: "default" | "circle" | "round" | undefined;
};

export const CustomButton = ({
  text,
  onClick,
  type = "primary",
  shape = "circle",
}: CustomButtonTypes) => {
  return (
    <Button onClick={onClick} type={type} shape={shape}>
      {text}
    </Button>
  );
};
