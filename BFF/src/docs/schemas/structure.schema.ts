export const structure = {
  type: "object",
  required: ["data", "timestamp"],
  properties: {
    timestamp: {
      type: "string",
      format: "date-time",
      example: "2023-09-22T15:19:02.185Z",
    },
    data: {
      type: "object",
    },
  },
};
