import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTasks } from '../hooks';

export default function AddTaskInput(): React.ReactElement {
  const [task, setTask] = useState('');

  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      addTask(task);
      setTask('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    backgroundColor: '#e8eaed',
    width: '100%',
    position: 'absolute',
    paddingBottom: 100,
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    textAlign: 'center',
  },
});
