import axios from "axios";

// Configurable endpoint base. Adjust in .env file as VITE_API_URL if hosted elsewhere
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/primeace/backend";

export interface ContactData {
  full_name: string;
  email: string;
  phone?: string;
  company_name?: string;
  project_type?: string;
  budget_range?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

/**
 * Sends a sanitized contact message to the PHP MySQL backend API.
 */
export async function submitContactForm(data: ContactData): Promise<ApiResponse> {
  try {
    const response = await axios.post<ApiResponse>(`${API_BASE}/contact.php`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Contact Form Submission Error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Could not connect to the contact server. Please ensure your backend PHP local server is running.",
    };
  }
}
