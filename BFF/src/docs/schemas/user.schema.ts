export const user = {
  type: "object",
  required: ["id", "name", "email", "date"],
  properties: {
    id: {
      type: "integer",
      format: "int64",
      example: 21343,
    },
    name: {
      type: "string",
      example: "Juanito Pérez",
    },
    email: {
      type: "string",
      format: "email",
      example: "juanitoperez@gmail.com",
    },
    date: {
      type: "string",
      format: "date-time",
    },
  },
};
