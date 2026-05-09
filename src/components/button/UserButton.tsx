import { ActionIcon, Menu } from "@mantine/core";
import { IconUser, IconLogout } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service";

export default function UserButton() {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  const isLoggedIn = !!token;

  const handleProfile = () => {
    navigate("/user");
  };

  const handleAuth = () => {
    navigate("/auth");
  };
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("access_token");
      navigate("/home");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <Menu shadow="md" width={180}>
      <Menu.Target>
        <ActionIcon variant="light">
          <IconUser />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {isLoggedIn ? (
          <>
            <Menu.Item onClick={handleProfile}>Profile</Menu.Item>

            <Menu.Item
              color="red"
              leftSection={<IconLogout size={16} />}
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </>
        ) : (
          <Menu.Item onClick={handleAuth}>Login</Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
