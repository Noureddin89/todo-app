import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTaskScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const { addTask } = useContext(TaskContext);

  const handleAdd = () => {
    addTask({ title, dueDate });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Pick Due Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          mode="date"
          value={dueDate || new Date()}
          onChange={(e, date) => {
            setShowPicker(false);
            if (date) setDueDate(date);
          }}
        />
      )}
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    fontSize: 18,
  },
});