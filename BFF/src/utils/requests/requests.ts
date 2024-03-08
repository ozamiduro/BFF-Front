const API_CLIENT = process.env.API_CLIENT ?? "http://localhost:8080/api/v1";
const API_TRANSACTIONS =
  process.env.API_TRANSACTIONS ?? "http://localhost:8081/api/v1";

export const requestGET = async (
  url: "CLIENT" | "TRANSACTIONS",
  path: string
) => {
  return await fetch(
    `${url === "CLIENT" ? API_CLIENT : API_TRANSACTIONS}${path}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
};

export const requestPOST = async (
  url: "CLIENT" | "TRANSACTIONS",
  path: string,
  dataToSend: any
) => {
  return await fetch(
    `${url === "CLIENT" ? API_CLIENT : API_TRANSACTIONS}${path}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
};
