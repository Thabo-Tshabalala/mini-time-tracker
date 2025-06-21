import { useState } from "react";
import { isValidTaskName } from "../utils/validateTimeEntry";
import { useTimer } from "../hooks/useTimer";
import "./TimeEntryForm.css";

interface Props {
  onAdd: (entry: { taskName: string; hours: number }) => void;
}

function TimeEntryForm({ onAdd }: Props) {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const { seconds, start, stop, getHours,reset } = useTimer();

  const formatTime = (s: number): string => {
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  const toggleTimer = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
    setIsRunning(!isRunning);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const manualHours = parseFloat(hours.trim());
    const timerHours = getHours();
    const totalHours =
      !isNaN(manualHours) && manualHours > 0 ? manualHours : timerHours;

    if (!isValidTaskName(taskName)) {
      setError("Task name is required.");
      return;
    }

    if (totalHours <= 0) {
      setError("Enter valid hours or use the timer.");
      return;
    }

    onAdd({ taskName: taskName.trim(), hours: totalHours });
    setTaskName("");
    setHours("");
    setError(null);
    setIsRunning(false);
    reset();
  };

  return (
    <form className="time-entry-form" onSubmit={handleSubmit}>
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

      <button type="submit" className="button-submit">
        Add Entry
      </button>

      <p className="timer-display">Timer: {formatTime(seconds)}</p>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TimeEntryForm;