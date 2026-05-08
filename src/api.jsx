const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications() {

  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch notifications");
    }

    const data = await response.json();

    return data.notifications || [];

  } catch (error) {

    console.error(error);
    return [];
  }
}