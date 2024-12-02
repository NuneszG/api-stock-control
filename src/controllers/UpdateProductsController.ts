import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateProductService } from "../services/UpdateProductService";
import { ProductData, ProductId } from "../utils/interfaces";

export class UpdateProductsController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as ProductId;
        const { name, price, amount, validity, type } = request.body as ProductData;

        const UpdateProduct = new UpdateProductService();
        const Product = await UpdateProduct.Execute({ id, name, price, amount, validity, type });

        reply.send(Product);
    };
};