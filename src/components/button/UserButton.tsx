import { ActionIcon } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function UserButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("access_token");

    if (token) {
      navigate("/user");
    } else {
      navigate("/auth");
    }
  };

  return (
    <ActionIcon onClick={handleClick}>
      <IconUser />
    </ActionIcon>
  );
}