import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddNew = ({ navigation }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [image, setImage] = useState('');

  const handleAddCar = async () => {
    const newCarData = {
      brand,
      model,
      mileage,
      fuelType,
      image,
    };

    try {
      const response = await fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCarData),
      });

      if (response.ok) {
        navigation.goBack();
      } else {
        console.error('Error adding new car');
      }
    } catch (error) {
      console.error('Error adding new car:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Add New Car</Text>
      <TextInput
        style={[styles.input, styles.colorfulInput]}
        placeholder="Brand"
        value={brand}
        onChangeText={(text) => setBrand(text)}
      />
      <TextInput
        style={[styles.input, styles.colorfulInput]}
        placeholder="Model"
        value={model}
        onChangeText={(text) => setModel(text)}
      />
      <TextInput
        style={[styles.input, styles.colorfulInput]}
        placeholder="Mileage"
        value={mileage}
        onChangeText={(text) => setMileage(text)}
      />
      <TextInput
        style={[styles.input, styles.colorfulInput]}
        placeholder="Fuel Type"
        value={fuelType}
        onChangeText={(text) => setFuelType(text)}
      />
      <TextInput
        style={[styles.input, styles.colorfulInput]}
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <Button title="Add Car" onPress={handleAddCar} color="#e74c3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', 
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  colorfulInput: {
    borderColor: '#3498db', 
  },
});

export default AddNew;
