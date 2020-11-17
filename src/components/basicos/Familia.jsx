import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  
  
return (
    <div>
      <FamiliaMembro nome="Diva" {...props} />
      <FamiliaMembro nome="Vanessa" {...props} />
      <FamiliaMembro nome="Carlos" {...props} />
      <FamiliaMembro nome="Netinho" {...props} />
      <FamiliaMembro nome="Maria Rafaela" {...props} />
    </div>
  );
};
