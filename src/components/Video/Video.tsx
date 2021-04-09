import React from 'react';

type VideoProps = {
  autoPlay?: boolean;
  src: string;
  style?: React.CSSProperties,
  type: string;
  width?: string;
  height?: string;
  [key: string]: any;
};

export const Video: React.FC<VideoProps> = (props) => {
  const { autoPlay = false, type, src, ...rest } = props;
  console.log(autoPlay);
  return <>
    <h1>Video</h1>
    <video
      width="100%"
      height="100%"
      autoPlay={autoPlay}
      {...rest}
    >
      <source
        src={src}
        type={type}
      />
    </video>
  </>
};
