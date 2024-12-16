// import React, { useEffect, useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

// export const LoadImg = ({ image, onImageLoad }) => {
//     const [internalImage, setInternalImage] = useState(image);
//   useEffect(() => {
//     setInternalImage(image);
//   }, [image]);
//   const onLoadImg = async () => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       alert('Permission to access gallery is required!');
//       return;
//     }
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     if (!result.canceled) {
//       const imageUri = result.assets[0].uri;
//       setInternalImage(imageUri);
//       onImageLoad(imageUri);
//     }
//   };
//   return (
//     <View>
//       <TouchableOpacity onPress={onLoadImg} style={styles.imgContainer}>
//         {image ? (
//           <Image source={{ uri: image }} style={styles.img} />
//         ) : (
//           <FontAwesome5 name="camera" size={24} color="black" />
//         )}
//       </TouchableOpacity>
//       <Text style={styles.text}>
//         {image ? 'Редагувати фото' : 'Завантажте фото'}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   img: {
//     width: '100%',
//     height: 240,
//     borderRadius: 8,
//     backgroundColor: '#F6F6F6',
//     resizeMode: 'cover',
//   },
//   imgContainer: {
//     width: '100%',
//     height: 240,
//     borderRadius: 8,
//     backgroundColor: '#F6F6F6',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     marginTop: 8,
//     color: '#BDBDBD',
//     fontFamily: 'rb-regular',
//     fontSize: 16,
//     fontStyle: 'normal',
//     fontWeight: '400',
//     lineHeight: 20,
//   },
// });
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { AntDesign } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

export const LoadImg = ({ preview, setPreview }) => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }

    if (!mediaPermission || !mediaPermission.granted) {
      requestMediaPermission();
    }
  }, [permission, mediaPermission]);

  if (!permission || !mediaPermission) {
    return <View />;
  }

  const takePicture = async () => {
    if (preview) {
      setPreview(null);
    }

    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.saveToLibraryAsync(uri);
      setPreview(uri);
    }
  };

  return (
    <TouchableOpacity onPress={takePicture} style={styles.downloadPhotoBtn}>
      {preview ? (
        <View style={styles.preview}>
          <View style={styles.containerCameraIcon}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </View>
          <Image
            source={{ uri: preview }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
            }}
          />
        </View>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={setCameraRef}>
          <View style={styles.containerCameraIcon}>
            <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
          </View>
        </CameraView>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  downloadPhotoBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    marginBottom: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    overflow: 'hidden',
  },
  preview: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  containerCameraIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

