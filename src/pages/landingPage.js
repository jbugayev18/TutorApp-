import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const landingPage = (props) => {
  return (
    <div>
      <section className="landing">
        <p>
          In need of a tutor but do not want not want to wait in L.A.traffic
          just to get to a tutor center? Now you can search a tutor by area code
          and have them come to you, pencil and paper in hand! In need of
          resources for you school subjects? This app provides users with the
          opportunity to seek for additional resources by pressing the buttons
          labeled with a school subject in order to find external links.
          Interested in a specific tutor depending your subject of interest? The
          app provides a page where you can find a list of all of our tutors and
          their creditinals. So grab a pencil, and paper and let's find you a
          perfect tutor match!
        </p>
        <Link to="/search">
          <button className="get-educated-button">Let's Get Educated!</button>
        </Link>
      </section>
    </div>
  );
};

export default landingPage;
