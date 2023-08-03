import axios from "axios";

const API_URL = import.meta.env.VITE_API_AUTH_URL;

export type LOGIN = {
  email: string;
  password: string;
};

  export const LoginDisrupter = async (data: LOGIN) => {
    try {
      const response = await axios.post(
        `${API_URL}/signIn`, data
      );
      return response.data;
     } catch (error: any) {
      return error;
     }
  };
