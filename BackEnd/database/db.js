const mongoose = require("mongoose");
const MONGO_URL = "mongodb://localhost/react-mt";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("               📅 DB funcionando 📅"))
    .catch((error) => console.log(error));
};
module.exports= db