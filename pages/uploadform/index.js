import { useState } from "react";
import { Auth, Storage } from 'aws-amplify';

export default function PrivatePage(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {     
    const result = await Storage.put("test.png", image);
    console.log(result)
    // const body = new FormData();
    // // console.log("file", image)
    // body.append("file", image);    
    // const response = await fetch("/api/upload", {
    //   method: "POST",
    //   body
    // });
  };

  return (
      <div style={{zIndex: "200"}}>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <br />        
        <button className="btn btn-primary" type="submit" onClick={uploadToServer}>
          Send to server
        </button>
      </div>
  );
}