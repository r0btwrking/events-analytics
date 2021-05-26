import FacebookLogin from "react-facebook-login";
import React, { useState } from "react";

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
          fields="name,email,picture"
          onClick={() => console.log("CLICKED")}
          callback={(res) => {
            console.log(res);

            setLogged(true);
            setData(res);
          }}
        />
      )}
      {logged && (
        <div>
          <h1>nome: {data.name}</h1>
          <h1>email: {data.email}</h1>
          <img src={data.picture.data.url} />
        </div>
      )}
    </div>
  );
}

export default App;
