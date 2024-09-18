import React, { useRef } from 'react';

const Counts = () => {
    const renderCount = useRef(0);
    renderCount.current++;
    
    return (
        <>
            <h1>Counts component</h1>
            <h5>Nothing changed here but I have now rendered <span>{renderCount.current} time(s)</span></h5>
        </>
    );
}

export default React.memo(Counts);
