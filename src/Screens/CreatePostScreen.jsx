import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadImg } from '../components/LoadImg';
import { InputText } from '../components/InputText';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const isButtonActive = title && location && image;
  const handlePublish = () => {
    if (isButtonActive) {
      console.log('Post published!');
      navigation.navigate('Posts');
      setImage(null);
      setTitle('');
      setLocation('');
    }
  };
  return (
    <View style={styles.container}>
      <LoadImg image={image} onImageLoad={setImage} />
      <InputText
        placeholder="Назва..."
        value={title}
        onChangeText={setTitle}
      />
      <InputText
        placeholder="Місцевість..."
        icon="map-pin"
        value={location}
        onChangeText={setLocation}
      />
      <Button
        title="Опубліковати"
        onPress={handlePublish}
        style={isButtonActive ? styles.activeButton : styles.inactiveButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 32,
  },
  activeButton: {
    backgroundColor: '#FF6C00',
  },
  inactiveButton: {
    backgroundColor: '#E0E0E0',
  },
});