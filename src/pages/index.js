import React from 'react';
import { Router } from '@reach/router';

import "../sass/styles.scss"

import Player from "../components/player"
import Sidebar from "../components/sidebar"

const Home = React.lazy(() => import('../components/home'));
const Contact = React.lazy(() => import('../components/contact'));
const About = React.lazy(() => import('../components/about'));

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'Loading...'}>
    <Component {...props} />
  </React.Suspense>
);

const IndexPage = () => (
  <>
    
    <div className="app-wrapper">
      <Sidebar />

      <Router id="app-view">
        <LazyComponent Component={Home} path="/" />
        <LazyComponent Component={Contact} path="contact" />
        <LazyComponent Component={About} path="about-us" />
      </Router>
    </div>

    <Player />
  </>
);

export default IndexPage;
