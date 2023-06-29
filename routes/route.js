import express from "express"
import { saveSentEmail,getEmails,moveEmailsToBin} from "../controllers/email-controller.js";
const  routes = express.Router();

routes.post('/save',saveSentEmail);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmail);
routes.post('/bin',moveEmailsToBin);
export default routes;