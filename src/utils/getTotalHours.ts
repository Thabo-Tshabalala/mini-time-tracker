import type { TimeEntry } from '../types';

export function getTotalHours(entries: TimeEntry[]): number {
  return entries.reduce((sum, entry) => sum + entry.hours, 0);
}