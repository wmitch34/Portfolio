import {useState, useEffect} from 'react'

export default function Snake(props){

    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
      const handleKeyDown = (event) => {
        const moveStep = 50; // Define how many pixels the element moves with each key press
    
        // Calculate new position based on current position
        let newPosition = { ...position };
        switch (event.key) {
          case 'ArrowUp':
            newPosition.y -= moveStep;
            break;
          case 'ArrowDown':
            newPosition.y += moveStep;
            break;
          case 'ArrowLeft':
            newPosition.x -= moveStep;
            break;
          case 'ArrowRight':
            newPosition.x += moveStep;
            break;
          default:
            break;
        }
    
        setPosition(newPosition);
      };
    
      window.addEventListener('keydown', handleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [position]); // Listening to position could lead to infinite updates, better to listen only when mounting
    
    return (
      <div
        style={{
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
        }}
      ></div>
    );
}