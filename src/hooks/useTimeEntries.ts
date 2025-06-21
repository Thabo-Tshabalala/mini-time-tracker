import { useState } from 'react';
import type { TimeEntry } from '../types';

export function useTimeEntries() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (entry: Omit<TimeEntry, 'id'>) => {
    const newEntry: TimeEntry = { ...entry, id: crypto.randomUUID() };
    setEntries(prev => [...prev, newEntry]);
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const editEntry = (id: string, updated: Omit<TimeEntry, 'id'>) => {
    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, ...updated } : e))
    );
  };
  return { entries, addEntry, deleteEntry,editEntry };
}
