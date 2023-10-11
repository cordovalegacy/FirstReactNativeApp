import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/computer.jpg')}
        style={styles.computerImage}
      />
      <Text style={styles.title}>Explore the World of Computers</Text>
      <Text style={styles.subtitle}>Unleashing Infinite Possibilities</Text>
      <Text style={styles.description}>
        Welcome to our world of innovation and technology. Dive into the
        fascinating realm of computers, where creativity meets functionality.
        Discover the latest advancements, learn about programming, and explore
        the limitless opportunities that the digital age offers.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  computerImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
