import React from "react"

import css3 from "./css3.svg";
import html5 from "./html5.svg";
import gatsby from "./gatsby.svg";
import javascript from "./javascript.svg";
import mysql from "./mysql.svg";
import php from "./php.svg";
import symfony from "./symfony.svg";
import wordpress from "./wordpress.svg";
import linux from "./linux.svg";
import about from "./about.svg";
import auction from "./auction.svg";
import email from "./email.svg";
import github from "./github.svg";
import home from "./home.svg";
import linkedin from "./linkedin.svg";
import worker from "./worker.svg";

const Logos = {
	
		css3: <img src={css3} width="28" height="28" alt="logo-css3" />,
		html5: <img src={html5} width="28" height="28" alt="logo-html5" />,
		gatsby: <img src={gatsby} width="28" height="28" alt="logo-gatsbyjs" />,
		javascript: <img src={javascript} width="28" height="28" alt="logo-javascript" />,
		mysql: <img style={{ backgroundColor: `#4479A1` }} src={mysql} width="28" height="28" alt="logo-mysql" />,
		php: <img src={php} width="28" height="28" alt="logo-php" />,
		symfony: <img src={symfony} width="28" height="28" alt="logo-symfony" />,
		wordpress: <img style={{ backgroundColor: `#21759B` }} src={wordpress} width="28" height="28" alt="logo-wordpress" />,
		linux: <img src={linux} width="28" height="28" alt="logo-linux" />,
		about: <img src={about} width="28" height="28" alt="about" />,
		auction: <img src={auction} width="28" height="28" alt="terms of use" />,
		email: <img src={email} width="28" height="28" alt="contact" />,
		github: <img src={github} width="28" height="28" alt="github" />,
		home: <img src={home} width="28" height="28" alt="home" />,
		linkedin: <img src={linkedin} width="28" height="28" alt="linkedin" />,
		worker: <img src={worker} width="28" height="28" alt="projects" />,
	
}

export default Logos;