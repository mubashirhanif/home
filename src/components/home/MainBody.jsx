import React, { useState } from "react";
import Typist from "react-typist";
import {
  FirstName,
  LastName,
  MiddleName,
  devDesc,
  icons,
} from "../../editable-stuff/configurations.json";

const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-1">
            {FirstName + " " + MiddleName + " " + LastName}
          </h1>
          <Typist className="lead"> {devDesc}</Typist>
          {/* <br/><br/>
          <p className="lead"> <b>Passionate about changing the world with technology.</b></p> */}
          <div className="p-3">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
            <div className="p-3">
              <a href="https://stackexchange.com/users/3816561">
                <img 
                  src="https://stackexchange.com/users/flair/3816561.png" 
                  width="208" height="58" 
                  alt="profile for Minato on Stack Exchange, a network of free, community-driven Q&amp;A sites" 
                  title="profile for Minato on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                  />
              </a>
            </div>
          </div>
          {/* <div className="p-3">
            <a href="https://stackoverflow.com/users/5268235/minato">
              <img src="https://stackoverflow.com/users/flair/5268235.png" width="208" height="58" alt="profile for Minato at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Minato at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
            </a>
          </div> */}
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
