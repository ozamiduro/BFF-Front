const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BFF API",
      version: "1.0.0",
      description: "BFF Api project for practice",
    },
  },
  apis: ["src/route/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
