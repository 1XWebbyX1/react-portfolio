import React from 'react'


class Cards extends React.Component {
  render(){
    return(
      <div class='row'>
      <div class='card'>
        <h3>Core</h3>
        <hr />
        <p>HTML<br />CSS<br />Javascript</p>
      </div>
      <div class='card'>
        <h3>JS Frameworks</h3>
        <hr />
        <p>React<br />Redux</p>
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
        <p>npm<br />webpack</p>
      </div>
      <div class='card'>
        <h3>Task Runners</h3>
        <hr />
        <p>npm scripts<br />gulp</p>
      </div>
      <div class='card'>
        <h3>Version Control System</h3>
        <hr />
        <p>git<br />git hub</p>
      </div>
      <div class='card'>
        <h3>Knowledge of</h3>
        <hr />
        <p> ES6<br /> Responsive design<br /> Cross browser compatiblity<br /> good web performance including SEO principles and Acessibility<br /> working with command line</p>
      </div>
      <div class='card'>
        <h3>Tools</h3>
        <hr />
        <p>Adobe Illustrator and Photoshop<br /> Atom<br /> working with Browser developer tools for debugging<br /> optimized Images for web</p>
      </div>
      <div class='card'>
        <h3>More</h3>
        <hr />
        <p>Java<br /> FontAwesome<br /> Devicon</p>
      </div>
      </div>
    )
  }
}


export default Cards;
