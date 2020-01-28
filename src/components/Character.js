import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';


export default class Character extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    idNumber: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired
  }

  render() {
    const { image, name, idNumber, status, species, gender, origin, lastLocation } = this.props; 
    return (
      <section className={styles.characterSection}>
        <img className={styles.characterImage} src={image} />
        <p>{name}</p>
        <p>id: {idNumber} - created 2 years ago</p>
        <div className={styles.line}><p>STATUS</p><p>{status}</p></div>
        <div className={styles.line}><p>SPECIES</p><p>{species}</p></div>
        <div className={styles.line}><p>GENDER</p><p>{gender}</p></div>
        <div className={styles.line}><p>ORIGIN</p><p>{origin}</p></div>
        <div className={styles.line}><p>LAST 
          LOCATION</p><p>{lastLocation}</p></div>
      </section>
    );
  }
}
