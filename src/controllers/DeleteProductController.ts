import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../services/DeleteProductService";
import { ProductId } from "../utils/interfaces";

export class DeleteProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as ProductId;

        const Product = new DeleteProductService();
        const ProductDeleted = await Product.Execute({ id });

        reply.send(ProductDeleted);
    };
};