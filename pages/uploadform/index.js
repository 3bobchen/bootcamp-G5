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

    Auth.signIn("harry", "testpass")
    .then(user => {
      console.log("signing in")
      console.log(user)
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          console.log("pass challenge")
            Auth.completeNewPassword(
                user,               // the Cognito User Object
                "testpass",       // the new password
            ).then(user => {
                console.log(user);
            }).catch(e => {
              console.log(e);
            });
        } else {
            // other situations
        }
    }).catch(e => {
        console.log(e);
    });

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
      <div>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}