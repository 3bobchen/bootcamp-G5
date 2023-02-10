import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import { Storage } from 'aws-amplify';

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,       
    }
};

export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
       
        form.parse(req, async (err, fields, files) => {
            if (err) return reject(err)
            try {
                await Storage.put("check.png",files.file,{
                    contentType: "image/png"
                })
                var oldPath = files.file.filepath;
            } catch (error) {
                console.log("Error uploading file: ", error)
            }            
            });
        });
} 
