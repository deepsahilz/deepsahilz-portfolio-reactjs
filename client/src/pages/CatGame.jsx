import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

// Pixel Art rendering helper
const PixelArt = ({ sprite, colors, pixelSize = 3, className = "" }) => {
  const width = sprite[0].length;
  const height = sprite.length;
  return (
    <svg 
      width={width * pixelSize} 
      height={height * pixelSize} 
      viewBox={`0 0 ${width} ${height}`} 
      style={{ shapeRendering: 'crispEdges' }}
      className={className}
    >
      {sprite.map((row, y) => 
        row.split('').map((char, x) => {
          if (char === '.' || char === ' ') return null;
          const color = colors[char] || '#000000';
          return (
            <rect 
              key={`${x}-${y}`} 
              x={x} 
              y={y} 
              width={1} 
              height={1} 
              fill={color} 
            />
          );
        })
      )}
    </svg>
  );
};

// ── PIXEL SPRITES DEFINITIONS (24x20 grid) ──
const PALETTE = {
  '.': 'transparent',
  'k': '#18181b', // Body black
  'g': '#3f3f46', // Highlight gray
  'w': '#ffffff', // Snout/paws white
  'y': '#fbbf24', // Yellow eyes/light/pillow trim
  'r': '#dc2626', // Red angry eyes/mattress
  'p': '#fda4af', // Pink ears/nose
  'b': '#b45309', // Brown wood hammer handle/bed wood
  's': '#71717a', // Steel hammer head
  'd': '#78350f', // Dark wood shadow
  'c': '#991b1b', // Crimson mattress shadow
};

const SPRITE_SLEEPING = [
  "........................",
  "........................",
  "........................",
  "........................",
  "........................",
  "........................",
  "........................",
  "..........kk............",
  "........kkggk...kk......",
  "......kkgggggk.kggk.....",
  ".....kggggggggkkggk.....",
  "....kgggggggggggggk.....",
  "....kggpgggggggggk......",
  "....kggwkkggggggk.......",
  "....kgggggggggkk........",
  ".....kkggggggk..........",
  ".......kkkkkk...........",
  "........................",
  "........................",
  "........................"
];

const SPRITE_BED = [
  "............................",
  "............................",
  "............................",
  "............................",
  "............................",
  "............................",
  "......kkkk..................",
  ".....kbddk..................",
  ".....kbddkkkkkkkkkkkkkk.....",
  ".....kbddkbbbbbbbbbbbbkk....",
  ".....kbddkkkkkkkkkkkkkdkk...",
  ".....kbddkwwwwyyrrrrrcdkk...",
  ".....kbddkwwwwyyrrrrrcdkk...",
  ".....kbddkkkkkkkkkkkkkdkk...",
  ".....kbddkdddddddddddddkk...",
  ".....kkkkkkkkkkkkkkkkkkkk...",
  ".......kddk.........kddk....",
  ".......kddk.........kddk....",
  ".......kkkk.........kkkk....",
  "............................"
];


const SPRITE_WAKING = [
  "........................",
  "..........kk....kk......",
  ".........kggk..kggk.....",
  "........kggggkkggggk....",
  "........kggggggggggk....",
  ".......kgggygggygggk....",
  ".......kgggyrgyrgggk....",
  ".......kggggpkkpgggk....",
  ".......kgggggppggggk....",
  ".......kggggkkkkgggk....",
  "........kgggggggggk.....",
  "........kgggggggggk.....",
  ".......kgggggggggggk....",
  "......kgggggggggggggk...",
  ".....kgggggggggggggggk..",
  "....kggk.kggggggg.kggk..",
  "....kkkk.kkkkkkkk.kkkk..",
  "........................",
  "........................",
  "........................"
];

const SPRITE_WALK1 = [
  "........................",
  "........kk....kk........",
  ".......kggk..kggk.......",
  "......kggggkkggggk......",
  "......kggggggggggk......",
  ".....kgggygggygggk......",
  ".....kgggyrgyrgggk......",
  ".....kggggpkkpgggk......",
  ".....kgggggppggggk......",
  "......kggggkkgggk.......",
  ".......kgggggggk........",
  ".......kgggggggk........",
  "......kgggggggggk.......",
  "....kkkgggggggggkkk.....",
  "...kggk.kggggg.kggk.....",
  "...kggk..kgggg..kgk.....",
  "...kkk...kggk...kk......",
  "........kggk............",
  "........kk..............",
  "........................"
];

const SPRITE_WALK2 = [
  "........................",
  "........kk....kk........",
  ".......kggk..kggk.......",
  "......kggggkkggggk......",
  "......kggggggggggk......",
  ".....kgggygggygggk......",
  ".....kgggyrgyrgggk......",
  ".....kggggpkkpgggk......",
  ".....kgggggppggggk......",
  "......kggggkkgggk.......",
  ".......kgggggggk........",
  ".......kgggggggk........",
  "......kgggggggggk.......",
  "....kkkgggggggggkkk.....",
  ".....kggk.kggggk.kggk...",
  ".....kgk..kgggg..kggk...",
  ".....kk...kggk...kkk....",
  "..........kggk..........",
  "..........kk............",
  "........................"
];

const SPRITE_SWAT = [
  "........................",
  "........kk....kk........",
  ".......kggk..kggk.......",
  "......kggggkkggggk......",
  "......kggggggggggk......",
  ".....kgggygggygggk......",
  ".....kgggyrgyrgggk......",
  ".....kggggpkkpgggk......",
  ".....kgggggppggggk......",
  "..kkkkkggggkkgggk.......",
  ".kwwwk.kgggggggk........",
  "..kkk..kgggggggk........",
  "......kgggggggggk.......",
  "....kkkgggggggggkkk.....",
  "...kggk.kggggg.kggk.....",
  "...kggk..kgggg..kgk.....",
  "...kkk...kggk...kk......",
  "........kggk............",
  "........kk..............",
  "........................"
];

const SPRITE_HAMMER_SWING = [
  "...........sssss........",
  "...........sssss........",
  ".............b..........",
  "........kk...bkk........",
  ".......kggk.kbgk........",
  "......kggggkkbggk.......",
  "......kggggggggggk......",
  ".....kgggygggygggk......",
  ".....kgggyrgyrgggk......",
  ".....kggggpkkpgggk......",
  ".....kgggggppggggk......",
  "......kggggkkgggk.......",
  ".......kgggggggk........",
  ".......kgggggggk........",
  "......kgggggggggk.......",
  "....kkkgggggggggkkk.....",
  "...kggk.kggggg.kggk.....",
  "...kggk..kgggg..kgk.....",
  "...kkk...kggk...kk......",
  "........kkkk............"
];

const SPRITE_HAMMER_STRIKE = [
  "........................",
  "........kk....kk........",
  ".......kggk..kggk.......",
  "......kggggkkggggk......",
  "......kggggggggggk......",
  ".....kgggygggygggk......",
  ".....kgggyrgyrgggk......",
  ".....kggggpkkpgggk......",
  "....bbbbbbgppggggk......",
  "ssssskkggggkkgggk.......",
  "sssssk.kgggggggk........",
  "sssss..kgggggggk........",
  "......kgggggggggk.......",
  "....kkkgggggggggkkk.....",
  "...kggk.kggggg.kggk.....",
  "...kggk..kgggg..kgk.....",
  "...kkk...kggk...kk......",
  "........kggk............",
  "........kk..............",
  "........................"
];

// Synthesize retro bleeps/bloops using Web Audio API
const playSynthSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'wake') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(440, ctx.currentTime + 0.08);
      osc.frequency.setValueAtTime(660, ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'swat') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'hit') {
      // White noise explosion approximation for hammer
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  } catch (e) {
    // Audio Context is blocked or not supported
  }
};

const CatGame = () => {
  const navigate = useNavigate();
  const [lightOn, setLightOn] = useState(false);
  const [catState, setCatState] = useState('sleeping'); // sleeping, waking, walking_to_switch, striking, walking_to_bed
  const [catX, setCatX] = useState(72); // start X position in percentage
  const [walkFrame, setWalkFrame] = useState(0);
  const [attackType, setAttackType] = useState('swat'); // swat, hammer
  const [attackFrame, setAttackFrame] = useState('hammer_swing'); // hammer_swing, hammer_strike
  const [annoyances, setAnnoyances] = useState(0);
  const [bubble, setBubble] = useState(null);
  const [screenShake, setScreenShake] = useState(false);
  const [zzzParticles, setZzzParticles] = useState([]);

  // Zzz Particles emitter
  useEffect(() => {
    if (catState !== 'sleeping') {
      setZzzParticles([]);
      return;
    }
    const interval = setInterval(() => {
      setZzzParticles(prev => [
        ...prev.map(p => ({ ...p, y: p.y - 3, opacity: p.opacity - 0.08, scale: p.scale + 0.06 })),
        { id: Math.random(), x: Math.random() * 16 - 8, y: 0, opacity: 1, scale: 0.7 }
      ].filter(p => p.opacity > 0));
    }, 700);

    return () => clearInterval(interval);
  }, [catState]);

  // Main Cat Logic loop
  useEffect(() => {
    let moveInterval;
    let walkInterval;

    if (catState === 'walking_to_switch') {
      walkInterval = setInterval(() => {
        setWalkFrame(f => (f === 0 ? 1 : 0));
      }, 130);

      moveInterval = setInterval(() => {
        setCatX(x => {
          if (x <= 13) {
            clearInterval(moveInterval);
            clearInterval(walkInterval);
            setCatState('striking');
            return 13;
          }
          // The cat runs faster if annoyed!
          const speed = annoyances >= 3 ? 1.6 : 1.1;
          return x - speed;
        });
      }, 30);
    } else if (catState === 'walking_to_bed') {
      walkInterval = setInterval(() => {
        setWalkFrame(f => (f === 0 ? 1 : 0));
      }, 160);

      moveInterval = setInterval(() => {
        setCatX(x => {
          if (x >= 72) {
            clearInterval(moveInterval);
            clearInterval(walkInterval);
            setCatState('sleeping');
            return 72;
          }
          return x + 1.0;
        });
      }, 30);
    }

    return () => {
      clearInterval(moveInterval);
      clearInterval(walkInterval);
    };
  }, [catState, annoyances]);

  // Handle striking phase
  useEffect(() => {
    if (catState === 'striking') {
      // Determine attack style: every 3rd irritation uses the giant hammer
      const chosenAttack = (annoyances + 1) % 3 === 0 ? 'hammer' : 'swat';
      setAttackType(chosenAttack);
      setAttackFrame('hammer_swing');

      if (chosenAttack === 'swat') {
        playSynthSound('swat');
        // Swat sequence
        setTimeout(() => {
          setLightOn(false);
          setBubble("SWAT!");
          playSynthSound('click');
          setAnnoyances(a => a + 1);

          setTimeout(() => {
            setBubble(null);
            setCatState('walking_to_bed');
          }, 500);
        }, 400);
      } else {
        // Hammer sequence
        playSynthSound('swat');
        setTimeout(() => {
          setAttackFrame('hammer_strike');
          setLightOn(false);
          playSynthSound('hit');
          playSynthSound('click');
          setScreenShake(true);
          setBubble("SLAM!!");
          setAnnoyances(a => a + 1);

          setTimeout(() => {
            setScreenShake(false);
          }, 250);

          setTimeout(() => {
            setBubble(null);
            setCatState('walking_to_bed');
          }, 600);
        }, 650);
      }
    }
  }, [catState]);

  const toggleLight = () => {
    if (catState !== 'sleeping') return; // Cat is busy!
    
    playSynthSound('click');
    const newLightState = !lightOn;
    setLightOn(newLightState);

    if (newLightState) {
      setCatState('waking');
      playSynthSound('wake');
      
      const reactions = ["💢", "!", "MEOW?!", "HISS!", "NO!"];
      const r = reactions[Math.min(annoyances, reactions.length - 1)];
      setBubble(r);

      setTimeout(() => {
        setBubble(null);
        setCatState('walking_to_switch');
      }, 700);
    }
  };

  // Get active sprite
  const getCatSprite = () => {
    switch (catState) {
      case 'sleeping':
        return SPRITE_SLEEPING;
      case 'waking':
        return SPRITE_WAKING;
      case 'walking_to_switch':
      case 'walking_to_bed':
        return walkFrame === 0 ? SPRITE_WALK1 : SPRITE_WALK2;
      case 'striking':
        if (attackType === 'swat') return SPRITE_SWAT;
        return attackFrame === 'hammer_swing' ? SPRITE_HAMMER_SWING : SPRITE_HAMMER_STRIKE;
      default:
        return SPRITE_SLEEPING;
    }
  };

  // Get irritation label
  const getTemperLabel = () => {
    if (annoyances === 0) return "CALM & SLEEPY";
    if (annoyances === 1) return "SLIGHTLY ANNOYED";
    if (annoyances === 2) return "VERY GRUMPY";
    if (annoyances === 3) return "EXTREMELY AGITATED";
    return "FURIOUS DEMON";
  };

  // Get temper bar width
  const getTemperPercent = () => {
    return Math.min(annoyances * 20, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 font-sans text-center p-6 text-zinc-100 relative overflow-hidden select-none">
      <SEO 
        title="404 - Retro Arcade" 
        description="The page you are looking for does not exist. Try playing with the pixel cat instead!" 
        noIndex={true} 
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,24,27,0.1)_0%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />

      {/* ── RETRO MONITOR CABIN ── */}
      <div 
        className={`w-full max-w-4xl aspect-[2/1] bg-[#0c0c0e] border-[12px] border-zinc-800 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 flex flex-col justify-between ${
          screenShake ? 'animate-[shake_0.25s_infinite]' : ''
        }`}
        style={{
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,1)'
        }}
      >
        {/* Style block for shake keyframes */}
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translate(0, 0); }
            20% { transform: translate(-3px, 2px); }
            40% { transform: translate(3px, -2px); }
            60% { transform: translate(-2px, -2px); }
            80% { transform: translate(2px, 3px); }
          }
        `}</style>

        {/* Ambient Overlay to simulate Light Bulb ON */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 ${
            lightOn ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle at 76% 20%, rgba(250, 204, 21, 0.28) 0%, rgba(0,0,0,0) 70%)'
          }}
        />

        {/* ── HUD / TOP BAR ── */}
        <div className="w-full bg-[#121215] border-b-2 border-zinc-800 px-4 py-2.5 flex items-center justify-between text-left font-mono z-10 text-[10px] tracking-wider select-none text-zinc-450">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-650 animate-pulse" />
            <span className="text-red-500 font-bold tracking-wider">ERROR 404: PAGE NOT FOUND</span>
          </div>

          <div className="flex gap-6">
            <div>
              IRRITATIONS: <span className="text-[#9f0] font-bold">{annoyances}</span>
            </div>
            <div>
              POWER: <span className={lightOn ? "text-yellow-400 animate-pulse" : "text-zinc-650"}>{lightOn ? "ON" : "OFF"}</span>
            </div>
          </div>
        </div>

        {/* ── STAGE / SCENERY ── */}
        <div className="flex-1 w-full relative">
          
          {/* Ground line */}
          <div className="absolute bottom-[10%] left-0 right-0 h-0.5 bg-zinc-850" />
          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-[#08080a] border-t border-zinc-900" />

          {/* Wall light switch plate */}
          <div className="absolute left-[8%] bottom-[20%] flex flex-col items-center">
            {/* Lever Switch */}
            <div 
              onClick={toggleLight}
              className={`w-8 h-12 bg-zinc-905 border-2 border-zinc-700 rounded-md relative flex items-center justify-center cursor-pointer shadow-[0_4px_0_#27272a] hover:scale-105 active:scale-95 transition-all ${
                catState !== 'sleeping' ? 'cursor-not-allowed opacity-80' : ''
              }`}
            >
              <div className="absolute inset-x-1.5 top-1 bottom-1 bg-black/40 rounded-sm" />
              {/* Toggle switch handle */}
              <div 
                className={`w-3 h-5 rounded transition-all duration-150 absolute ${
                  lightOn 
                    ? '-translate-y-2.5 bg-yellow-400 border border-yellow-300 shadow-[0_0_8px_#facc15]' 
                    : 'translate-y-2.5 bg-zinc-600 border border-zinc-700 shadow-inner'
                }`}
              />
            </div>
            <span className="text-[7px] font-mono text-zinc-500 mt-2 font-bold tracking-widest">LIGHTS</span>
          </div>

          {/* Hanging light bulb */}
          <div className="absolute top-0 left-[75%] flex flex-col items-center pointer-events-none">
            {/* Cord */}
            <div className="w-0.5 h-14 bg-zinc-750" />
            {/* Socket */}
            <div className="w-3 h-2 bg-zinc-600 border border-zinc-500 rounded-sm" />
            {/* Bulb body */}
            <div className={`relative w-6 h-8 rounded-b-full transition-colors duration-200 border-2 ${
              lightOn ? 'bg-yellow-200 border-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.55)]' : 'bg-zinc-800 border-zinc-700'
            }`}>
              <div className={`w-1.5 h-2 border-t border-x mx-auto mt-1 rounded-sm ${
                lightOn ? 'border-yellow-100' : 'border-zinc-600'
              }`} />
            </div>
          </div>

          {/* Cat Bed */}
          <div className="absolute bottom-[10.5%] left-[67%] pointer-events-none z-0">
            <PixelArt 
              sprite={SPRITE_BED} 
              colors={PALETTE} 
              pixelSize={2.8} 
            />
          </div>

          {/* Speech Bubble / Warning */}
          {bubble && (
            <div 
              className="absolute bg-white text-zinc-950 font-mono text-[9px] font-bold py-1 px-2.5 rounded-lg border-2 border-zinc-950 shadow-md pointer-events-none z-10 transition-transform flex items-center justify-center animate-bounce"
              style={{
                left: `calc(${catX}% + 2px)`,
                bottom: catState === 'sleeping' || catState === 'waking' ? '57%' : '48%',
                transform: 'translateX(-50%)'
              }}
            >
              {bubble}
              {/* Tiny triangle */}
              <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white" />
              <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-zinc-950 -z-10" />
            </div>
          )}

          {/* Sleeping Particles */}
          {zzzParticles.map(p => (
            <span 
              key={p.id}
              className="absolute font-mono text-[9px] text-zinc-400 font-bold select-none pointer-events-none"
              style={{
                left: `calc(${catX}% + 26px + ${p.x}px)`,
                bottom: `calc(19.5% + 22px - ${p.y}px)`,
                opacity: p.opacity,
                transform: `scale(${p.scale})`
              }}
            >
              z
            </span>
          ))}

          {/* ── CAT CHARACTER ── */}
          <div 
            className={`absolute transition-[left] duration-300 ease-linear ${
              catState === 'walking_to_bed' ? 'scale-x-[-1]' : ''
            }`}
            style={{
              left: `${catX}%`,
              bottom: catState === 'sleeping' || catState === 'waking' ? '19.5%' : '10.5%',
              transition: catState === 'sleeping' || catState === 'waking' || catState === 'striking' ? 'none' : 'left 30ms linear'
            }}
          >
            <PixelArt 
              sprite={getCatSprite()} 
              colors={PALETTE} 
              pixelSize={2.8} 
              className="drop-shadow-lg"
            />
          </div>

        </div>

        {/* ── RETRO HUD / FOOTER ── */}
        <div className="w-full bg-[#121215] border-t-2 border-zinc-800 px-4 py-2.5 flex items-center justify-between text-left font-mono z-10 text-[9px] select-none text-zinc-400">
          <div className="flex-1 mr-4">
            <div className="flex justify-between mb-1">
              <span>CAT TEMPER: <span className="text-zinc-200 font-bold">{getTemperLabel()}</span></span>
              <span>{getTemperPercent()}%</span>
            </div>
            {/* Temper Bar */}
            <div className="w-full h-2 bg-zinc-900 border border-zinc-850 rounded overflow-hidden">
              <div 
                className="h-full bg-red-600 transition-all duration-300"
                style={{ width: `${getTemperPercent()}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Return Home Button */}
      <button 
        onClick={() => {
          playSynthSound('click');
          navigate('/');
        }}
        className="mt-8 group relative flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-100 text-zinc-100 hover:text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold py-3 px-8 rounded-xl border border-zinc-800 hover:border-zinc-200 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
      >
        <span>&lt;- Return to Portfolio</span>
      </button>
    </div>
  );
};

export default CatGame;
