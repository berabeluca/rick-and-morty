
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../theme";

export default function CharacterCard({ item, onPress, onFavorite, isFav }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.detail}>Status: {item.status}</Text>
        <Text style={styles.detail}>Espécie: {item.species}</Text>

        <TouchableOpacity onPress={onFavorite} style={styles.favButton}>
          <Text style={{ color: COLORS.primary }}>
            {isFav ? "★ Favorito" : "☆ Favoritar"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    margin: 12,
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 5
  },
  image: {
    width: 120,
    height: 120
  },
  info: {
    flex: 1,
    padding: 12
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary
  },
  detail: {
    color: COLORS.text
  },
  favButton: {
    marginTop: 8
  }
});
