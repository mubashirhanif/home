import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/home/Footer";
import Navbar from "./components/Navbar";
import Leadership from "./components/home/Leadership";
import Experience from "./components/home/Experience";
import Interests from "./components/home/Interests";
import Skills from "./components/home/Skills";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Experience />
      <Project />
      {/* <Leadership /> */}
      <Skills />
      <Interests />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {/* {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />} */}
    <Footer />
  </BrowserRouter>
);

export default App;
