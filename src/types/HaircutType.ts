/**
 * @description This is the interface for the user data
 */
export type HairCut = {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: number;
};

export type HairCutCollection = {
    hairs: HairCut[];
    beards: HairCut[];
    massages: HairCut[];
};

export type HairCutProduct = {
    id?: number;
    price?: number;
    category?: number;
    name: string;
    description: string;
    images: string[];
};

export type HaircutCart = {
    unit_amount: number;
    product_data: HairCutProduct;
};