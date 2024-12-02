import { Prisma } from "../prisma/prisma";
import { ProductData } from "../utils/interfaces";

export class UpdateProductService {
    async Execute({ id, name, price, amount, validity, type }: ProductData) {

        const ProductId = await Prisma.product.findFirst({
            where: {
                id: id
            }
        });

        const UpdateProduct = await Prisma.product.update({
            where: {
                id: ProductId?.id
            },
            data: {
                name,
                price,
                amount,
                validity,
                type
            }
        });

        console.log(`${ProductId?.name} data was updated.`);
        return UpdateProduct;
    };
};