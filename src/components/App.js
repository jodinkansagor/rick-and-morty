import React from 'react';
import styles from './App.css';
import Character from './Character.js';
import Header from './Header.js';
import Footer from './Footer.js';

// const Header = () => (
//   <header className={styles.Header}>
//     <nav>
//       <ul>
//         <li><a className={styles.active} href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Documentation</a></li>
//       </ul>
//     </nav>
//     <section>
//       <h1>The Rick And Morty Api</h1>
//       <h2>Hey, did you ever want to hold a Terry fold?</h2>
//     </section>
//   </header>
// );

// const Footer = () => (
//   <footer className={styles.Footer}>
//     <section className={styles.stats}>
//       <p>Characters: 493</p>
//       <p>Locations: 76</p>
//       <p>Episodes: 31</p>
//     </section>
//     <section className={styles.acknowledgment}>
//       <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
//     </section>
//   </footer>
// );

const App = () => (
  <>
    <Header />
    <Character image="../../assets/82,jpg" name="Cronenberg Rick" idNumber={82} status="unknown" species="Cronenberg" gender="Male" origin="Cronenberg Earth" lastLocation="Earth(C-137)" />
    <Character image="../../assets/158.jpg" name="Hookah Alien" idNumber={158} status="Alive" species="Alien, Tuskfish" gender="unknown" origin="unknown" lastLocation="Interdimentional Customs" />
    <Character image="../../assets/172.jpg" name="Jamey" idNumber={172} status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension" lastLocation="Earth (Replacement Dimension" />
    <Character image="../../assets/220.jpg" name="Mega Fruit Farmer Rick" idNumber={220} status="Alive" species="Human" gender="Male" origin="unkown" lastLocation="Citadel of Rocks" />
    <Character image="../../assets/241.jpg" name="Mr. Marklovitz" idNumber={214} status="Alive" species="Human" gender="Male" origin="Earth (C-137)" lastLocation="Earth (Replacement Dimension)" />
    <Character image="../../assets/259.jpg" name="Pencilvester" idNumber={259} status="Dead" species="Alien, Parasite, Pencil" gender="Male" origin="unknown" lastLocation="Earth (Replacement Dimension)" />
    <Character image="../../assets/335.jpg" name="Steve" idNumber={335} status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)" />
    <Character image="../../assets/387.jpg" name="Zarbadar's Mytholog" idNumber={387} status="unkown" species="Mytholog" gender="Female" origin="Nuptia 4" lastLocation="Nuptia 4" />;
    <Footer />
  </>
);

export default App;