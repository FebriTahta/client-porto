import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ...inputs: ClassValue[] adalah parameter yang dapat menerima beberapa nilai dari tipe ClassValue
export function cn(...inputs: ClassValue[]) { //cn adalah fungsi yang menggabungkan beberapa nilai dari tipe ClassValue
  return twMerge(clsx(inputs)) // twMerge adalah fungsi yang menggabungkan beberapa nilai dari tipe ClassValue
}
