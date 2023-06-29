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
    if (req.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    console.log("Emails fetched Successfully", emails);
    return res.status(200).json(emails);
  } catch (error) {
    console.log("Error while fetching emails from databse", error.message);
    res.status(500).json(error.message);
  }
};

//to move emails to bin
export const moveEmailsToBin = async (req, res) => {
  try {
    await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: " " } }
    );
    console.log("Emails moved to bin Successfully");
    return res.status(200).json("Emails moved to bin Successfully");
  } catch (error) {
    console.log("Error while moving emails to bin", error.message);
    res.status(500).json(error.message);
  }
};
