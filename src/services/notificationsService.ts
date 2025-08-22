import axios from "axios";

export const fetchNotifications = async () => {
  const response = await axios.get("/api/notifications");
  return response.data.notifications;
};
