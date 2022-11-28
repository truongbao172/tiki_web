import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const User = (props) => {
  const { Component, ...resParams } = props;

  return (
    <Route
      {...resParams}
      render={(propsRoute) => {
        return (
          <div className={"content"}>
            <main>
              {/* <MenuOverPlayHeader /> */}
              <Header />
              <Component {...propsRoute} />
              <Footer />
            </main>
          </div>
        );
      }}
    />
  );
};

export default User;
