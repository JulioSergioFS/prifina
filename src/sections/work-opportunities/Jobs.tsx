import { useState } from "react";
import Select from "react-select";
import { AnimateComponent } from "../../components/AnimateComponent";
import { jobTypes } from "../../constants/jobTypes";
import { jobs } from "../../constants/jobs";
import "../../styles/sections/work-opportunities/jobs.scss";

type InputType = {
  location: string | undefined;
  name: string | undefined;
  type: string[] | undefined;
};

export function Jobs() {
  const [inputs, setInputs] = useState<InputType>({
    location: undefined,
    name: undefined,
    type: undefined,
  });
  const [jobSelectedIndex, setJobSelectedIndex] = useState<number | undefined>(
    undefined
  );

  const selectedJob =
    jobSelectedIndex !== undefined ? jobs[jobSelectedIndex] : undefined;

  const jobsFiltered = jobs.filter(
    (job) =>
      (!inputs.location ||
        job.location.toLowerCase().includes(inputs.location.toLowerCase())) &&
      (!inputs.name ||
        job.name.toLowerCase().includes(inputs.name.toLowerCase())) &&
      (!inputs.type ||
        inputs.type.length === 0 ||
        inputs.type.includes(job.type))
  );

  return (
    <div className="content jobs">
      {!selectedJob ? (
        <>
          <AnimateComponent
            className="jobs_search"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            }}
          >
            <div className="jobs_search_content">
              <p>Search by</p>
              <div className="input-list">
                <div className="input-with-icon input-fix-width">
                  <img
                    src="logos/input/location.svg"
                    alt="Ícone de localização"
                  />
                  <input
                    placeholder="Location"
                    onChange={(event) =>
                      setInputs((prevData) => ({
                        ...prevData,
                        location: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="input-with-icon input-fix-width">
                  <img src="logos/input/search.svg" alt="Ícone de pesquisa" />
                  <input
                    placeholder="Job Title"
                    onChange={(event) =>
                      setInputs((prevData) => ({
                        ...prevData,
                        name: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className="input-with-icon">
                  <img src="logos/input/search.svg" alt="Ícone de pesquisa" />
                  <Select
                    isMulti
                    options={jobTypes}
                    className="input-select"
                    classNamePrefix="input-select"
                    placeholder="Job Type"
                    onChange={(event) =>
                      setInputs((prevData) => ({
                        ...prevData,
                        type: event.map((item) => item.value),
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </AnimateComponent>
          <AnimateComponent
            className="jobs_list"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
          >
            <div className="jobs_list_content">
              {jobsFiltered.length === 0 ? (
                <div className="jobs_list_content_not-found">
                  <p>No jobs found with these filters</p>
                </div>
              ) : (
                <>
                  <div className="jobs_list_content_opportunities">
                    {jobsFiltered.map((job, index) => (
                      <div
                        className="jobs_list_content_opportunities_job"
                        onClick={() => setJobSelectedIndex(index)}
                      >
                        <h4>{job.name}</h4>
                        <div>
                          <h6>{job.company}</h6>
                          <p>
                            {
                              jobTypes[
                                jobTypes.findIndex(
                                  (jobType) => jobType.value === job.type
                                )
                              ].label
                            }
                          </p>
                          <i>
                            {job.currentlyHiring
                              ? "Currently Hiring"
                              : "No longer accepting Applicants"}
                          </i>
                        </div>
                        <div className="jobs_list_content_opportunities_job_location">
                          <img
                            src="logos/input/location.svg"
                            alt="Ícone de localização"
                          />
                          <p>{job.location}</p>
                        </div>
                        <h3>${job.salary}/hour</h3>
                      </div>
                    ))}
                  </div>
                  <button>See more</button>
                </>
              )}
            </div>
          </AnimateComponent>
          <AnimateComponent
            className="jobs_text-content"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <div className="jobs_text-content_content">
              <div className="jobs_text-content_content_list">
                <div className="jobs_text-content_content_list_item">
                  <h6 className="title">Country Work Guides</h6>
                  <p>
                    The search to find a job can vary greatly depending on what
                    country you are searching for a job in. With competition as
                    fierce as it is in today&#39;s job market, you will want to
                    make you have all it takes to put your best foot forward.
                  </p>
                </div>
                <div className="jobs_text-content_content_list_item">
                  <h6 className="title">Resume Writing</h6>
                  <p>
                    Many countries around the globe require you to submit your
                    cv for a job or internship application. Always make sure
                    your cv is tailored to the job you are applying for. Your
                    resume is the first impression of you.
                  </p>
                </div>
              </div>
            </div>
          </AnimateComponent>
        </>
      ) : (
        <div className="jobs_details">
          <div className="jobs_details_content">
            <h3>
              {selectedJob.name} at {selectedJob.company} in{" "}
              {selectedJob.location}
            </h3>
            <div className="jobs_details_content_description">
              <h4>What are you going to do</h4>
              <p>
                Our brand Med soft is in need of a mechanical engineer who will
                work along side with the engineering team to handle every
                mechanical operations.
              </p>
              <p>
                Your primary focus is to participate in labs, complete
                assignments, and work under the supervision of faculty members
                or researchers in academic institutions. You will assist in
                research projects, conduct experiments, collect data, and
                contribute to ongoing studies or investigations.
              </p>
              <p>
                Analyze Engineering problems, performing calculations, using
                software tools, or conducting simulations.
              </p>
              <p>
                You will participate in extracurricular activities, workshops,
                seminars, or engineering societies to enhance their skills,
                network with professionals, and stay updated with the latest
                advancements in their field.
              </p>
              <p>
                You are also required to document your work, maintain records of
                experiments or projects, and present your findings in reports or
                presentations.
              </p>
            </div>
            <div className="jobs_details_content_requirements">
              <h4>Job Requirements</h4>
              <p>
                Currently pursuing a Bachelors degree in Mechanical Engineering
                or any related Course,
              </p>
            </div>
            <div className="jobs_details_content_skills">
              <h4>Key Skills</h4>
              <ul>
                <li>Functional safety design standards and principles</li>
                <li>Applicable industrial legislation and standards</li>
                <li>Cyber risk to Operational Technology</li>
                <li>Development of design specifications</li>
                <li>Engineering Design Substantiation</li>
                <li>Ability to understand and interrogate PLC code</li>
                <li>Familiar with C&I CAD drawings standards</li>
                <li>Strong communication and stakeholder management</li>
                <li>
                  Self-starter with ability to work in a passionate engineering
                  environment
                </li>
                <li>Understand responsibilities under the CDM regulations</li>
              </ul>
            </div>

            <div className="jobs_details_content_actions">
              <button>Apply on company&#39;s website</button>
              <button
                className="button-secondary"
                onClick={() => setJobSelectedIndex(undefined)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
