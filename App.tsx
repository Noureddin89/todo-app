import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { TaskProvider } from './src/context/TaskContext';
import { PaperProvider } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';
import { loadTasksFromStorage } from './src/utils/storage';
import { Task } from './src/models/Task';

export default function App() {
  const [initialTasks, setInitialTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const savedTasks = await loadTasksFromStorage();
        console.log('Loaded tasks:', savedTasks);
        setInitialTasks(savedTasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    })();
  }, []);

  if (initialTasks === null) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <NavigationContainer>
      <TaskProvider initialTasks={initialTasks}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </TaskProvider>
    </NavigationContainer>
  );
}