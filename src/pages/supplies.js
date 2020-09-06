import React from "react";
// import ;

export default function Supplies() {
  return (
    <div className="supplies-container">
      <section className="ISEE">
        <h1> ISEE Standardized Tests</h1>
        <ul>
          <li>ISEE Math Book</li>
          <li>ISEE English</li>
          <li>ISEE Vocabulary Book Series</li>
          <li>Practice Tests</li>
          <li>
            <a href="https://isee.ivyglobal.com/practice">
              ISEE Ivy Global Practice Books
            </a>
          </li>
        </ul>
      </section>
      <section className="SAT">
        <h1>SAT Resources</h1>
        <ul></ul>
      </section>
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
      <section className="English">
        <h1>English Resources</h1>
        <ul>
          <li>
            <a href="https://owl.purdue.edu/owl/purdue_owl.html">
              Writing Resource
            </a>
          </li>
          <li>
            <a href="https://www.lexico.com/grammar/grammar-a-z">
              Grammar Resource
            </a>
          </li>
          <li>
            <a href="https://www.lexico.com/grammar/grammar-a-z">
              Merriam-Webster Dictionary
            </a>
          </li>
        </ul>
      </section>
      <section className="Science">
        <h1>Science Resources</h1>
        <ul>
          <li>
            <a href="https://www.khanacademy.org/science">
              Khan Academy Science
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
