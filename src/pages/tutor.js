import React from "react";

const publicURL = process.env.PUBLIC_URL;

const tutorData = [
  {
    name: "Lawrence",
    bio:
      "Lawrence graduated from Stanford University with a degree in Mathematics and a minor in Economics. He has tutored students in Algebra II, Geometry, Calculus I and II, and Linear Algebra for over 2 years. He is very dedicated to his students and carries great patience.",
    specialization: "Specializes in High School and College Level Mathematics.",
    imageSrc: `${publicURL}/images/lawrence.jpg`,
  },
  {
    name: "Patrick",
    bio: "Patrick is a gay man who just moved to los angeles",
    specialization: "French, Math, and React.",
    imageSrc: `${publicURL}/images/patrick.jpg`,
  },
  {
    name: "Ekaterina Shashlick",
    bio: "Ekaterina is from Russia and tutors exclusively in Russian and Urdu.",
    specialization: "Modeling.",
    imageSrc: `${publicURL}/images/ekaterina.jpg`,
  },
  {
    name: "Naomi",
    bio:
      "Went to an Ivy League University and obtained a degree in Political Science",
    specialization: "SAT, ISEE, Essay Writing",
    imageSrc: `${publicURL}/images/naomi.jpg`,
  },
  {
    name: "Mary",
    bio:
      "Mary is a certified teacher in the state of California, specializing in English literature and grammar. In particular, Mary offers services in SAT and ISEE",
    specialization: "English and SAT",
    imageSrc: `${publicURL}/images/mary.jpg`,
  },
  {
    name: "David",
    bio: "Went to NYU and obtained a degree in Screen Writing and Photography",
    specialization: "Photography, Creative Writing, and Literature",
    imageSrc: `${publicURL}/images/david.jpg`,
  },
];

const TutorCard = ({ name, bio, specialization, imageSrc }) => (
  <div className="tutorCard">
    <h1 className="name">{name}</h1>
    <p className="bio">{bio}</p>
    <p className="specialization">{specialization}</p>
    <img src={imageSrc} alt="This is the tutor" className="tutorImage" />
  </div>
);

const Tutors = () => {
  return (
    <div className="tutorContainer">
      {tutorData.map((tutor) => (
        <TutorCard {...tutor} />
      ))}
    </div>
  );
};

export default Tutors;
