import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [logged, setLogged] = useState(false);
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
          appId="4078511625548053"
          autoLoad={true}
          fields="name,first_name,email"
          onClick={() => setLogged(true)}
          callback={(res) => {
            console.log(res);
            axios.post("https://aqueous-ocean-02531.herokuapp.com/users", {
              name: res.name,
              first_name: res.first_name,
              email: res.email,
            });
          }}
        />
      )}
      {logged && <div>Logado</div>}
    </div>
  );
}

export default App;
