import http from "@/http-common";
import { GlobalResponse } from "@/types/GlobalType";
import {User, UserLogResponse} from "@/types/UserType";
import {HaircutCart} from "@/types/HaircutType";


class UserService {

    async registration(user: User): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await http.post(`/auth/register`, user);
        return data;
    }

    async login(user: User): Promise<UserLogResponse> {
        const { data }: { data: UserLogResponse } = await http.post('/auth/login', user);
        return data;
    }

    async logout(): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await http.get('/auth/logout');
        return data;
    }

    async forgotPassword(user: User): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await http.post('/auth/forgot-password', user);
        return data;
    }
    async resetPassword(user: User): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await http.post('/auth/change-password', user);
        return data;
    }

    async resendConfirmationEmail(user: User): Promise<GlobalResponse> {
        const { data }: { data: GlobalResponse } = await http.post('/auth/resend-confirmation-email', user);
        return data;
    }

    async getAll(): Promise<HaircutCart> {
        const { data }: { data: HaircutCart } = await http.get(
            `/users`
        );
        return data;
    }

    // async get(id: number): Promise<User> {
    //     const { data }: { data: User } = await http.get(`/users/${id}`);
    //     return data;
    // }
    //
    // async create(user: User): Promise<User> {
    //     const { data }: { data: User } = await http.post(`/users`, user);
    //     return data;
    // }
    //
    // async update(id: number, user: User): Promise<User> {
    //     const { data }: { data: User } = await http.put(`/users/${id}`, user);
    //     return data;
    // }
    //
    // async delete(id: number): Promise<User> {
    //     const { data }: { data: User } = await http.delete(`/users/${id}`);
    //     return data;
    // }
    //
    // async deleteAll(): Promise<UserCollection> {
    //     const { data }: { data: UserCollection } = await http.delete(`/users`);
    //     return data;
    // }
    //
    // async findByTitle(title: string): Promise<UserCollection> {
    //     const { data }: { data: UserCollection } = await http.get(`/users?title=${title}`);
    //     return data;
    // }
}

// Export a singleton instance in the global namespace
export default new UserService();