import type { TimeEntry } from '../types';
import TimeEntryItem from './TimeEntryItem';

interface Props {
  entries: TimeEntry[];
  onDelete: (id: string) => void;
  onEdit: (id: string, updated: Omit<TimeEntry, 'id'>) => void;
}

function TimeEntryList({ entries, onDelete, onEdit }: Props) {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <ul>
      {entries.map(entry => (
        <TimeEntryItem
          key={entry.id}
          entry={entry}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TimeEntryList;