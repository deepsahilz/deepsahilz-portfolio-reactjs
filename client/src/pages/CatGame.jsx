import React, { useState } from 'react';

const CatGame = () => {
  const [lightOn, setLightOn] = useState(false);
  const [catAnimation, setCatAnimation] = useState('');

  const toggleLight = () => {
    setLightOn(!lightOn);

    // Random cat antics after turning the light on
    const randomCatActions = [
      'cat-walk',
      'cat-jump',
      'cat-swat',
    ];
    const randomAction = randomCatActions[Math.floor(Math.random() * randomCatActions.length)];

    setCatAnimation(randomAction);

    setTimeout(() => {
      // Reset cat animation after a short delay
      setCatAnimation('');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center font-sans p-6">
      <h1 className="text-3xl font-bold mb-6">404 - Page Not Found</h1>
      
      <div className="relative mb-6">
        <div className={`w-24 h-24 rounded-full ${lightOn ? 'bg-yellow-400' : 'bg-gray-300'} transition-colors duration-300`} />
      </div>
      
      <button 
        onClick={toggleLight} 
        className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-colors"
      >
        {lightOn ? "Turn off the light" : "Turn on the light"}
      </button>

      <div className="relative mt-8">
        <img 
          src="cat.png" 
          alt="Cat"
          className={`w-24 transition-all duration-1000 absolute bottom-0 left-0 ${catAnimation === 'cat-walk' ? 'animate-catWalk' : ''} 
            ${catAnimation === 'cat-jump' ? 'animate-catJump' : ''} 
            ${catAnimation === 'cat-swat' ? 'animate-catSwat' : ''}`}
        />
      </div>
    </div>
  );
};

export default CatGame;
