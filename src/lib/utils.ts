import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind CSS class merger utility (prevents duplicate styles and allows clean overrides)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to format date in Indonesian format
export function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(d);
}

// Utility to format phone number to clean WhatsApp link or uniform string
export function formatWhatsAppUrl(phone: string, text: string) {
  // Clean phone number (remove non-digits, replace leading 0 with 62)
  let cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.startsWith("0")) {
    cleanPhone = "62" + cleanPhone.slice(1);
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
