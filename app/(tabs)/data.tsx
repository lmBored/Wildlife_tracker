import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataScreen = () => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('observations');
        if (data) {
          setObservations(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.animalSpecies}</Text>
      <Text style={styles.cell}>{item.numberOfAnimals}</Text>
      <Text style={styles.cell}>{item.gender}</Text>
      <Text style={styles.cell}>{item.age}</Text>
      <Text style={styles.cell}>{item.health}</Text>
      <Text style={styles.cell}>{item.location}</Text>
      <Text style={styles.cell}>{item.dateTime}</Text>
      <Text style={styles.cell}>{item.username}</Text>
      <Text style={styles.cell}>{item.remarks}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Observations Data</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>Species</Text>
          <Text style={styles.headerCell}>Number</Text>
          <Text style={styles.headerCell}>Gender</Text>
          <Text style={styles.headerCell}>Age</Text>
          <Text style={styles.headerCell}>Health</Text>
          <Text style={styles.headerCell}>Location</Text>
          <Text style={styles.headerCell}>Date & Time</Text>
          <Text style={styles.headerCell}>Username</Text>
          <Text style={styles.headerCell}>Remarks</Text>
        </View>
        <FlatList
          data={observations}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
});

export default DataScreen;
