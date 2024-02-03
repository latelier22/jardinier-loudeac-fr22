import React from 'react';
import Link from 'next/link';
import RootLayout from '../app/layout';
import Navbar from './NavBar';
import HeaderSimple from './headerSimple';
import Footer from './Footer';
import ImagesBar from './ImagesBar'
import ListeActionsGauche from './ListeActionsGauche';
import { listesActions } from './site';

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = 'Accueil';
  const pageDescription = 'Bienvenue sur le site de PRO COUVERTURE LOUDEAC';

  // Liste globale des actions avec les liens vers les pages correspondantes
  const globalActions = [
    
  ];


    // Déclarer les photos dans un tableau d'objets
    const photos = [
      
    ];


  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple photos = {photos} />
      {/* <ImagesBar/> */}
      
      <ListeActionsGauche  actions={listesActions[0].actions} listeTitle={listesActions[0].title} listeSubTitle={listesActions[0].subTitle} photo={listesActions[0].photo} gauche={true} bgColor="bg-sky-200"/>
    
      <ListeActionsGauche actions={listesActions[1].actions} listeTitle={listesActions[1].title} listeSubTitle={listesActions[1].subTitle} photo={listesActions[1].photo} gauche={false}/>
      <ListeActionsGauche actions={listesActions[2].actions} listeTitle={listesActions[2].title} listeSubTitle={listesActions[2].subTitle} photo={listesActions[2].photo} gauche={true} bgColor="bg-sky-200"/>
      <ListeActionsGauche actions={listesActions[3].actions} listeTitle={listesActions[3].title} listeSubTitle={listesActions[3].subTitle} photo={listesActions[3].photo} gauche={false}/>
    
     

      <Footer />
    </RootLayout>
  );
};

export default Home;
