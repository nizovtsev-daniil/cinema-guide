import ReactPlayer from 'react-player/youtube';

type PlayerProps = {
  url: string;
};

export default function Player({ url }: PlayerProps) {
  return (
    <ReactPlayer
      url={url}
      className='react-player'
      width='100%'
      height='100%'
      playing
      controls
      volume={0.3}
    />
  );
}
