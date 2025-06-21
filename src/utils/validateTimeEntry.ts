export function isValidTaskName(name: string): boolean {
  return name.trim().length > 0;
}

export function isValidHours(hours: number): boolean {
  return hours > 0;
}