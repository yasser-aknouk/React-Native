import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import FilmItem from './src/components/FilmItem';
import FilmList from './src/components/FilmList';

export default function App() {
  return (
    <View className="justify-center h-screen bg-red-700">
      <FilmList/>
    </View>
  );
}
