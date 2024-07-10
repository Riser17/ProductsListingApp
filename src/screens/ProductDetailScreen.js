import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      {location && (
        <MapView
          style={{width: '100%', height: 200}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={location} />
        </MapView>
      )}
    </View>
  );
};

export default ProductDetailScreen;
