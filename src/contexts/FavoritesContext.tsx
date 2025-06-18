import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Artwork = {
  id: string;
  title: string;
  artist_title: string;
  image_id?: string;
};

type FavoritesContextType = {
  favorites: Artwork[];
  addToFavorites: (art: Artwork) => void;
  removeFromFavorites: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Artwork[]>([]);

  const addToFavorites = (art: Artwork) => {
    setFavorites((prev) =>
      prev.find((a) => a.id === art.id) ? prev : [...prev, art]
    );
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((art) => art.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}