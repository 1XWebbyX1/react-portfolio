import React from 'react'


class Cards extends React.Component {
  render(){
    return(
      <div className='row'>
      <div className='card'>
        <h3>Core</h3>
        <hr />
        <p>HTML<br />CSS<br />Javascript<br />Node.js</p>
      </div>
      <div className='card'>
        <h3>JS Frameworks</h3>
        <hr />
        <p>React<br />Redux<br />Express</p>
      </div>
      <div className='card'>
        <h3>JS libraries</h3>
        <hr />
        <p>jQuery<br />Three<br />GSAP</p>
      </div>
      <div className='card'>
        <h3>CSS <br/>Framework  and Preprocessor</h3>
        <hr />
        <p>Bootstrap<br />Sass</p>
      </div>
      <div className='card'>
        <h3>Package Manager and <br />Module Loader/Bundler</h3>
        <hr />
        <p>NPM<br />Webpack</p>
      </div>
      <div className='card'>
        <h3>Task Runners</h3>
        <hr />
        <p>Gulp<br />npm scripts</p>
      </div>
      <div className='card'>
        <h3>Version Control System</h3>
        <hr />
        <p>Git<br />GitHub</p>
      </div>
      <div className='card'>
        <h3>Testing Tools</h3>
        <hr />
        <p>Jest<br />Chai<br />Mocha<br />Enzyme<br />Sinon</p>
      </div>
      <div className='card'>
        <h3>Understanding of</h3>
        <hr />
        <p> ES6<br />RESTful API <br />Comand Line <br /> Responsive design<br /> Cross browser compatiblity<br />Unit and Integration Testing<br />SEO design principles and acessibility</p>
      </div>
      <div className='card'>
        <h3>Tools</h3>
        <hr />
        <p>Atom<br />Heroku<br />Amazon Web Services (AWS)<br />Adobe Illustrator and Photoshop<br />Browser developer tools for debugging<br />Network Throttling with developer tools for better performance<br /> Page Speed Insights by Lighthouse to analyze web performance</p>
      </div>
      <div className='card'>
        <h3>More</h3>
        <hr />
        <p>MongoDB<br />Mongoose<br />Java<br />PostgreSQL <br /> JDBC API<br />FontAwesome</p>
      </div>
      </div>
    )
  }
}


export default Cards;
