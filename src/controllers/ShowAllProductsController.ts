import { FastifyRequest, FastifyReply } from "fastify";
import { ShowAllProductsService } from "../services/ShowAllProductsService";

export class ShowAllProductsController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const AllProducts = new ShowAllProductsService();
        const Products = await AllProducts.Execute();

        reply.send(Products);
    };
};