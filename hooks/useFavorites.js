
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await AsyncStorage.getItem("@favorites");
    if (data) setFavorites(JSON.parse(data));
  };

  const toggleFavorite = async (id) => {
    let updated = [];

    if (favorites.includes(id)) {
      updated = favorites.filter(f => f !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    await AsyncStorage.setItem("@favorites", JSON.stringify(updated));
  };

  return { favorites, toggleFavorite };
}
