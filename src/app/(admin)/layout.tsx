import React from 'react'

const Rootlayout = ({children}:{ children: React.ReactNode}) => {
  return (
    <html lang="en">
        <body>{children}</body>

    </html>
      
    
  );
};

export default Rootlayout
