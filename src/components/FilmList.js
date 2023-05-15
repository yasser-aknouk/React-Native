import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { fetchFilm, fetchImage } from "../API/TmdbApi";
import FilmItem from "./FilmItem";

export default function FilmList() {
  const [films, setFilms] = useState([]);
  

  const getFilm = () => {
    fetchFilm("The matrix")
    .then((data) => {
      setFilms(data.results);
    })
    .catch((error) => console.log(error));
  }


  useEffect(() => {
    getFilm();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <FilmItem
        title={item.title}
        date={item.release_date}
        overview={item.overview}
        image={item.backdrop_path}
      />
    );
    
  };
  return (
    <View className="flex-1 bg-red-950">
      {films.length === 0 ? (
        console.log("Loading")
      ) : (
        
        <FlatList
        
          contentInsetBottom={0}
          data={films}
          keyExtractor={(film) => film.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View className="h-1 bg-gray-600" />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      )}
    </View>
  );
}
