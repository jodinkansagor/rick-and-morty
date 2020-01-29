import React from 'react';
import Character from './Character.js';
import Header from './Header.js';
import Footer from './Footer.js';
import styles from './App.css';



const App = () => (
  <>
    <Header />
    <div className={styles.bigDiv}>
      <Character image="../../assets/82.jpeg" name="Cronenberg Rick" idNumber={82} status="unknown" species="Cronenberg" gender="Male" origin="Cronenberg Earth" lastLocation="Earth(C-137)" />
      <Character image="../../assets/158.jpeg" name="Hookah Alien" idNumber={158} status="Alive" species="Alien, Tuskfish" gender="unknown" origin="unknown" lastLocation="Interdimentional Customs" />
      <Character image="../../assets/172.jpeg" name="Jamey" idNumber={172} status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension" lastLocation="Earth (Replacement Dimension" />
      <Character image="../../assets/220.jpeg" name="Mega Fruit Farmer Rick" idNumber={220} status="Alive" species="Human" gender="Male" origin="unkown" lastLocation="Citadel of Rocks" />
      <Character image="../../assets/241.jpeg" name="Mr. Marklovitz" idNumber={214} status="Alive" species="Human" gender="Male" origin="Earth (C-137)" lastLocation="Earth (Replacement Dimension)" />
      <Character image="../../assets/259.jpeg" name="Pencilvester" idNumber={259} status="Dead" species="Alien, Parasite, Pencil" gender="Male" origin="unknown" lastLocation="Earth (Replacement Dimension)" />
      <Character image="../../assets/335.jpeg" name="Steve" idNumber={335} status="Alive" species="Human" gender="Male" origin="Earth (Replacement Dimension)" lastLocation="Earth (Replacement Dimension)" />
      <Character image="../../assets/387.jpeg" name="Zarbadar's Mytholog" idNumber={387} status="unkown" species="Mytholog" gender="Female" origin="Nuptia 4" lastLocation="Nuptia 4" />;
    </div>
    <Footer />
  </>
);

export default App;