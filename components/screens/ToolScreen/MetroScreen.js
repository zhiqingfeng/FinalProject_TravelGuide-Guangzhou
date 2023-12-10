import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function MetroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guangzhou Metro Map</Text>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={400}
        imageHeight={700}
        enableCenterFocusZoom={false} // Enable center focus zoom
        enableSwipeDown={true} // Enable swipe-down to close
      >
        <Image
          source={require('../../../assets/images/UsefulTool/GuangzhouMetro.png')}
          style={styles.metroMap}
          resizeMode="contain"
        />
      </ImageZoom>
      {/*<Text style={styles.description}>
        Here is the link to check more about Guangzhou Metro. Please visit:{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.travelchinaguide.com/cityguides/guangdong/guangzhou/subway/')}>
          https://www.travelchinaguide.com/cityguides/guangdong/guangzhou/subway/
        </Text>
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  metroMap: {
    width: 400,
    height: 700,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

// npm install react-native-image-pan-zoom
