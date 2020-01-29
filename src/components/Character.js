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
        <div className={styles.cardHeader}>
          <img className={styles.characterImage} src={image} />
          <div className={styles.nameDiv}>
            <h1>{name}</h1>
            <p>id: {idNumber} - created 2 years ago</p>
          </div>
        </div>
        <div className={styles.characterInfo}>
          <div className={styles.line}><p>STATUS</p><p className={styles.orangeText}>{status}</p></div>
          <div className={styles.line}><p>SPECIES</p><p className={styles.orangeText}>{species}</p></div>
          <div className={styles.line}><p>GENDER</p><p className={styles.orangeText}>{gender}</p></div>
          <div className={styles.line}><p>ORIGIN</p><p className={styles.orangeText}>{origin}</p></div>
          <div className={styles.noLine}><p>LAST<br />
            LOCATION</p><p className={styles.orangeText}>{lastLocation}</p></div>
        </div>
      </section>
    );
  }
}
