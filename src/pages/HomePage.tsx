import TimeEntryForm from '../components/TimeEntryForm.tsx';
import TimeEntryList from '../components/TimeEntryList.tsx';
import { useTimeEntries } from '../hooks/useTimeEntries.ts';
import { getTotalHours } from '../utils/getTotalHours.ts';

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