import { Prisma } from "../prisma/prisma";

export class ShowAllProductsService {
    async Execute() {
        const AllProducts = await Prisma.product.findMany();

        return AllProducts;
    };
};