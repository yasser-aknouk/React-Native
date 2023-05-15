import React from "react";
import { Image, Text, View } from "react-native";

export default function FilmItem({ title, date, overview, image }) {
  const img_url = "https://image.tmdb.org/t/p";
  const size = "w500";
  const url = `${img_url}/${size}${image}`.toString();
  console.log(url);
  return (
    <View className="flex flex-row bg-gray-800">
      {image !== null ? (
        <Image
          className="basis-1/3 h-24  self-center  bg-gray-900 ml-1"
          source={{ uri: url }}
        ></Image>
      ) : (
        <Image className="basis-1/3 h-24 self-center bg-gray-900 ml-1" />
      )}

      <View className="flex-1">
        <View className=" flex-col p-4">
          <View className="flex flex-row bg-slate-600 flex-wrap  px-1 space-x-1 rounded-md">
            {/* Title  */}
            <Text className=" text-white flex-wrap flex-1">{title}</Text>
            {/* date */}
            <Text className="text-white flex-1/3">{date}</Text>
          </View>
          <Text className="text-white mt-3 "  numberOfLines={4}>{overview}</Text>
        </View>
      </View>
    </View>
  );
}
