import Email from "../model/email.js";

//to save emails to database
export const saveSentEmail = async (req, res) => {
  try {
    const email = new Email(req.body);
    await email.save();
    console.log("Email saved Successfully");
    res.status(200).json("Email saved Successfully");
  } catch (error) {
    console.log("Error while uploading email", error.message);
    res.status(500).json(error.message);
  }
};

//to fetch emails from database
export const getEmails = async (req, res) => {
  try {
    let emails;
    if (false) {
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    console.log("Emails fetched Successfully",emails);
    return res.status(200).json(emails);
  } catch (error) {
    console.log("Error while fetching emails from databse", error.message);
    res.status(500).json(error.message);
  }
};
