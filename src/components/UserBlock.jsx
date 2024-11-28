import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const UserBlock = ({ name, email, img }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/images/userphoto.jpg')}
      ></Image>
      <View style={styles.containerAvatarText}>
        <Text style={styles.nameText}>Natali Romanova</Text>
        <Text style={styles.emailText}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  containerAvatarText: {
    justifyContent: 'center',
  },
  nameText: {
    color: '#212121',
    fontFamily: 'rb-bold',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  emailText: {
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'rb-regular',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 13,
  },
});
