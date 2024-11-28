import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign } from "@expo/vector-icons";
import { Card } from '../components/Card';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState(null);
  
  const toggleAvatar = () => {
    console.log('Toggling avatar:', avatar);
    setAvatar(avatar ? null : require('../assets/images/userphoto.jpg'));
  };
  
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Feather
          name="log-out"
          size={24}
          color="#BDBDBD"
          style={styles.logout}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Image source={avatar} style={styles.avatar} />
          ) : (
            <View style={styles.avatar} />
          )}
          <TouchableOpacity
            onPress={toggleAvatar}
            style={styles.addAvatarButton}
          >
            {avatar ? (
              <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
            ) : (
              <AntDesign name="pluscircleo"  size={25} color="#FF6C00" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Natali Romanova</Text>
        <Card showLikes commentsCount={8} likesCount={1} />
        <Card showLikes commentsCount={15} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: '80%',
    paddingTop: 22,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    gap: 32,
  },
  logout: {
    alignSelf: 'flex-end',
  },
  avatarContainer: {
    position: 'absolute',
    top: -60,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  addAvatarButton: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    backgroundColor: '#FFF',
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 14,
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'rb-medium',
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 36,
    letterSpacing: 0.01,
  },
});