import React from "react";

export const articleCreators = [
  
    {
      image: require('./images/mystery.jpg'), 
      cardTitle: 'Mysterious stories',
      cardText: (
        <span>
         Worlds most scary stories seen by people in real life.
          <br />
          <br />
          ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>5 &nbsp;&nbsp;&nbsp;Raman khanna</span>
        </span>
      ),
    
    },
  
    {
      image: require('./images/trans.webp'), 
      cardTitle: 'Top 10 Transformers movie',
      cardText: (
        <span>
         In this article we will discuss the top 10 transfomer movies.
          <br />
          <br />
          ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>4.5 &nbsp;&nbsp;&nbsp;Rajat kumar</span>
        </span>
      ),
     
    },
  
    {
      image: require('./images/AI.png'), 
      cardTitle: 'AI and Humans',
      cardText: (
        <span>
         In this article we will discuss the future of AI.
          <br />
          <br />
          ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>4 &nbsp;&nbsp;&nbsp;Vipin kumar</span>
        </span>
      ),
     
    },
    
];

export const tutorialCreators = [
  {
    image: require('./images/foot.jpg'), 
    cardTitle: 'How to use Youtube',
    cardText: (
      <span>
       In this video we see how we can use youtube to develop new skills.
        <br />
        <br />
        ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>5 &nbsp;&nbsp;&nbsp;Sahaj Paul</span>
      </span>
    ),
    
   
  },

  {
    image: require('./images/skate.jpeg'), 
    cardTitle: 'Skateboard tutorial',
    cardText: (
      <span>
        Lets learn how to skate to look cool in college.
        <br />
        <br />
        ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>3 &nbsp;&nbsp;&nbsp;Mr. skatty</span>
      </span>
    ),
    
  },

  {
    image: require('./images/basket.jpeg'), 
    cardTitle: 'Basketball tutorial',
    cardText: (
      <span>
       Learn basketball from basic to advance.
        <br />
        <br />
        ⭐️ <span style={{ fontWeight: 'bold',fontSize: '15px' }}>4 &nbsp;&nbsp;&nbsp;Jordan Sandhu</span>
      </span>
    ),
   
  },
  

];


