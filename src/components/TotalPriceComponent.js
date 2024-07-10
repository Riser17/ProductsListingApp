import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const TotalPriceComponent = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const total = data.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
      });
  }, []);

  return (
    <View>
      <Text>Total Price: ${totalPrice}</Text>
    </View>
  );
};

export default TotalPriceComponent;
