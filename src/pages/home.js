import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./home.css";
import TutorApiService from "../services/tutor-api-service";

// const tutors = [
//   {
//     Name: "Roger",
//     ZipCode: "90404",
//     Subject: "Math",
//   },

//   {
//     Name: "Lawrence",
//     ZipCode: "90069",
//     Subject: "SAT",
//   },

//   {
//     Name: "Patrick",
//     ZipCode: "90210",
//     Subject: "French",
//   },
//   {
//     Name: "Mary",
//     ZipCode: "90272",
//     Subject: "Reading Comprehension",
//   },
//   {
//     Name: "Naomi",
//     ZipCode: "91423",
//     Subject: "History",
//   },
// ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "90069" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const tutorData = await TutorApiService.getTutorsZipcode(this.state.value);
    this.setState({ tutorData: [tutorData] });
  }

  render() {
    const tutorList =
      this.state.tutorData &&
      this.state.tutorData.map((tutor) => {
        return (
          <div className="tutor-list-item" key={tutor.id}>
            <h2>{tutor.title}</h2>
            <p>{tutor.content}</p>
          </div>
        );
      });
    return (
      <>
        <div className="image">
          <form className="home-form" onSubmit={this.handleSubmit}>
            <label className="zipcode-select">
              Select from Available Zip Codes;
            </label>
            <select
              className="zipcodes"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="90069">90069</option>
              <option value="90404">90404</option>
              <option value="90210">90210</option>
              <option value="90272">90272</option>
              <option value="91423">91423</option>
            </select>

            <input type="submit" value="Submit" />
          </form>
          <div className="tutor-list">
            <div>{tutorList}</div>
          </div>
        </div>
        <div className="buttons">
          <div className="button1">
            <Link to="/Science">
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                SCIENCE{" "}
              </Button>
            </Link>
          </div>

          <div className="button2">
            <Link to="/MATH">
              <Button
                className="button2"
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                MATH{" "}
              </Button>
            </Link>
          </div>

          <div className="button3">
            <Link to="/ReadingCom">
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                ENGLISH{" "}
              </Button>
            </Link>
          </div>

          <div className="button4">
            <Link to="/ISEE">
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                ISEE
              </Button>
            </Link>
          </div>

          <div className="button5">
            <Link to="/CAStandards">
              <Button
                type="button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--medium"
              >
                CA STANDARDS{" "}
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
