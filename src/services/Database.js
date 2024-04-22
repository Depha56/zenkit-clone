import mongoose from "mongoose";
import configurations from "../configs/index.js";

/**
* Connects to the MongoDB database using the configuration settings.
* @returns {Promise<void>} A promise that resolves when the connection is established, or rejects with an error.
*/
export default function () {
    mongoose
      .connect(
        "mongodb+srv://dephaingabire:kOCWQ0bTDzsHb4hl@cluster0.pckglsb.mongodb.net/zenkit-projectV2"
      )
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err));
}