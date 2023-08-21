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
