import { baseService } from "./baseService";

export class CardIdeasService extends baseService {
    constructor() {
        super();
    }

    getAllCard = () => {
        return this.get(`card-ideas/`);
    };
}

export const cardIdeasService = new CardIdeasService();