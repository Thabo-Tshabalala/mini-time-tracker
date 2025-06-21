import { useState } from "react";
import { isValidTaskName } from "../utils/validateTimeEntry";
import { useTimer } from "../hooks/useTimer";

interface Props {
  onAdd: (entry: { taskName: string; hours: number }) => void;
}

function TimeEntryForm({ onAdd }: Props) {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState("");
 const [error, setError] = useState<string | null>(null);
 const [isRunning, setIsRunning] = useState(false);
 const { seconds, start, stop } = useTimer();

  const toggleTimer = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
    setIsRunning(!isRunning);
  };

const formatTime = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}h ${m}m ${sec}s`;
};

  
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
          <button
        type="button"
        onClick={toggleTimer}
        className={isRunning ? "button-stop" : "button-start"}
      >
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>

     <button type="submit" className="button-submit">Add Entry</button>

      <p className="timer-display">Timer: {formatTime(seconds)}</p>
       {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TimeEntryForm;
