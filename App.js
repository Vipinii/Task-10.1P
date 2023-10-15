import React from "react";
import Navigation from "./Navigation";
import Background from "./Background";
import CardComponent from "./CardComponent";
import { articleCreators, tutorialCreators } from "./creator"; 
import CenteredButton from "./CenteredButton"; 
import LowerNav from "./LowerNav"; 
import Footer from "./Footer"; 

function App() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Background />
      
      {/* Display Articles */}
      <p className="font-monospace text-center" style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '40px', marginBottom: '40px'}}>Featured Articles</p>
      <div className="d-flex justify-content-center">
        {articleCreators.map((item, index) => (
          <CardComponent
            key={0}
            image={item.image}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
            textEnd={item.textEnd}
          />
        ))}
      </div>

      {/* "See all articles" button */}
      <div>
        <CenteredButton user_input="See all articles" />
      </div>
      
      {/* Display Tutorials */}
      <p className="font-monospace text-center" style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '40px', marginBottom: '40px'}}>Featured Tutorials</p>
      <div className="d-flex justify-content-center">
        {tutorialCreators.map((item, index) => (
          <CardComponent
            key={index}
            image={item.image}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
            textEnd={item.textEnd}
          />
        ))}
      </div>

      {/*  all tutorials" button */}
      <div>
        <CenteredButton user_input="See all tutorials" />
      </div>
  
      <LowerNav />
      <Footer />
    </div>
  );
}

export default App;
