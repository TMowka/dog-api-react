import React from 'react';
import './AboutPage.css';

import Header from 'components/partial/Header/Header';
import Table from 'components/partial/Table/Table';
import Icon from 'components/partial/Icon/Icon';

const aboutPage = React.memo(() => (
  <div id="about-page">
    <Header title="About Me" />

    <section>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6">
            <h1>Who am I?</h1>
            <p>
              I am a 25 year old developer from Belarus with a big back-end development experience.
              <br />
              Over the past year I have been working as full-stack developer and have been improving
              my skills in the front-end area.
              <br />
              I know and tried technologies such as: React, Vue, Angular 2.
              But most of the time I work on React in conjunction with Node.js.
            </p>
          </div>
        </div>

        <div className="row justify-content-end mb-3">
          <div className="col-md-6">
            <h1 className="text-right">My Skills</h1>
            <Table>
              <Table.Head items={['Area', 'Skills']} className="thead-dark text-center" />
              <Table.Body>
                <Table.Row
                  items={['English',
                    <span>Intermediate - Upper Intermediate</span>
                  ]}
                />
                <Table.Row
                  items={['Backend',
                    <span>
                      Web API, OAuth, OAuth2.0, REST
                      <br />
                      .NET ASP MVC, ASP API2, Core, Dependency Injection, IIS, LinQ
                      <br />
                      Node.js Express.js, Koa.js, Passport.js
                    </span>
                  ]}
                />
                <Table.Row
                  items={['Database',
                    <span>
                      MSSQL, MySQL, Entity Framework, ADO.NET, Sequelize, Mongo
                    </span>
                  ]}
                />
                <Table.Row
                  items={['Frontend',
                    <span>
                      JavaScript ES8, jQuery, CSS3, SCSS, JSON, HTML5, XML, React.js, Redux,
                      Vue.js, Angular2
                    </span>
                  ]}
                />
                <Table.Row
                  items={['Blockchain',
                    <span>
                      Ethereum, Bitcoin, NEM, Solidity, Web3.js, Truffle.js,
                      openzeppelinsolidity.js, Hyperledger Composer, Hyperledger Fabric, Stellar
                    </span>
                  ]}
                />
                <Table.Row
                  items={['Other',
                    <span>
                      npm, yarn, eslint, AutoMapper, Swagger, Babel, Webpack, Mocha, Jest, Markdown,
                      GitHub, GitLab, Fiddler, Team Foundation Server, Postman, Git, Visual Studio,
                      Visual Studio Code
                    </span>
                  ]}
                />
              </Table.Body>
            </Table>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="d-flex flex-row justify-content-around align-items-center p-5">
              <a href="https://github.com/TMowka" target="_blank" rel="noopener noreferrer">
                <Icon name="github" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/tmowka/" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" className="social-icon" />
              </a>
              <a href="https://t.me/tmowka" target="_blank" rel="noopener noreferrer">
                <Icon name="telegram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
));

export default aboutPage;
