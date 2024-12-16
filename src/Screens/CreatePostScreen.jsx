import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { LoadImg } from '../components/LoadImg';
import { InputText } from '../components/InputText';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export const CreatePostScreen = () => {
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  // const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [place, setPlace] = useState('');
  const navigation = useNavigation();
  
  const isButtonActive = name && location && preview;
  
  const handlePublish = async () => {
    if (isButtonActive) {
      let locationData = null;
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          locationData = await Location.getCurrentPositionAsync({});
        } else {
          setErrorMsg('Permission to access location was denied');
        }
      } catch (error) {
        console.log('Error fetching location:', error);
      }

      console.log('Post published with location:', locationData);
      navigation.navigate('Posts');
      setPreview(null);
      setName('');
      setLocation(locationData);
      setPlace('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <LoadImg preview={preview} setPreview={setPreview} />
        <Text style={styles.text}>
          {preview ? 'Редагувати фото' : 'Завантажте фото'}
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
          <InputText
            placeholder="Назва..."
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <InputText
            placeholder="Місцевість..."
            icon="map-pin"
            value={place}
            onChangeText={(text) => setPlace(text)}
          />
          <Button
            title="Опубліковати"
            onPress={handlePublish}
            style={isButtonActive ? styles.activeButton : styles.inactiveButton}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
  text: {
    marginTop: -24,
    color: '#BDBDBD',
    fontFamily: 'rb-regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  activeButton: {
    marginTop: 32,
    backgroundColor: '#FF6C00',
  },
  inactiveButton: {
    marginTop: 32,
    backgroundColor: '#E0E0E0',
  },
});
