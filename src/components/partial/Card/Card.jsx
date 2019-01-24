import React from 'react';

const card = React.memo(({ image }) => (
  <div className="card text-center bg-secondary p-1">
    {image}
  </div>
));

export default card;
