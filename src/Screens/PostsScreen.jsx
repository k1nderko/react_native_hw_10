import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserBlock } from '../components/UserBlock';
import { Card } from '../components/Card';
import { useNavigation } from '@react-navigation/native';

export const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <UserBlock />
      <Card showLikes={false} commentsCount={0} />
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
});