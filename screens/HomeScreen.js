
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { useFavorites } from '../hooks/useFavorites';

export default function HomeScreen({ navigation }) {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  const loadCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`);
    const data = await response.json();

    if (page === 1) {
      setCharacters(data.results || []);
    } else {
      setCharacters(prev => [...prev, ...(data.results || [])]);
    }
  };

  useEffect(() => { loadCharacters(); }, [page]);
  useEffect(() => { setPage(1); loadCharacters(); }, [search]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0B0C10" }}>
      <TextInput
        placeholder="Buscar personagem..."
        placeholderTextColor="#999"
        style={{
          padding: 12,
          backgroundColor: "#1F2833",
          margin: 10,
          borderRadius: 10,
          color: "#fff"
        }}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            item={item}
            onPress={() => navigation.navigate("Details", { item })}
            onFavorite={() => toggleFavorite(item.id)}
            isFav={favorites.includes(item.id)}
          />
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#45A29E",
          padding: 14,
          borderRadius: 10,
          alignItems: "center",
          margin: 12
        }}
        onPress={() => setPage(prev => prev + 1)}
      >
        <Text style={{ color: "#fff" }}>Carregar mais</Text>
      </TouchableOpacity>
    </View>
  );
}
