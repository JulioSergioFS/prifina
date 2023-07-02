import { AnimateComponent } from "../../components/AnimateComponent";
import "../../styles/sections/work-opportunities/jobs.scss";

export function Jobs() {
  return (
    <div className="content jobs">
      <AnimateComponent
        className="jobs_search"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        <p>Search by</p>
        <div className="input-list">
          <input placeholder="Location" />
          <input placeholder="Job Title" />
          <input placeholder="Job Type" />
        </div>
      </AnimateComponent>
      <AnimateComponent
        className="jobs_list"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        }}
      >
        b
      </AnimateComponent>
      <AnimateComponent
        className="jobs_text-content"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <div className="jobs_text-content_list">
          <div className="jobs_text-content_list_item">
            <h6 className="title">Country Work Guides</h6>
            <p>
              The search to find a job can vary greatly depending on what
              country you are searching for a job in. With competition as fierce
              as it is in today’s job market, you will want to make you have all
              it takes to put your best foot forward.
            </p>
          </div>
          <div className="jobs_text-content_list_item">
            <h6 className="title">Resume Writing</h6>
            <p>
              Many countries around the globe require you to submit your cv for
              a job or internship application. Always make sure your cv is
              tailored to the job you are applying for. Your resume is the first
              impression of you.
            </p>
          </div>
        </div>
      </AnimateComponent>
    </div>
  );
}
