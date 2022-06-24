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
        <span id='links'>
        <a href={person.linkedin}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="50px"/></a>
        <a href={person.github}><img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" width="50px"/></a>
        </span>
      </div>
    );
  });
};

function About(props) {
  return <div className="us">{formatData()}</div>;
}

export default About;
