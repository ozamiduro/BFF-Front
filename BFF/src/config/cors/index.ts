const cors = require("cors");

const env = process.env.NODE_ENV ?? "development";

const getOptions = (env: string) => {
  switch (env) {
    case "development":
      return {
        origin: "http://localhost:3000",
        credentials: true,
      };
    case "production":
      return {
        origin: ["http://3.14.228.227:80"],
        credentials: true,
      };
    default:
      return {
        origin: ["http://localhost:3000", "https://localhost:3000"],
        credentials: true,
      };
  }
};
const corsOptions = getOptions(env);

export default corsOptions;
