import { connect, ConnectOptions } from "mongoose";

export const dbConnect = async () => {
  try {
    await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Додайте цей рядок для перехоплення помилки у виклику функції dbConnect
  }
}
