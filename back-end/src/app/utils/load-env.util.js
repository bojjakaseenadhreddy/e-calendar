loadAppEnvironments = async () => {
  if (process.env.NODE_ENV == "production") {
    return;
  }
  const environment = process.env.NODE_ENV ?? "dev";
  const envPath = `./src/app/environments/.env.${environment}`;
  await require("dotenv").config({
    path: envPath,
  });
  console.log("Loaded env");
};

loadAppEnvironments();
