import React, { Fragment } from "react";
import Nav from "./(components)/Nav";

import HeroSection from "./(components)/HeroSection";
import Iphone from "./(components)/iphone";
import Products from "./(components)/Products";

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <HeroSection />
      <div className="mt-4">
        <Iphone />
      </div>
      <Products />
    </Fragment>
  );
}
