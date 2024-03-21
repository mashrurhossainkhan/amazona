import express from "express";
import expressAsyncHandler from "express-async-handler";
import request from 'request';

const smsGateWayRouter = express.Router();


smsGateWayRouter.post (
     '/forgetpassword/:phnNo',
    expressAsyncHandler(async(req, res) => {
      var verification_id = Math.floor(1000 + Math.random() * 9000);

       
      var options = {
        'method': 'POST',
        'url': 'https://api.sms.net.bd/sendsms',
        formData: {
          'api_key': 'I0Bg1TpaLm57w9qnhI02hl3bu6GdGufX97U4JlIb',
          'msg': 'Verification code of brandatoz: '+ verification_id,
          'to': req.params.phnNo
        }
      };
      
    request(options, function (error, response) {
        if (error) throw new Error(error); 
        console.log(response.body)
        res.send({
            "theVerificationCode": verification_id
        })
    })
        
    })
)
/*
smsGateWayRouter.post (
    '/forgetpassword/:phnNo',
    expressAsyncHandler(async(req, res) => {
      var verification_id = Math.floor(1000 + Math.random() * 9000);
      //console.log("verification_id+"+verification_id);
      res.send(verification_id)
       
    })
)
*/
export default smsGateWayRouter;