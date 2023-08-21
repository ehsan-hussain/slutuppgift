import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import { useIsFocused } from '@react-navigation/native';



const DisplayPage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedCar, setEditedCar] = useState({});
  const isFocused = useIsFocused(); 
  const [isDataSaved, setIsDataSaved] = useState(true);




  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [isFocused]);

  const onEditPressHandler = (index, car) => {
    setEditingIndex(index);
    setEditedCar({ ...car });
  };

  const onSavePressHandler = async (index) => {
    try {
      const updatedCarData = { ...editedCar };
  
      if (editedCar.image !== data[index].image) {
        updatedCarData.image = editedCar.image;
      }
  
      const response = await fetch(`http://localhost:3000/cars/${editedCar._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCarData),
      });
  
      if (!response.ok) {
        console.error('Error updating car data');
        return;
      }
  
      
      const updatedDataResponse = await fetch('http://localhost:3000/cars');
      const updatedData = await updatedDataResponse.json();
      setData(updatedData);
  
      
      setEditingIndex(null);
      setEditedCar({});
    } catch (error) {
      console.error('Error updating car data:', error);
    }
  };

  const onDeletePressHandler = async (carId) => {
    try {
      const response = await fetch(`http://localhost:3000/cars/${carId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
      
        const newData = data.filter(item => item._id !== carId);
        setData(newData);
      } else {
        console.error('Error deleting car data');
      }
    } catch (error) {
      console.error('Error deleting car data:', error);
    }
  }};

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.titleText}>Annonser</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNew')}>
        <Text style={styles.addButtonText}>Lägg till</Text>
      </TouchableOpacity>
      <FlatList
 key={isDataSaved ? 'dataSaved' : 'dataNotSaved'}
 data={data}

  renderItem={({ item, index }) => (  
    <View style={[styles.item, editingIndex === index && styles.editingContainer]}>
      {editingIndex === index ? (
      <View>
  <Image source={{ uri: editedCar.image }} style={styles.carImage} />
  <TextInput
    style={styles.editingTextInput}
    placeholder="Image URL"
    value={editedCar.image}
    onChangeText={text => setEditedCar({ ...editedCar, image: text })}
  />
  <TextInput
    style={styles.editingTextInput}
    value={editedCar.brand}
    onChangeText={text => setEditedCar({ ...editedCar, brand: text })}
  />
  <TextInput
    style={styles.editingTextInput}
    value={editedCar.model}
    onChangeText={text => setEditedCar({ ...editedCar, model: text })}
  />
  <TextInput
    style={styles.editingTextInput}
    value={editedCar.mileage}
    onChangeText={text => setEditedCar({ ...editedCar, mileage: text })}
  />
  <TextInput
    style={styles.editingTextInput}
    value={editedCar.fuelType}
    onChangeText={text => setEditedCar({ ...editedCar, fuelType: text })}
  />
  <View style={styles.editingButtonsContainer}>
    <Button title="Save" onPress={() => onSavePressHandler(index)} />
    <Button title="Delete" onPress={() => onDeletePressHandler(item._id)} />
  </View>
</View> 
