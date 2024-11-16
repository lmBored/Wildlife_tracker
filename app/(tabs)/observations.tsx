import React from 'react';
import { View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const ObservationsScreen = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <ScrollView>
      <View>
        <Text>Animal species</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="Fallow deer (damhert)" value="fallow_deer" />
              <Picker.Item label="Red deer (edelhert)" value="red_deer" />
              <Picker.Item label="Roe deer (ree)" value="roe_deer" />
              <Picker.Item label="Wild boar" value="wild_boar" />
              <Picker.Item label="Scottish Highlander" value="scottish_highlander" />
              <Picker.Item label="Wolf" value="wolf" />
            </Picker>
          )}
          name="animalSpecies"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Number of animals</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="numberOfAnimals"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Gender</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Unknown" value="unknown" />
            </Picker>
          )}
          name="gender"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Age</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="Young" value="young" />
              <Picker.Item label="Adolescent" value="adolescent" />
              <Picker.Item label="Adult" value="adult" />
              <Picker.Item label="Unknown" value="unknown" />
            </Picker>
          )}
          name="age"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Health</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="Unknown" value="unknown" />
            </Picker>
          )}
          name="health"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Location</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
            />
          )}
          name="location"
          defaultValue=""
        />
      </View>

      <View>
        <Text>Date and time</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
            />
          )}
          name="dateTime"
          defaultValue={new Date().toISOString()}
        />
      </View>

      <View>
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
          defaultValue="auto-retrieved-username"
        />
      </View>

      <View>
        <Text>Remarks</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
            />
          )}
          name="remarks"
          defaultValue=""
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default ObservationsScreen;
