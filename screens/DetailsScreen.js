
import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={{ backgroundColor: "#0B0C10", flex: 1 }}>
      <Image source={{ uri: item.image }} style={{ width: "100%", height: 300 }} />

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 28, color: "#66FCF1", fontWeight: "bold" }}>
          {item.name}
        </Text>

        <Text style={{ color: "#C5C6C7", marginTop: 4 }}>Status: {item.status}</Text>
        <Text style={{ color: "#C5C6C7", marginTop: 4 }}>Espécie: {item.species}</Text>
        <Text style={{ color: "#C5C6C7", marginTop: 4 }}>Gênero: {item.gender}</Text>
        <Text style={{ color: "#C5C6C7", marginTop: 4 }}>Origem: {item.origin.name}</Text>
        <Text style={{ color: "#C5C6C7", marginTop: 4 }}>Localização: {item.location.name}</Text>

        <Text style={{ fontSize: 20, color: "#45A29E", marginTop: 20, fontWeight: "bold" }}>
          Episódios:
        </Text>

        {item.episode.map((ep, index) => (
          <Text key={index} style={{ color: "#fff" }}>
            {ep}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
