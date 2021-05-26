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
  const [items, setItems] = useState({});
  useEffect(() => {
    axios
      .get(
        `/https://graph.facebook.com/${data.id}
        ?fields=birthday,email,hometown
      &access_token={${data.accessToken}}`
      )
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, [logged]);
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
            axios.get();
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
