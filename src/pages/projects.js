import React, { Component } from "react"

import styles from "./card-style.module.css";
import logos from "../components/icons";


class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {showFlip: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			showFlip: !prevState.showFlip
		}));
	}

	render() {

		return (

			<section className={styles.section + ' ' + (this.state.showFlip ? '' : styles.flipped)} onClick={this.handleClick}>
				<div className={styles.card + ' ' + styles.pile}>
					<h2 style={{ fontSize: `1rem` }}>{this.props.title}</h2>
						<article>
							{this.props.brief}
						</article>
						<aside>
							{this.props.logo1}
							{this.props.logo2}
						</aside>
				</div>
				<div className={styles.card + ' ' + styles.face}>
					<img src={this.props.siteScreen} alt={this.props.altSiteScreen} />
					<a href={this.props.url}>{this.props.siteName}</a>						
				</div>					
			</section>
		);
	}
}

export default () =>
<div className={styles.main}>
	<div className={styles.projects}>
		<Card
			title="Intégration d'une maquette"
			brief="brief du projet"
			logo1={logos.html5}
			logo2={logos.css3}
			siteScreen=""
			altSiteScreen="aperçu du site"
			url="http://webagency.digital-warz.eu"
			siteName="Webagency"
		/>
		<Card
			title="Créer un thème wordpress personnalisé"
			brief="brief du projet"
			logo1={logos.wordpress}
			siteScreen=""
			altSiteScreen="aperçu du site"
			url="http://office-tourisme.digital-warz.eu"
			siteName="Office du tourisme strasbourg"
		/>
		<Card
			title="Créer une plateforme de location de vélos"
			brief="brief du projet"
			logo1={logos.javascript}
			siteScreen=""
			altSiteScreen="aperçu du site"
			url="http://projet3.digital-warz.eu/projet3"
			siteName="RéservLib"
		/>

	</div>

</div>