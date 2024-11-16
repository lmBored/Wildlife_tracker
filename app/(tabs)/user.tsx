import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const UserScreen = () => {
  const { control, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState(null);

  const onSubmit = data => {
    console.log(data);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Profile Picture</Text>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.imageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <Text>Select Image</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text>Username</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Phone Number</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
          name="phoneNumber"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Address</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
            />
          )}
          name="address"
          defaultValue=""
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <View style={styles.bottomSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding to the bottom
  },
  inputContainer: {
    marginBottom: 20,
  },
  bottomSpace: {
    height: 100, // Adjust the height as needed
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default UserScreen;
