import React from "react";
import UCFLogo from "../assets/UCFLogo.png";
import "./Home.css";

export default function Resume() {
  return (
    <div
      style={{
        backgrounddivor: "white",
        color: "black",
        padding: "3rem 2rem 2rem 3rem",
      }}
    >
      <div>
        <div className="mb-4">
          <div xl={2}>
            <img
              src={UCFLogo}
              alt={"UCF Logo"}
              style={{ maxHeight: 100 }}
              className="sm-photo-height"
              rounded
            ></img>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>
              <i>Will Mitchell</i>
            </h1>
            <p>
              wmitch34@gmail.com |{" "}
              <a href={"https://github.com/wmitch34"} target={"_blank"}>
                GitHub
              </a>{" "}
              | (407) 790-0679
            </p>
          </div>
          <div xl={2}>{""}</div>
        </div>

        <div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>Profile</h2>
            <p>
              Experienced college graduate pursuing a software engineering
              position where I can leverage my technical expertise and
              interpersonal skills to build great software and contribute to a
              great team. Seeking a challenging position where I can develop
              creative solutions while continuously expanding my knowledge base,
              skill set, and functional experience.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>Skills</h2>
            <div>
              <div>
                <div>JavaScript / TypeScript</div>
                <div>CSS</div>
                <div>Java</div>
                <div>UX / UI Design</div>
              </div>
              <div>
                <div>React JS</div>
                <div>HTML</div>
                <div>SQL</div>
                <div>Teaching / Instruction</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>Project Highlights</h2>
            <p style={{ fontWeight: "bold" }}>
              “Tanknicians” Management Portal - Web Application, Front-end
              Developer
            </p>
            <ul>
              <li>
                divlaborated with a team of five to develop a full stack web
                application with a cross-platform mobile app.
              </li>
              <li>
                Designed a user-friendly UI with CRUD operations and data
                visualization using React JS, Material UI, and Chart JS
              </li>
              <li>
                Retrieved, formatted, and displayed JSON data from a Node JS
                server with Express API and SQL relational database.
              </li>
              <li>
                Developed, tested, and documented code using Confluence, Jira,
                and Agile methodologies.
              </li>
              <li>
                Met and beat deadlines throughout the one year timeline from
                inception to deployment.
              </li>
            </ul>
            <p style={{ fontWeight: "bold" }}>
              “My Game List” Online Game Library - Web Application, Back-end
              Developer
            </p>
            <ul>
              <li>
                Implemented JavaScript Express API connected to a MongoDB
                database.
              </li>
              <li>
                Designed routing system with restricted API routes using JSON
                Web Token.
              </li>
              <li>
                divlaborated with a seven-member team to implement the API into
                a MERN stack application with mobile app.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>Experience</h2>

            <div>
              <div style={{ fontWeight: "bold" }}>
                <div style={{ maxWidth: "fit-content" }}>
                  <p>Deloitte Consulting</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>Summer Solutions Scholar (Software Developer)</p>
                </div>
                <div style={{ maxWidth: "fit-content" }}>
                  <p style={{ textAlign: "right" }}>June 2023 - Aug 2023</p>
                </div>
              </div>
            </div>

            <ul>
              <li>
                Participated in a 10-week internship program as a software
                developer on a 'Government and Public Services' project.
              </li>
              <li>
                Analyzed an Enterprise Java web application and addressed
                documented defects with a Confluence-Jira workflow.
              </li>
              <li>
                Tested software changes through front-end demos and 'SQL
                Developer' database interface.
              </li>
              <li>
                divlaborated with development, testing, and functional teams to
                push code changes to a remote repository.
              </li>
              <li>
                Honed interpersonal skills through 'Communication Gyms' and
                'Diversity, Equity, and Inclusivity' seminars for professional
                development.
              </li>
            </ul>

            <div>
              <div style={{ fontWeight: "bold" }}>
                <div style={{ maxWidth: "fit-content" }}>
                  <p>University of Central Florida</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>Undergraduate Learning Assistant (TA)</p>
                </div>
                <div style={{ maxWidth: "fit-content" }}>
                  <p style={{ textAlign: "right" }}>Sept 2022 - Dec 2022</p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                Worked with Computer Science I students to help them grasp
                fundamental programming concepts such as data structures,
                algorithms, and memory management using the C programming
                language.
              </li>
              <li>
                Instructed students in both one-on-one and group meetings during
                my in-person office hours.
              </li>
              <li>Set and maintained my own schedule.</li>
              <li>
                Assisted the instructor during exam days by ensuring an ideal
                testing environment for a full lecture hall.
              </li>
            </ul>
            <div>
              <div style={{ fontWeight: "bold" }}>
                <div style={{ maxWidth: "fit-content" }}>
                  <p>Marlow's Tavern</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p>Bartender | Trainer</p>
                </div>
                <div style={{ maxWidth: "fit-content" }}>
                  <p style={{ textAlign: "right" }}>Feb 2021 - Present</p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                Developed interpersonal communication skills while working with
                a large staff and hundreds of guests.
              </li>
              <li>
                Took a leadership role as the most senior certified
                Bartender-trainer in the tavern.
              </li>
              <li>
                Learned new skills by pursuing advancement opportunities such as
                the bartending and trainer positions.
              </li>
              <li>
                Observed and followed food safety guidelines to ensure the
                health and safety of each guest that visits the tavern.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>Eeducation</h2>
            <div>
              <div>
                <div>Bachelor of Science, Computer Science</div>
                <div style={{ textAlign: "center" }}>
                  University of Central Florida
                </div>
                <div style={{ textAlign: "right" }}>December 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
