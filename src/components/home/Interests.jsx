import React from "react";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Football</p>
                <img src="https://img.icons8.com/nolan/128/football2.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Food</p>
                <img src="https://img.icons8.com/nolan/128/meal.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Cooking</p>
                <img src="https://img.icons8.com/?size=128&id=vhup4fpYBSKa&format=png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Programing</p>
                <img src="https://img.icons8.com/?size=128&id=48250&format=png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Video Games</p>
                <img src="https://img.icons8.com/?size=128&id=43614&format=png"/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
