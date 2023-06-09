import { studentPictures } from "../constants/studentPictures";
import "../styles/sections/data.scss";

export function Data() {
  return (
    <div className="content data">
      <div className="data_logos">
        <img src="logos/harvard.svg" alt="harvard logo" />
        <img src="logos/mpower.svg" alt="mpower logo" />
        <img src="logos/credit-karma.svg" alt="credit karma logo" />
      </div>
      <div className="divider" />
      <div className="data_students">
        <h2 className="title">
          More than 100 students have gotten funded through our loan partners.
        </h2>
        <div className="pictures">
          {studentPictures.map((person) => (
            <img
              key={person.alt}
              className="person"
              src={person.src}
              alt={person.alt}
            />
          ))}
        </div>
        <div className="text">
          <h4>100+</h4>
          <p>Funded Students</p>
        </div>
      </div>
      <div className="divider" />
      <div className="data_connect">
        <img src="logos/star.svg" alt="star icon" />
        <p>We connect you to the best loan platforms</p>
      </div>
    </div>
  );
}
