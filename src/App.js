import React from 'react'
import './App.css';

let caseStudies = {
  construct: {
    title: "Construct",
    date: "Sept 2019 / April 2020",
    topic: "UX Research / Design",
    context: "In an increasingly vast digital landscape,\
    how do self-directed learners stay motivated?",
    color: {backgroundColor : "var(--researchColor)"},
  },
  studentPortal: {
    title: "International Student Portal",
    date: "Fall 2017",
    topic: "UX Research / Service Design",
    context: "Studying abroad made intuitive",
    color: {backgroundColor : "var(--researchColor)"}
  },
  strive: {
    title: "Strive",
    date: "Spring 2019",
    topic: "Interaction Design / Installation Design",
    context: "Amplifying impactful conversations about UX Research",
    color: {backgroundColor : "var(--designColor)"},
  },
  oakvilleTrails: {
    title: "Oakville Trails",
    date: "Spring 2020",
    topic: "Design Sprint / Service Design",
    context: "Revitalizing Oakville's outdoor wayfinding & recreation",
    color: {backgroundColor : "var(--designColor)"},
  },
  pixelCloud: {
    title: "Pixel Cloud",
    date: "Winter 2018",
    topic: "Interaction Design / Physical Computing",
    context: "An ever-changing collaborative light source",
    color: {backgroundColor : "var(--ixdColor)"},
  },
  simm: {
    title: "Simmulakrum",
    date: "Spring 2019",
    topic: "Interaction Design / VR & AR",
    context: "Our World. Their Reality.",
    color: {backgroundColor : "var(--ixdColor)"},
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {focus: "construct"};

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    let list = document.getElementsByClassName('projectTitle');
    for(let proj of list) {
      proj.addEventListener("click", () => {
        this.setState({focus: proj.id});
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <main id="site">   
      <React.Fragment>
        <Menu/> 
        <Content focus={this.state.focus}/>
        <CaseStudies/>
      </React.Fragment> 
      </main>
           
    );
  }
}

function fadeOut(comp) {
  comp.classList.add('fadeAnimOut');
}
function fadeIn(comp) {
  comp.classList.add('fadeAnimIn');
}
function Menu() {

  
  return (
    <section id="menu">
      <picture class="flexCon">
        <img src="/images/landing/test.png"/>
      </picture>
      <h3 class="flexCon">Wesley Slade</h3>
      <p class="context flavour">Striving to make positive impact on the world
                by co-creating with the people who occupy it.</p>
      <h3 class="research workType">Research</h3>
      <div class="resRule"></div>
      <h4 class="projectTitle" id="construct">Construct</h4>
      <h4 class="projectTitle" id="studentPortal">Student Portal</h4>
      <h3 class="design workType">Design</h3>
      <div class="designRule"></div>
      <h4 class="projectTitle" id="strive">Strive</h4>
      <h4 class="projectTitle" id="oakvilleTrails">Oakville Trails</h4>
      <h3 class="ixd workType">Interactive</h3>
      <div class="ixdRule"></div>
      <h4 class="projectTitle" id="pixelCloud">Pixel Cloud</h4>
      <h4 class="projectTitle" id="simm">Simmulakrum</h4>

      <article class="personal">
        <div id="aboutRule" class="rule"></div>
        <h4 id="about" class="aboutTitle">About Me</h4>
        <h4 id="resume" class="aboutTitle">My Resume</h4>
      </article> 
    </section>
  );
}

function Content(props) {
  return (
        <section id="content">
            <header class="landing" id="construct_landing">
                <h1 class="research" style={{color: caseStudies[props.focus].color.backgroundColor}}>{caseStudies[props.focus].title}</h1>
                <h2>Sept 2019 / April 2020 - UX Research / Design</h2>
                <div class="rule"></div>
                <p class="context">In an increasingly vast digital landscape,
                    how do self-directed learners stay motivated?</p>
            </header>

            <footer id="cs_Links">
                <button type="button" id="button_CTA" style={caseStudies[props.focus].color}>View Case Study
                    <img alt="Clickable Arrow" src="/images/ui_elements/Icon open-arrow-right.png"/>
                </button>
                <button type="button" id="button_Project" onclick="constructPage()" style={caseStudies[props.focus].color}>View Live Project
                    <img alt="Clickable Arrow" src="/images/ui_elements/Icon open-arrow-right.png"/>
                </button>
            </footer>
        </section>    
  );
}

function CaseStudies() {
  return(
    <div>
    <article id="construct_CS" class="articleGrid">
      <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <picture class="flexCon">
                    <img class="articleLogo" src="/images/case studies/construct/ConstructLogo.png"/>
                </picture>
                <h3>Construct</h3>
                <h2>Sept 2019 / April 2020 - UX Research / Design</h2>
                <h4 class="csInfo">Part 2</h4>
                <h4 class="csInfo">Part 3</h4>
                <h4>Live Project</h4>
            </header>
            <p class="caseStudy">As part of my capstone project for Interaction Design, I conducted a research project
                on the topic of self-directed learning.
                In my first sprint, I used a broad range of research methods to discover and define my problem space,
                covering topics
                like education theories, flow state, the Window of Tolerance, EEG & brain wave technology and
                psychometric assessments.
                I interviewed post-secondary students who identified as self-directed learners and also collected photos
                of their work spaces.
                I synthesized insights key research findings and developed low fidelity prototypes addressing learner
                pain points.
                <br/>
                <br/>
                During my second sprint, I developed a psychometric assessment and conducted statistical analysis on the
                results;
                Developed and ran extensive usability testing sessions of digital learning resources while collecting
                brain-wave (EEG)
                and other bio-metric data.</p>
    </article>

    <article id="studentPortal_CS" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>Student Portal</h3>
                <h2>Fall 2017 - UX Research / Design</h2>
                <h4>Student Prototype</h4>
                <h4>Agent Prototype</h4>
            </header>
    </article>

    <article id="strive_CS" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>Strive</h3>
                <h2>Spring 2019 - UX Research / Design</h2>
                <h4>Demo Video</h4>
            </header>
    </article>

    <article id="oakvilleTrails_CS" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>Oakville Trails</h3>
                <h2>Spring 2020 - Design Sprint / Service Design</h2>
                <h4>Student Prototype</h4>
                <h4>Agent Prototype</h4>
            </header>
    </article>

    <article id="pixelCloud_CS" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>Pixel Cloud</h3>
                <h2>Winter 2018 - Interaction Design / Physical Computing</h2>
            </header>
    </article>

    <article id="simm_CS" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>Simmulakrum</h3>
                <h2>Spring 2019 - Interaction Design / VR & AR</h2>
                <h4>Gameplay Videos</h4>
            </header>
    </article>

    <article id="aboutWes" class="articleGrid">

            <h1 class="back">BACK</h1>

            <header class="articleInfo">
                <h3>About</h3>
                <h2>Fall 2020</h2>
            </header>
            <picture id="aboutWesAvatar">
                <img alt="Wesley Slade's Photo" src="/images/landing/test2.png"/>
            </picture>
            <div id="intro">
                <h4 class="h4alt">You can call me Wes</h4>
                <p class="caseStudy">
                    I'm a designer, educator, and former middle school dropout.
                    I've got an endlessly curious mind and I'm currently obsessed with
                    the future of design in the public sector and participatory design.
                </p>
                <h4 class="h4alt">
                    Fun fact: I spent more time in post-secondary than primary school.
                </h4>
            </div>

            <h4 class="h4alt">I'm a 2020 graduate of Sheridan's Honours Bachelor's of Interaction Design program. </h4>
            <p class="caseStudy">
                The highlights of which included being one of the inaugural
                tutors in the IXD Tutoring program;

                Helping facilitate the 2019 IXD orientation hackathon;

                And having my capstone project on self-directed learning nominated
                by my faculty to be published to Sheridan's research hub, Sheridan Source.
            </p>
            <h4 class="h4alt">
                I also was invited to speak about my eductional journey at Sheridan's Black Box Dialogues.
            </h4>


    </article>
    </div>
  );
}
export default App;
