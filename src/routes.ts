import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateProductsController } from "./controllers/UpdateProductsController";
import { ShowAllProductsController } from "./controllers/ShowAllProductsController";
import { DeleteProductController } from "./controllers/DeleteProductController";

export default async function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/create-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().Handle(request, reply);
    });

    fastify.put("/auth/update-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductsController().Handle(request, reply);
    });

    fastify.get("/auth/get-all-products/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ShowAllProductsController().Handle(request, reply);
    });

    fastify.delete("/auth/delete-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().Handle(request, reply);
    });

};