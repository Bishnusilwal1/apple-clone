import React, { Fragment } from "react";
import Nav from "./(components)/Nav";
import NavContent from "./(components)/NavContent";
import HeroSection from "./(components)/HeroSection";
import Iphone from "./(components)/iphone";
import Products from "./(components)/Products";

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <HeroSection />
      <Iphone />
      <Products />
    </Fragment>
  );
}
