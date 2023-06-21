import React from "react";
import noyes from "../../editable-stuff/noyes_logo.png";
import folio3 from "../../editable-stuff/folio3_logo.png";
import BMW from "../../editable-stuff/BMW_logo.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={noyes}
                        alt="Noyes Technologies Logo"
                        width="250"
                        height="100"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Senior Software Engineer
                        <br/>
                        April 2021 - Present
                    </p>
                    {/* <h3>BMW Technologies</h3> */}
                </div>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={BMW}
                        alt="BMW AG Logo"
                        width="100"
                        height="100"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Computer Vision Research Intern
                        <br/>
                        July 2019 - July 2020
                    </p>
                    {/* <h3>BMW Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={folio3}
                        alt="folio3 logo"
                        width="250"
                        height="100"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Engineer  
                        <br/>
                        May 2015 - August 2016
                    </p>
                    {/* <h3>folio3</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;