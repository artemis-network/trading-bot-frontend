import { Button } from "@chakra-ui/react";

interface Props {
  title: string;
  onClick: Function;
  size: string;
}

const CustomButton = (props: Props) => {
  return (
    <Button
      borderRadius="2xl"
      borderColor={"blue.900"}
      _hover={{
        bg: "blue.900",
        color: "blue.100",
      }}
      bg={"blue.100"}
      color={"blue.900"}
      size={props.size}
      onClick={() => props.onClick()}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
