import * as React from "react";
import Context from "./context";
import "./app.less";

const AppContext = {
  name: "remax",
};

export default ({ children }) => {
  return (
    <Context.Provider initialContext={AppContext}>{children}</Context.Provider>
  );
};
