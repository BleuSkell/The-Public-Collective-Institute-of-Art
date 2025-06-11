import { fetchArtworks} from "../artApi";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Artwork = {
    id: string;
    title: string;
    artist_title: string;
    image_id?: string;
};

type ArtlistContextType = {
    artworks: Artwork[];
    loading: boolean;
};

const ArtlistContext = createContext<ArtlistContextType | undefined>(undefined);

export function ArtlistProvider({children}: {children: ReactNode}) {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArtworks().then(data => {
            setArtworks(data.data);
            setLoading(false);
        });
    }, []);

    return (
        <ArtlistContext.Provider value={{ artworks, loading }} >
            {children}
        </ArtlistContext.Provider>
    )
}

export function useArtlist() {
    const context = useContext(ArtlistContext);

    if (!context) {
        throw new Error('useArtlist must be used within an ArtlistProvider');
    }

    return context;
}