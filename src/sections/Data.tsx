import "../styles/sections/data.scss";

const people = [
  {
    alt: "Person 1",
    src: "images/students/1.png",
  },
  {
    alt: "Person 2",
    src: "images/students/2.png",
  },
  {
    alt: "Person 3",
    src: "images/students/3.png",
  },
  {
    alt: "Person 4",
    src: "images/students/4.png",
  },
  {
    alt: "Person 5",
    src: "images/students/5.png",
  },
];

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
        <div>
          {people.map((person) => (
            <img
              key={person.alt}
              className="person"
              src={person.src}
              alt={person.alt}
            />
          ))}
        </div>
        <div>
          <h4>100+</h4>
          <p>Funded Students</p>
        </div>
      </div>
      <div className="divider" />
      <div className="data_connect">
        <img src="logos/star.svg" alt="star icon" />
        <p>We connect you to the best loan plataforms</p>
      </div>
    </div>
  );
}
