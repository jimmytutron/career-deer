import React from "react";
import Tada from "react-reveal/Tada";

const loadingStyle = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "300px",
    marginTop: "-150px",
    marginLeft: "-150px"
}

const Loading = () => (
  <Tada forever>
    <img src="/imgs/logo-symbol.svg" alt="loading logo" style={loadingStyle} />
  </Tada>
);

export default Loading;
