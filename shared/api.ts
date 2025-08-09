/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form data type
 */
export interface ContactFormData {
  fullname: string;
  email: string;
  message: string;
}

/**
 * Email API response type
 */
export interface EmailResponse {
  success: boolean;
  message: string;
  errors?: string[];
}
