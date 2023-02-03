import {AvailableHours, HairCut, HairCutCollection, HairCutReservation, HaircutResponse} from "@/types/HaircutType";
import http from "@/http-common";


class HaircutService {

    intentionToBookThisProduct = {} as HairCut;
    async getAll(): Promise<HairCutCollection> {
        const { data }: { data: HairCutCollection } = await http.get(
            `/haircuts`
        );
        return data;
    }

    async addReservationToCart(reservation: HairCutReservation): Promise<HaircutResponse> {
        if (this.intentionToBookThisProduct.id != null) {
            reservation.haircut_id = this.intentionToBookThisProduct.id;
        }
        const { data }: { data: HaircutResponse } = await http.post(`/haircuts/reservation`, reservation);
        return data;
    }

    changeHourToUnavailable( availableHours: AvailableHours[], unavailableHours: AvailableHours[] ): AvailableHours[] {
        const initialAvailableHours = [
            {
                start_time: "10:00",
                is_available: true,
            },
            {
                start_time: "10:30",
                is_available: true,
            },
            {
                start_time: "11:00",
                is_available: true,
            },
            {
                start_time: "11:30",
                is_available: true,
            },
            {
                start_time: "12:00",
                is_available: true,
            },
            {
                start_time: "12:30",
                is_available: true,
            },
            {
                start_time: "13:00",
                is_available: true,
            },
            {
                start_time: "13:30",
                is_available: true,
            },
            {
                start_time: "14:00",
                is_available: true,
            },
            {
                start_time: "14:30",
                is_available: true,
            },
            {
                start_time: "15:00",
                is_available: true,
            },
            {
                start_time: "15:30",
                is_available: true,
            },
            {
                start_time: "16:00",
                is_available: true,
            },
            {
                start_time: "16:30",
                is_available: true,
            },
            {
                start_time: "17:00",
                is_available: true,
            },
            {
                start_time: "17:30",
                is_available: true,
            },
            {
                start_time: "18:00",
                is_available: true,
            },
            {
                start_time: "18:30",
                is_available: true,
            },
        ];
        if ( !unavailableHours.length ) {
            console.log("No unavailable hours");
            return initialAvailableHours;
        } else {
            console.log("unavailable hours")
            return initialAvailableHours.map((availableHour) => {
                unavailableHours.forEach((unavailableHour) => {
                    if ( availableHour.start_time === unavailableHour.start_time ) {
                        availableHour.start_time = "";
                        availableHour.is_available = false;
                    }
                });
                return availableHour;
            });
        }
    }
    async getAvailableHours(date: string, availableHours: AvailableHours[]) {
        const unavailableHours = await this.getUnavailableHours(date);
        return this.changeHourToUnavailable(availableHours, unavailableHours);
    }
    /**
     * Get unavailable hours     *  are hours that are already reserved
     * @param date
     * @returns AvailableHours[]
     */
    async getUnavailableHours(date: string): Promise<AvailableHours[]> {
        const { data }: { data: AvailableHours[] } = await http
            .get(`/unavailable-hours/${this.intentionToBookThisProduct.id}`,
                {
                    params: {start_date: date}
                }
            );
        return data;
    }
}

// Export a singleton instance in the global namespace
export default new HaircutService();