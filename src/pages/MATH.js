import React from "react";
import "./math.css";

export default function MATH() {
  return (
    <div className="math">
      <section className="Math Resources">
        <h1>Math Resources</h1>
        <ul>
          <li>
            <a href="https://www.desmos.com/calculator">
              Free Graphic Calculator
            </a>
          </li>
          <li>
            <a href="https://www.khanacademy.org/math">Khan Academy Math</a>
          </li>
          <li>
            <a href="https://bim.easyaccessmaterials.com/index.php?location_user=cchs">
              Free Math Textbooks
            </a>
          </li>
          <li>
            <a href="https://mathantics.com/">Free Math Videos</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
