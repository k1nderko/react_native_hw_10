import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { PostsScreen } from '../Screens/PostsScreen';
import { CreatePostScreen } from '../Screens/CreatePostScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { CreatePostBtn } from '../components/CreatePostBtn';
import { TrashBtn } from '../components/TrashBtn';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const state = useNavigationState((navState) => {
    const tabState =
      navState?.routes.find((route) => route.name === 'BottomTabNavigator')
        ?.state || navState;
    return tabState;
  });
  const isCreatePostScreen =
    state?.routes[state.index]?.name === 'createPosts';
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarLabel: '',
        tabBarStyle: {
          height: 83,
          backgroundColor: '#FFFFFF',
          paddingTop: isCreatePostScreen ? 20 : 12,
          paddingHorizontal: isCreatePostScreen ? 0 : 72,
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Публікації',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle: {
            color: '#212121',
            fontFamily: 'rb-medium',
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            />
          ),
          tabBarIcon: ({ color, size }) =>
            !isCreatePostScreen && (
              <Ionicons
                name="grid-outline"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            ),
        })}
      />
      <Tab.Screen
        name="createPosts"
        component={CreatePostScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Створити публікацію',
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color={'rgba(33, 33, 33, 0.8)'}
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ color, size }) =>
            isCreatePostScreen ? <TrashBtn /> : <CreatePostBtn />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
            !isCreatePostScreen && (
              <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
