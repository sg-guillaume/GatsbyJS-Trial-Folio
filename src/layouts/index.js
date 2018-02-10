import React from "react";
import Link from "gatsby-link";
import Logos from "../components/icons";
import styles from "./test.module.css";

console.log(Logos);

const ListLink = props =>
	<Link to={props.to}>
		{props.children}
	</Link>

const test = function() {
	let test = Array.from(document.getElementsByTagName('body'));
	test[0].setAttribute('style', 'margin: 0;');
}

test();

export default ({ children }) => 
	<div>
		<header className={ styles.header }>		
			<nav className={ styles.nav }>
				<ListLink to="/">{Logos.home}</ListLink>
				<ListLink to="/about/">{Logos.about}</ListLink>
				<ListLink to="/projects/">{Logos.worker}</ListLink>
			</nav>
		</header>
				{ children() }
		<footer className={ styles.footer }>
			<section className={ styles.menu }>
				<a href="#">{Logos.linkedin}</a>
				<a href="#">{Logos.github}</a>			
				<a href="#">{Logos.auction}</a>
			</section>
		</footer>

	</div>