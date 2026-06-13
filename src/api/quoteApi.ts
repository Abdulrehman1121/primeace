import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/primeace/backend";

export interface QuoteData {
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  service_needed: string;
  project_description: string;
  budget: string;
  timeline: string;
  preferred_contact_method: string;
  file?: File;
}

export interface QuoteResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
  };
}

/**
 * Packs form fields and binary file briefs into a multipart FormData request and sends it to the PHP API.
 */
export async function submitQuoteForm(data: QuoteData): Promise<QuoteResponse> {
  const formData = new FormData();

  // Populate FormData
  formData.append("full_name", data.full_name);
  formData.append("email", data.email);
  if (data.phone) formData.append("phone", data.phone);
  if (data.company) formData.append("company", data.company);
  formData.append("service_needed", data.service_needed);
  formData.append("project_description", data.project_description);
  formData.append("budget", data.budget);
  formData.append("timeline", data.timeline);
  formData.append("preferred_contact_method", data.preferred_contact_method);

  // Append brief file attachment if selected
  if (data.file) {
    formData.append("file", data.file);
  }

  try {
    const response = await axios.post<QuoteResponse>(`${API_BASE}/quote.php`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Quote Request Submission Error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Could not reach the quotation server. Verify your PHP server configuration.",
    };
  }
}
