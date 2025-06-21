import { useState } from 'react';
import type { TimeEntry } from '../types';
import './TimeEntryItem.css';

interface Props {
  entry: TimeEntry;
  onDelete: (id: string) => void;
  onEdit: (id: string, updated: Omit<TimeEntry, 'id'>) => void;
}

function formatHoursToHrsMins(decimalHours: number): string {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);
  return `${hours}h ${minutes}m`;
}

function TimeEntryItem({ entry, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(entry.taskName);
  const [hours, setHours] = useState(entry.hours.toFixed(2));

  const handleSave = () => {
    const parsedHours = parseFloat(hours);
    if (taskName.trim() && !isNaN(parsedHours) && parsedHours > 0) {
      onEdit(entry.id, { taskName: taskName.trim(), hours: parsedHours });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTaskName(entry.taskName);
    setHours(entry.hours.toFixed(2));
  };

  return (
    <li className="time-entry-item">
      {isEditing ? (
        <>
          <input
            type="text"
            className="entry-input"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
          <input
            type="number"
            className="entry-input"
            step="0.01"
            min={0}
            value={hours}
            onChange={e => setHours(e.target.value)}
          />
          <div className="entry-buttons">
            <button onClick={handleSave} className="entry-button save">Save</button>
            <button onClick={handleCancel} className="entry-button cancel">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="entry-text">
            <strong>Task:</strong> {entry.taskName} &nbsp; | &nbsp;
            {formatHoursToHrsMins(entry.hours)}
          </div>
          <div className="entry-buttons">
            <button onClick={() => setIsEditing(true)} className="entry-button edit">Edit</button>
            <button onClick={() => onDelete(entry.id)} className="entry-button delete">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TimeEntryItem;
