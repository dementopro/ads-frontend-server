import { memo } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useVideoContext } from '@/context/video';
import { VideoProvider } from '@/context/video';
import VideoEditor from './VideoEditor';

export const EditorWithStore = ({ isEditVideo }: VideoRecommendationsProps) => {
  return (
    <VideoProvider>
      <VideoRecommendations isEditVideo={isEditVideo} />
    </VideoProvider>
  );
}

interface VideoRecommendationsProps {
  isEditVideo: boolean;
}

const VideoRecommendations: React.FC<VideoRecommendationsProps> = ({
  isEditVideo
}) => {
  const { videos, addVideoResource } = useVideoContext()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    addVideoResource(URL.createObjectURL(file));
  };

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      {isEditVideo ?
        <VideoEditor />
        :
        <>
          <label className="flex w-[124.5px] h-11 justify-center items-center gap-4 border px-4 py-1.5 rounded-lg bg-[#844FFF] border-none" htmlFor="fileInput">
            <input
              id="fileInput"
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
            Upload
          </label>
          <div className="flex align-center justify-center w-full">
            <div className="flex align-center justify-center w-full p-4">
              {videos.length > 0 && (
                <div className="flex flex-col gap-8 w-full">
                  <video width={320} height={240} src={videos[0]} id="video-0" controls></video>
                </div>
              )}
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default VideoRecommendations;
