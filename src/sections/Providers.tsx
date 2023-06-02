import { AnimateComponent } from "../components/AnimateComponent";
import { lenders } from "../constants/lenders";
import "../styles/sections/providers.scss";

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
            <td>Lender</td>
            <td>Country</td>
            <td>Interest</td>
            <td>Min.Credit</td>
            <td>Learn More</td>
          </thead>
          <tbody>
            {lenders.map((lender, index) => (
              <tr
                key={lender.name}
                className={index % 2 == 0 ? "table-secondary-background" : "'"}
              >
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
