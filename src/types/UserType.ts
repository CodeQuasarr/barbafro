import {HaircutCart} from "@/types/HaircutType";

export type User = {
    id?: number;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    email?: string;
    password?: string;
    birthday?: string;
    nationality?: string;
    his_manager?: string;
    contract_start_date?: string;
    confirmed?: boolean;
    address_num?: string;
    postal_code?: string;
    address?: string;
    phone?: string;
    is_off?: boolean;
    on_leave?: boolean;
    role?: string;
};

export type UserLogResponse = {
    has_verified_email?: boolean;
    message?: string;
    user?: User;
    token?: string;
    token_type: string;
    HaircutCart: HaircutCart[]
};