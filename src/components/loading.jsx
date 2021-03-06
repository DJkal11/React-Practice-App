import React from 'react';

function Loading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p className='text-center text-5xl'>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default Loading;
