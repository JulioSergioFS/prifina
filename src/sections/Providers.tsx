import { AnimateComponent } from "../components/AnimateComponent";
import "../styles/sections/providers.scss";

const lenders = [
  {
    name: "M Power Loan",
    countries: "USA & Canada",
    interest: "13.74-15.01%",
    link: "",
  },
  {
    name: "Prodigy Loan",
    countries: "USA, UK & India",
    interest: "13.37-15.01%",
    link: "",
  },
  {
    name: "SallieMae Loan",
    countries: "USA",
    interest: "4.50-15.01%",
    link: "",
  },
  {
    name: "Ascent Loan",
    countries: "USA & Canada",
    interest: "4.62-15.66%",
    link: "",
  },
  {
    name: "Gocap Loan",
    countries: "UK",
    interest: "14.5%",
    link: "",
  },
  {
    name: "Auxilio Loan",
    countries: "India & USA",
    interest: "13.74-15.01%",
    link: "",
  },
];

export function Providers({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content">
      <AnimateComponent
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <h2 className="title">Student Loan Providers</h2>
      </AnimateComponent>

      <AnimateComponent
        className="providers"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <table>
          <thead>
            <th>Lender</th>
            <th>Country</th>
            <th>Interest</th>
            <th>Min.Credit</th>
            <th>Learn More</th>
          </thead>
          <tbody>
            {lenders.map((lender) => (
              <tr key={lender.name}>
                <td>{lender.name}</td>
                <td>{lender.countries}</td>
                <td>{lender.interest}</td>
                <td>None</td>
                <td>
                  <a href={lender.link} target="_blank">
                    View More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </AnimateComponent>
    </div>
  );
}
