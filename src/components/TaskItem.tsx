import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../models/Task';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

export default function TaskItem({ task }: { task: Task }) {
  const { completeTask, cancelTask } = useContext(TaskContext);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const handleCancel = () => {
    cancelTask(task.id, cancelReason);
    setDialogVisible(false);
    setCancelReason('');
  };

  return (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.title}>{task.title}</Text>
        {task.dueDate && <Text style={styles.date}>Due: {new Date(task.dueDate).toLocaleDateString()}</Text>}
        {task.status === 'cancelled' && <Text style={styles.reason}>Reason: {task.cancelReason}</Text>}
      </View>
      {task.status === 'pending' && (
        <View style={styles.actions}>
          <Button mode="contained" onPress={() => completeTask(task.id)} style={styles.actionBtn}>Done</Button>
          <Button mode="outlined" onPress={() => setDialogVisible(true)} style={styles.actionBtn}>Cancel</Button>
        </View>
      )}

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Cancel Task</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Reason for cancellation"
              value={cancelReason}
              onChangeText={setCancelReason}
              multiline
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Back</Button>
            <Button onPress={handleCancel} disabled={!cancelReason.trim()}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  info: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  reason: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
  },
  actionBtn: {
    marginRight: 8,
  },
});