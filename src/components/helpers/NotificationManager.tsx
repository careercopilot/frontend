import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

class NotificationManager {
  showSuccess = (title: string, message?: string | null) => {
    notifications.show({
      title: title || "Request successful",
      message: message,
      withCloseButton: true,
      icon: <IconCheck size="1rem" />,
      autoClose: 2000,
    });
  };
}

const notificationManager = new NotificationManager();
export default notificationManager;
