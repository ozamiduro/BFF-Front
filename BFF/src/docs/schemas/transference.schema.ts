export const transference = {
  type: "object",
  required: ["id", "personName", "amount", "date"],
  properties: {
    id: {
      type: "integer",
      format: "int64",
      example: 1,
    },
    personName: {
      type: "string",
      example: "Juanito Pérez",
    },
    amount: {
      type: "number",
      example: 142344324,
    },
    date: {
      type: "string",
      format: "date-time",
    },
  },
};
