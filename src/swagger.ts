import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Job Board API",
            version: "1.0.0",
            description: "API documentation for the Job Board backend",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server",
            },
        ],
    },
    apis: ["./src/routes/*.ts"], // Path to API route files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
