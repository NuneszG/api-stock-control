import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../services/CreateProductService";
import { Product } from "../utils/interfaces";

export class CreateProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, price, amount, validity, type } = request.body as Product;

        const NewProduct = new CreateProductService();
        const Product = await NewProduct.Execute({ name, price, amount, validity, type });

        reply.send(Product);
    };
};