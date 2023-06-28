import Email from "../model/email.js";
export const saveSentEmail = async (req, res) => {
  try { 
    const email = new Email(req.body);
    await email.save();
    console.log("Email saved Successfully")
    res.status(200).json("Email saved Successfully")

  } catch (error) {
    console.log("Error while uploading email",error.message)
    res.status(500).json(error.message);
  }
};
