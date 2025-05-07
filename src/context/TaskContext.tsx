import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Task } from '../models/Task';
import uuid from 'react-native-uuid';
import { saveTasksToStorage } from '../utils/storage';

interface TaskContextProps {
  tasks: Task[];
  addTask: (data: { title: string; dueDate?: Date | null }) => void;
  completeTask: (id: string) => void;
  cancelTask: (id: string, reason: string) => void;
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children, initialTasks }: { children: ReactNode; initialTasks: Task[] }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = ({ title, dueDate }: { title: string; dueDate?: Date | null }) => {
    const newTask: Task = {
      id: uuid.v4().toString(),
      title,
      dueDate: dueDate || null,
      status: 'pending',
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const completeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: 'completed' } : task))
    );
  };

  const cancelTask = (id: string, reason: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: 'cancelled', cancelReason: reason } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, cancelTask }}>
      {children}
    </TaskContext.Provider>
  );
};
