import aboutData from "../projectabout/About.json";
import "../App.css";

const formatData = () => {
  return aboutData.map((person, index) => {
    return (
      <div key={index} className="person_info">
        <h2>{person.name}</h2>
        <img src={person.headshot} alt="img" />
        <p> {person.bio}</p>
        <p>{person.email}</p>
      </div>
    );
  });
};

function About(props) {
  return <div className="us">{formatData()}</div>;
}

export default About;
