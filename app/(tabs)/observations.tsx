import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ObservationsScreen = () => {
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = async data => {
    try {
      const existingData = await AsyncStorage.getItem('observations');
      const observations = existingData ? JSON.parse(existingData) : [];
      const newObservation = { id: Date.now().toString(), ...data };
      observations.push(newObservation);
      await AsyncStorage.setItem('observations', JSON.stringify(observations));
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setValue('location', `${location.coords.latitude}, ${location.coords.longitude}`); // Set the default value for location
    }

    getCurrentLocation();
  }, [setValue]);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `${location.coords.latitude}, ${location.coords.longitude}`;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wildlife Observation Form</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Animal species</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label="Fallow deer (damhert)" value="fallow_deer" />
                <Picker.Item label="Red deer (edelhert)" value="red_deer" />
                <Picker.Item label="Roe deer (ree)" value="roe_deer" />
                <Picker.Item label="Wild boar" value="wild_boar" />
                <Picker.Item label="Scottish Highlander" value="scottish_highlander" />
                <Picker.Item label="Wolf" value="wolf" />
              </Picker>
            </View>
          )}
          name="animalSpecies"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of animals</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              placeholder="Enter number"
            />
          )}
          name="numberOfAnimals"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Unknown" value="unknown" />
              </Picker>
            </View>
          )}
          name="gender"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label="Young" value="young" />
                <Picker.Item label="Adolescent" value="adolescent" />
                <Picker.Item label="Adult" value="adult" />
                <Picker.Item label="Unknown" value="unknown" />
              </Picker>
            </View>
          )}
          name="age"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Health</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.pickerContainer}>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="Unknown" value="unknown" />
              </Picker>
            </View>
          )}
          name="health"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Enter location"
            />
          )}
          name="location"
          defaultValue={text}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date and time</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Enter date and time"
            />
          )}
          name="dateTime"
          defaultValue={new Date().toISOString()}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Enter your username"
            />
          )}
          name="username"
          defaultValue="auto-retrieved-username"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Remarks</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.remarksInput]}
              onChangeText={onChange}
              value={value}
              placeholder="Enter any remarks"
              multiline={true}
            />
          )}
          name="remarks"
          defaultValue=""
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50, 
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  remarksInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 100,
  },
});

export default ObservationsScreen;