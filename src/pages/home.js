import React from "react";

const tutors = [
  {
    Name: "Roger",
    ZipCode: "90404",
    Subject: "Math",
  },

  {
    Name: "Lawrence",
    ZipCode: "90069",
    Subject: "SAT",
  },

  {
    Name: "Patrick",
    ZipCode: "90210",
    Subject: "French",
  },
  {
    Name: "Mary",
    ZipCode: "90272",
    Subject: "Reading Comprehension",
  },
  {
    Name: "Naomi",
    ZipCode: "91423",
    Subject: "History",
  },
];

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

  handleSubmit(event) {
    event.preventDefault();
    alert("Select the Zip Code" + this.state.value);
    // const result = tutors.filter((tutor) => {
    //   return tutor.ZipCode === this.state.value;
    // });
    // return result;
  }

  render() {
    const result = tutors.filter((tutor) => {
      return tutor.ZipCode === this.state.value;
    });
    const tutorList = result.map((tutor) => {
      return (
        <li>
          {tutor.Name}
          {tutor.ZipCode}
          {tutor.Subject}
        </li>
      );
    });
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select from Available Zip Codes;
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
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{tutorList}</ul>
      </>
    );
  }
}

export default Home;