import React from 'react';

interface MainProps {
  session: any; // Replace 'any' with the actual session type
}

const Main: React.FC<MainProps> = ({ session }) => {
  return (
    <div>
        {session}
    </div>
  );
}

export default Main;
