import {HairCutCollection} from "@/types/HaircutType";
import http from "@/http-common";


class HaircutService {
    async getAll(): Promise<HairCutCollection> {
        const { data }: { data: HairCutCollection } = await http.get(
            `/haircuts`
        );
        return data;
    }
}

// Export a singleton instance in the global namespace
export default new HaircutService();