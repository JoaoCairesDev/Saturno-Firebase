import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';

import database from '../../config/firebaseconfig';

export default function NewTask({navigation}) {
  const [description, setDescription] = useState(null);

  function addTask() {
    database.collection('Tasks').add({
      description: description,
      status: false,
    });
    navigation.navigate('Task');
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.Input}
        placeholder="Ex: estudar JS"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}>
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
