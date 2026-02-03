import api from "./axios";

// Get all devices
export const getAllDevices = async () => {
  try {
    const response = await api.get("/devices");
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};
