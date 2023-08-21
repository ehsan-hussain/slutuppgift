import { StyleSheet, StatusBar } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', 
    marginBottom: 20, 
  },

  carImage: {
    width: 310,
    height: 150,
    marginRight: 16,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2, 
  },
  modelText: {
    fontSize: 16,
    marginBottom: 2,
    color: '#444', 
  },
  mileageText: {
    fontSize: 14, 
    color: '#666',
    marginBottom: 5,
  },
fuelTypeText: {
    fontSize: 14, 
    color: '#666',
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleText: {
     fontSize: 16, 
     fontWeight: 'bold', color:'green', marginBottom: 16, textAlign: 'center' 
  },  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  }, buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center', 
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }, 
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

 editingContainer: {
    backgroundColor: '#f0f0f0', 
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  editingTextInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  editingButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },



});