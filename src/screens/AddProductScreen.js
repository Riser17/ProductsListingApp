import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const AddProductScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const addProduct = () => {
    const product = {title, price, description, image, category};
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => navigation.navigate('ProductDetail', {product: data}));
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
};

export default AddProductScreen;
