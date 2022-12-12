import { baseService } from "./baseService";

export class CategoryService extends baseService {
    constructor() {
        super();
    }

    getAllCategory = () => {
        return this.get(`category/`);
    };
    getAllDemoCategory = () =>{
        return this.get(`demoCategory/`);
    }
}

export const categoryService = new CategoryService();