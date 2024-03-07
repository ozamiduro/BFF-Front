export const information = {
  type: "object",
  required: ["id", "name", "email", "date", "idBalance", "balance"],
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
    idBalance: {
      type: "integer",
      format: "int64",
      example: 1,
    },
    balance: {
      type: "integer",
      format: "int64",
      example: 23124431343,
    },
  },
};
