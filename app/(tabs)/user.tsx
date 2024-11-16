import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const UserScreen = () => {
  const { control, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    address: false,
  });

  const onSubmit = data => {
    console.log(data);
    setIsEditing({
      username: false,
      email: false,
      phoneNumber: false,
      address: false,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square image for profile
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Use first asset's URI
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Profile Picture</Text>
        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <Text style={styles.imagePlaceholder}>Select Image</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TouchableOpacity onPress={() => setIsEditing({ ...isEditing, username: !isEditing.username })}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        {isEditing.username ? (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="username"
              />
            )}
            name="username"
            defaultValue=""
          />
        ) : (
          <Text style={styles.placeholderText}>username</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TouchableOpacity onPress={() => setIsEditing({ ...isEditing, email: !isEditing.email })}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        {isEditing.email ? (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="email@domain"
                keyboardType="email-address"
              />
            )}
            name="email"
            defaultValue=""
          />
        ) : (
          <Text style={styles.placeholderText}>email@domain</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TouchableOpacity onPress={() => setIsEditing({ ...isEditing, phoneNumber: !isEditing.phoneNumber })}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        {isEditing.phoneNumber ? (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="+31 xxx xxx xxx"
                keyboardType="phone-pad"
              />
            )}
            name="phoneNumber"
            defaultValue=""
          />
        ) : (
          <Text style={styles.placeholderText}>+31 xxx xxx xxx</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TouchableOpacity onPress={() => setIsEditing({ ...isEditing, address: !isEditing.address })}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        {isEditing.address ? (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your address"
              />
            )}
            name="address"
            defaultValue=""
          />
        ) : (
          <Text style={styles.placeholderText}>Enter your address</Text>
        )}
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
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    overflow: 'hidden',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    color: '#aaa',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 50,
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default UserScreen;
