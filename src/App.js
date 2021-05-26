import FacebookLogin from "react-facebook-login";
import React from "react";

function App() {
  return (
    <FacebookLogin
      appId="4078511625548053"
      autoLoad={true}
      fields="name,email,picture"
      onClick={() => console.log("CLICKED")}
      callback={(res) => console.log("FACEBOOK DATA", res)}
    />
  );
}

export default App;
