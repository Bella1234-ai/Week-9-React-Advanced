import { useState, useEffect } from 'react';

function WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="window-size">
            <p>📐 Window Dimensions:</p>
            <p><strong>Width:</strong> {size.width}px</p>
            <p><strong>Height:</strong> {size.height}px</p>
        </div>
    );
}

export default WindowSize;