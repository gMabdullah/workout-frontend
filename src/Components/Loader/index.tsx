import React from 'react';

interface VinchiLoaderProps {
  width: string | number;
  height: string | number;
}

export const VinchiLoader: React.FC<VinchiLoaderProps> = ({
  width,
  height,
}) => {
  return (
    <><img
      src="/images/loader.gif"
      alt="loader"
      width={width}
      height={height}
    />
    </>
  );
};
