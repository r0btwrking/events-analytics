import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const logged = localStorage.getItem("logged");
  const [data, setData] = useState({
    name: "",
    email: "",
    picture: {
      data: {
        url: "",
      },
    },
  });
  return (
    <div>
      {!logged && (
        <FacebookLogin
          appId="333711718470445"
          autoLoad={true}
          fields="name,first_name,email"
          callback={(res) => {
            localStorage.setItem("logged", true);

            axios.post("https://aqueous-ocean-02531.herokuapp.com/users", {
              name: res.name,
              first_name: res.first_name,
              email: res.email,
            });
          }}
          redirectUri={"https://festamvp-spa.herokuapp.com/"}
        />
      )}
      {logged && <div>Logado</div>}
    </div>
  );
}

export default App;
