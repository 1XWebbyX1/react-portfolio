import React from 'react'


class Cards extends React.Component {
  render(){
    return(
      <div class='row'>
      <div class='card'>
        <h3>Core</h3>
        <hr />
        <p>HTML<br />CSS<br />Javascript<br />Node.js</p>
      </div>
      <div class='card'>
        <h3>JS Frameworks</h3>
        <hr />
        <p>React<br />Redux<br />Express</p>
      </div>
      <div class='card'>
        <h3>JS libraries</h3>
        <hr />
        <p>jQuery<br />Three<br />GSAP</p>
      </div>
      <div class='card'>
        <h3>CSS <br/>Framework  and Preprocessor</h3>
        <hr />
        <p>Bootstrap<br />Sass</p>
      </div>
      <div class='card'>
        <h3>Package Manager and <br />Module Loader/Bundler</h3>
        <hr />
        <p>NPM<br />Webpack</p>
      </div>
      <div class='card'>
        <h3>Task Runners</h3>
        <hr />
        <p>Gulp<br />npm scripts</p>
      </div>
      <div class='card'>
        <h3>Version Control System</h3>
        <hr />
        <p>Git<br />GitHub</p>
      </div>
      <div class='card'>
        <h3>Testing Tools</h3>
        <hr />
        <p>Jest<br />Chai<br />Mocha<br />Enzyme<br />Sinon</p>
      </div>
      <div class='card'>
        <h3>Understanding of</h3>
        <hr />
        <p> ES6<br />RESTful API <br />Comand Line <br /> Responsive design<br /> Cross browser compatiblity<br />SEO design principles, acessibility<br /> and web development process <br/>(design, develop, test & deploy, analyze & maintain)</p>
      </div>
      <div class='card'>
        <h3>Tools</h3>
        <hr />
        <p>Atom<br />Adobe Illustrator and Photoshop<br />  working with Browser developer tools for debugging<br />Network Throttling with developer tools for better performance<br /> Page Speed Insights by Lighthouse to analyze web performance</p>
      </div>
      <div class='card'>
        <h3>More</h3>
        <hr />
        <p>Heroku<br />MongoDB<br />Mongoose<br />Java<br />PostgreSQL <br /> JDBC API<br />FontAwesome</p>
      </div>
      </div>
    )
  }
}


export default Cards;
