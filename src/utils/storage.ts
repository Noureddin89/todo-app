import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../models/Task';

const STORAGE_KEY = 'TASKS';

export const saveTasksToStorage = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to storage', error);
  }
};

export const loadTasksFromStorage = async (): Promise<Task[]> => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error('Error loading tasks from storage', error);
    return [];
  }
};