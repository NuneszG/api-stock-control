import { Prisma } from "../prisma/prisma";
import { Product } from "../utils/interfaces";

export class CreateProductService {
    async Execute({ name, price, amount, validity, type }: Product) {

        if( !name || !price || !amount || !validity || !type ) {
            throw Error("Requisição inválida. Por favor, revise seus dados e reenvie novamente.");
        };

        const Product = await Prisma.product.create({
            data: {
                name,
                price,
                amount,
                validity,
                type
            }
        });

        return Product;
    };
};