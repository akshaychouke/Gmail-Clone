import mongoose from "mongoose";

const Connection = async () => {
    const DB_URI = `mongodb+srv://akshaychauke50:Akshaymongo1@gmailclone.l6vfkrn.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Databse connected successfully")
  } catch (error) {
    console.log("error while connection database", error.message);
  }
};

export default Connection;