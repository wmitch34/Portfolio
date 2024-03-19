import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import UCFLogo from "../assets/UCFLogo.png";
import "./Home.css";

export default function Resume() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "3rem 2rem 2rem 3rem",
      }}
    >
      <Container>
        <Row className="mb-4">
          <Col xl={2}>
            <Image
              src={UCFLogo}
              alt={"UCF Logo"}
              style={{ maxHeight: 100 }}
              className="sm-photo-height"
              rounded
            ></Image>
          </Col>
          <Col style={{ textAlign: "center" }}>
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
          </Col>
          <Col xl={2}>{""}</Col>
        </Row>

        <Row>
          <Col>
            <h2 style={{ fontWeight: "bold" }}>Profile</h2>
            <p>
              Experienced college graduate pursuing a software engineering
              position where I can leverage my technical expertise and
              interpersonal skills to build great software and contribute to a
              great team. Seeking a challenging position where I can develop
              creative solutions while continuously expanding my knowledge base,
              skill set, and functional experience.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontWeight: "bold" }}>Skills</h2>
            <Container>
              <Row>
                <Col>JavaScript / TypeScript</Col>
                <Col>CSS</Col>
                <Col>Java</Col>
                <Col>UX / UI Design</Col>
              </Row>
              <Row>
                <Col>React JS</Col>
                <Col>HTML</Col>
                <Col>SQL</Col>
                <Col>Teaching / Instruction</Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontWeight: "bold" }}>Project Highlights</h2>
            <p style={{ fontWeight: "bold" }}>
              “Tanknicians” Management Portal - Web Application, Front-end
              Developer
            </p>
            <ul>
              <li>
                Collaborated with a team of five to develop a full stack web
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
                Collaborated with a seven-member team to implement the API into
                a MERN stack application with mobile app.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontWeight: "bold" }}>Experience</h2>

            <Container>
              <Row style={{ fontWeight: "bold" }}>
                <Col>
                  <p>Deloitte Consulting</p>
                </Col>
                <Col>
                  <p>Summer Solutions Scholar (Software Developer)</p>
                </Col>
                <Col>
                  <p>June 2023 - Aug 2023</p>
                </Col>
              </Row>
            </Container>

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
                Collaborated with development, testing, and functional teams to
                push code changes to a remote repository.
              </li>
              <li>
                Honed interpersonal skills through 'Communication Gyms' and
                'Diversity, Equity, and Inclusivity' seminars for professional
                development.
              </li>
            </ul>

            <Container>
              <Row style={{ fontWeight: "bold" }}>
                <Col>
                  <p>University of Central Florida</p>
                </Col>
                <Col>
                  <p>Undergraduate Learning Assistant (TA)</p>
                </Col>
                <Col>
                  <p>Sept 2022 - Dec 2022</p>
                </Col>
              </Row>
            </Container>
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
            <Container>
              <Row style={{ fontWeight: "bold" }}>
                <Col>
                  <p>Marlow's Tavern</p>
                </Col>
                <Col>
                  <p>Bartender | Trainer</p>
                </Col>
                <Col>
                  <p>Feb 2021 - Present</p>
                </Col>
              </Row>
            </Container>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontWeight: "bold" }}>Eeducation</h2>
            <Container>
              <Row>
                <Col>Bachelor of Science, Computer Science</Col>
                <Col>University of Central Florida</Col>
                <Col>December 2023</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
