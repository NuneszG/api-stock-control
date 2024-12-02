import { Prisma } from "../prisma/prisma";
import { ProductId } from "../utils/interfaces";

export class DeleteProductService {
    async Execute({ id }: ProductId) {
        
        const ProductId = await Prisma.product.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.product.delete({
            where: {
                id: ProductId?.id
            }
        });

        return `Os dados do produto '${ProductId?.name}' foram deletados.`;
    };
};