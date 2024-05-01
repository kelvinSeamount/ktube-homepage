import React, { useEffect } from "react";
import { DurationFormats } from "../utils/DurationFormats";
import { TimeFormatAgo } from "../utils/TimeFormatAgo";
import { VIEW_FORMATTER } from "../utils/VIEW_FORMATTER";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  //STATES FOR PLAY VIDEOS
  const [videoPlayed, setVideoPlayed] = React.useState(false);
  const videoref = React.createRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoref.current == null) return;

    if (videoPlayed) {
      videoref.current.currentTime = 0;
      videoref.current.play();
    } else {
      videoref.current.pause();
    }
  }, [videoPlayed, videoref]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setVideoPlayed(true)}
      onMouseLeave={() => setVideoPlayed(false)}
    >
      <a href={`/watch?tv=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            videoPlayed ? "rounded-none" : "rounded-xl"
          }`}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {DurationFormats(duration)}
        </div>
        <video
          ref={videoref}
          muted
          playsInline
          src={videoUrl}
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            videoPlayed ? "opacity-100 delay-200" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2 ">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} Views . {TimeFormatAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
