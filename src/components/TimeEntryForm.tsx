import { useState } from "react";
import { isValidTaskName } from "../utils/validateTimeEntry";

interface Props {
  onAdd: (entry: { taskName: string; hours: number }) => void;
}

function TimeEntryForm({ onAdd }: Props) {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState("");
 const [error, setError] = useState<string | null>(null);

  
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const parsed = parseFloat(hours);

  if (!isValidTaskName(taskName)) {
    setError("Task name is required.");
    return;
  }

  if (isNaN(parsed) || parsed <= 0) {
    setError("Please enter valid hours.");
    return;
  }

  onAdd({ taskName: taskName.trim(), hours: parsed });
  setTaskName("");
  setHours("");
  setError(null);
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hours worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        min="0"
        step="0.01"
      />
      <button type="submit">Add Entry</button>
       {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TimeEntryForm;
