/**
 * @description This is the interface for the user data
 */
export type AvailableHours = {
    start_time: string;
    is_available: boolean;
};

export type HairCutReservation = {
    id?: number;
    start_date: string;
    start_time: string | null;
    haircut_id: number;
    user_id?: number;
    status: string;
};
export type HairCut = {
    id?: number;
    name: string;
    description: string;
    price: number;
    category?: number;
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
    price: number;
    name: string;
    description: string;
    reservations: HairCutReservation[];
};

export type HaircutResponse = {
    message: string,
    success: boolean,
}

export type Payement = {
    unit_amount: number
    product_data: HaircutCart[]
}