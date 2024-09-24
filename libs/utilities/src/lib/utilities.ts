import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const formatDate = (date: Date): string => {
  const timeToNow = Date.now() - date.getTime();
  if (timeToNow < 1000) {
    return 'just now';
  }
  if (timeToNow < 60000) {
    return `${Math.floor(timeToNow / 1000)} seconds ago`;
  }
  if (timeToNow < 3600000) {
    return `${Math.floor(timeToNow / 60000)} minutes ago`;
  }
  if (timeToNow < 86400000) {
    return `${Math.floor(timeToNow / 3600000)} hours ago`;
  }
  const maxNbOfDays = 7;
  if (timeToNow < 86400000 * maxNbOfDays) {
    return `${Math.floor(timeToNow / 86400000)} days ago`;
  }
  return date.toDateString();
};

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
export const generateRandomString = (length = 10): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('');
};
