import express from "express"
import { saveSentEmail } from "../controllers/email-controller.js";
const  routes = express.Router();

routes.post('/save',saveSentEmail);


export default routes;