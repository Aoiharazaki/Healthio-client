export type TodoType = {
    id: number;
    title: string;
    isCompleted: boolean;
};

export type ShopType = {
    id: number;
    name: string;
    description?: string | null; 
    location?: { name: string } | null;
    locationId?: number | null;
    genre?: { name: string } | null;
    genreId?: number | null;
    photos: Photo[]; 
    createdAt: Date;
    updatedAt: Date;
    link?: string;
};

export type Photo = {
    id: number;
    url: string;
    shopId: number;
    createdAt: Date;
};
