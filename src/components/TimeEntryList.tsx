import type { TimeEntry } from '../types';

interface Props {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updated: Omit<TimeEntry, 'id'>) => void;
}

function TimeEntryList({ entries, }: Props) {
  if (entries.length === 0) return <p>No entries yet.</p>;


}

export default TimeEntryList;