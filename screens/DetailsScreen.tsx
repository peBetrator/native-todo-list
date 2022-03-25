import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTasks } from '../hooks';
import { StackParamList } from './types';

export default function DetailsScreen({
  route: {
    params: { taskId },
  },
}: NativeStackScreenProps<StackParamList, 'Details'>): React.ReactElement {
  const { taskItems, editTask } = useTasks();

  const [isEdit, setIsEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState(taskItems[taskId]);

  const handleEditTask = () => {
    if (isEdit) {
      editTask(taskId, currentTask);
    }
    setIsEdit(!isEdit);
  };

  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.switchWrapper}>
        <TouchableOpacity style={styles.switchButton} onPress={handleEditTask}>
          <Text style={styles.switchLabel}>
            {isEdit ? 'Save Details' : 'Edit Details'}
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.taskInput}
        value={currentTask}
        onChangeText={text => setCurrentTask(text)}
        editable={isEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  switchWrapper: {
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  switchButton: {
    backgroundColor: '#1b81f5',
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  switchLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
});
