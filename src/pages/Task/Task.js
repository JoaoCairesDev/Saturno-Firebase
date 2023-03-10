import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';

import database from '../../config/firebaseconfig';

export default function Task({navigation}) {
  const [Task, setTask] = useState([]);

  function deleteTask(id) {
    database.collection('Tasks').doc(id).delete();
  }

  useEffect(() => {
    database.collection('Tasks').onSnapshot(query => {
      const list = [];
      query.forEach(doc => {
        list.push({...doc.data(), id: doc.id});
      });
      setTask(list);
    });
  }, []);

  return (
    <View style={styles.Container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Task}
        renderItem={({item}) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}>
                <Text style={styles.DeleteX}>X</Text>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate('Details', {
                    id: item.id,
                    description: item.description,
                  })
                }>
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('NewTask')}>
        <Text style={styles.iconButtons}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
