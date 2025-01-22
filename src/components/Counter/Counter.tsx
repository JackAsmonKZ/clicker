import { Flex } from "antd";
import { useClickContext } from "../../hooks/useClickContext";
import { CustomButton } from "../Button/CustomButton";

export const Counter = () => {
  const context = useClickContext();

  const handleClick = () => {
    if (context) {
      context.setClick((prevent) => prevent + 1);
    }
  };

  const handleResetCounter = () => {
    if (context) {
      context.setClick(0);
    }
  };

  return (
    <Flex justify="center" align="center" vertical gap="15px">
      <span style={{ fontSize: "100px" }}>{context?.click}</span>
      <CustomButton onClick={handleClick} text="!" />
      <CustomButton onClick={handleResetCounter} text="RESET" shape="default" />
    </Flex>
  );
};
