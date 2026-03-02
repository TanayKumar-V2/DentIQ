import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const style = gender === "FEMALE" ? "female" : "male";
  const seed = encodeURIComponent(name.trim().toLowerCase() || "doctor");
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}&gender=${style}`;
}

export function generateAvatarFallback(name: string) {
  const seed = encodeURIComponent(name.trim() || "Doctor");
  return `https://api.dicebear.com/9.x/initials/svg?seed=${seed}`;
}

export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};
