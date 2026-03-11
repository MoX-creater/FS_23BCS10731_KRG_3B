import React, { useState } from "react";
import useForm from "../hooks/useForm";
import "./TaskManager.css";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const form = useForm({ title: "", priority: "Low" });

    function submit(e) {
        e.preventDefault();
        if (!form.values.title) return alert("Enter title");

        setTasks([...tasks, { id: Date.now(), ...form.values }]);
        form.resetForm();
    }

    return (
        <div className="task-app">
            <h2>Task Tracker</h2>
            <form onSubmit={submit}>
                <input
                    name="title"
                    value={form.values.title}
                    onChange={form.handleChange}
                    placeholder="Task"
                />
                <select
                    name="priority"
                    value={form.values.priority}
                    onChange={form.handleChange}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button type="submit">Add</button>
            </form>

            <ul>
                {tasks.map(t => <li key={t.id}>{t.title} - {t.priority}</li>)}
            </ul>
        </div>
    );
}
