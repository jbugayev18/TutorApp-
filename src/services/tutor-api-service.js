import config from "../config";

const TutorApiService = {
  getTutorList() {
    return fetch(`${config.API_ENDPOINT}/tutors`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getTutor(tutorId) {
    return fetch(`${config.API_ENDPOINT}/tutors/${tutorId}`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getTutorsZipcode(zipcode) {
    return fetch(`${config.API_ENDPOINT}/tutors/zip/${zipcode}`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default TutorApiService;
