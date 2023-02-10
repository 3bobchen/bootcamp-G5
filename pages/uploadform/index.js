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
      <div style={{zIndex: "200", width: "80rem"}}>
          <a href={"/wardrobe"} style={{display: "flex", width: "7rem", marginTop: "5rem", justifyContent: "center", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}}>
              Back
          </a>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={createObjectURL} />
              <h4>Select Image</h4>
              <input type="file" name="myImage" onChange={uploadToClient} />
          </div>
          <button onClick={uploadToServer} style={{display: "flex", gap:"2rem", width: "17rem", marginTop: "3rem", justifyContent: "center", alignItems: "center", margin: "auto", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <p>Import from Instagram</p>
          </button>
          <button onClick={uploadToServer} style={{display: "flex", gap:"2rem", width: "17rem", marginTop: "1rem", justifyContent: "center", alignItems: "center", margin: "auto", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>              <p>Import from Facebook</p>
          </button>
          <button onClick={uploadToServer} style={{display: "flex", gap:"2rem", width: "17rem", marginTop: "1rem", justifyContent: "center", alignItems: "center", margin: "auto", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-7 20c-.825 0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498 1.023.918 1.833.918 2.414 0 4.152-2.219 4.152-4.976 0-2.643-2.157-4.62-4.933-4.62-3.452 0-5.286 2.317-5.286 4.841 0 1.174.625 2.634 1.624 3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825 0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341 3.255 0 2.164-1.093 3.663-2.515 3.663-.786 0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664 0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943 0 .709.239 1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098 1.662-.028 2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>              <p>Import from Pinterest</p>
          </button>
        <br />
          <button onClick={uploadToServer} style={{display: "flex", width: "7rem", marginTop: "5rem", justifyContent: "center", margin: "auto", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}}>
              Submit
          </button>
      </div>
  );
}