import { useState } from "react";

interface Props {
  onAdd: (entry: { taskName: string; hours: number }) => void;
}

function TimeEntryForm({ onAdd }: Props) {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ taskName, hours: parseFloat(hours) });
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
    </form>
  );
}

export default TimeEntryForm;
