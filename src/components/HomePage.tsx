import TimeEntryForm from './TimeEntryForm.tsx';
import TimeEntryList from './TimeEntryList';
import { useTimeEntries } from '../hooks/useTimeEntries';
import { getTotalHours } from '../utils/getTotalHours';

function HomePage() {
  const { entries, addEntry, deleteEntry, editEntry } = useTimeEntries();
  const totalHours = getTotalHours(entries);
  const totalEntries = entries.length;

  const entriesText = totalEntries === 1 ? "1 entry" : `${totalEntries} entries`;

  return (
    <main>
      <h1>Mini Time Tracker</h1>
      <h2>Total Hours tracked: {totalHours.toFixed(1)}</h2>
      
      {totalEntries > 0 && (
        entriesText
      )}
      
      <TimeEntryForm onAdd={addEntry} />
      
      <TimeEntryList
        entries={entries}
        onDelete={deleteEntry}
        onEdit={editEntry}
      />
    </main>
  );
}
export default HomePage;