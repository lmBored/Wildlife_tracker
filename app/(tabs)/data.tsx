import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataScreen = () => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('observations');
        if (data) {
          const parsedData = JSON.parse(data);
          console.log('Fetched data:', parsedData); // Log the fetched data
          setObservations(parsedData);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setObservations([]); // Clear the state as well
      Alert.alert('Success', 'All storage has been cleared.');
    } catch (error) {
      console.error('Error clearing storage', error);
      Alert.alert('Error', 'Failed to clear storage.');
    }
  };

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
      <TouchableOpacity style={styles.clearButton} onPress={clearStorage}>
        <Text style={styles.clearButtonText}>Clear All Data</Text>
      </TouchableOpacity>

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
    paddingTop: 50,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
    color: '#fff',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#333',
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 100,
  },
});

export default DataScreen;