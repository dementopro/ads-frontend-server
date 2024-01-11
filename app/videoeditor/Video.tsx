import { useEffect, useState, MouseEvent } from 'react';
import { useSeoAnalyzerContext } from '@/context/seo';
import styles from '@/./app/planning/planning.module.css';
import { createClient } from 'pexels';
import axios from '@/lib/axios';
import { message } from 'antd';
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

const pexelsClient = createClient(
  'AwuvNDeK5A4e1CWhdN42estyfTgqKEIsS1bGYY8ZRdaeZVM5DxfaBby1'
);

const VideoRecommendations: React.FC<VideoRecommendationsProps> = ({
  isEditVideo
}) => {
  const { videoTextsAndKeywords } = useSeoAnalyzerContext();

  const [mediaAssets, setMediaAssets] = useState<string[]>([]);
  const [file, setFile] = useState('');
  const [video, setVideo] = useState<any>({});
  const [isGeneratingVideos, setIsGeneratingVideos] = useState<boolean>(true);
  const [isSubscribePopupOpen, setIsSubscribePopupOpen] =
    useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedMenuOption, setSelectedMenuOption] = useState('Video');

  const { videos, addVideoResource, addVideo } = useVideoContext()

  useEffect(() => {
    if (
      Object.keys(videoTextsAndKeywords).length > 0 &&
      videoTextsAndKeywords?.keywords
    ) {
      const query = videoTextsAndKeywords.keywords;

      pexelsClient.photos.search({ query, per_page: 20 }).then((data: any) => {
        if (data?.photos && data?.photos.length > 0) {
          const photos = data?.photos.map(
            (photo: any) => photo.src.original as string
          );
          setMediaAssets(photos);
        }
      });
    }
  }, [videoTextsAndKeywords]);

  useEffect(() => {
    if (mediaAssets.length > 0) {
      generateVideos(mediaAssets, videoTextsAndKeywords?.texts);
    }
  }, [mediaAssets]);

  const generateVideos = async (images: string[], texts: string[]) => {
    try {
      const response = await axios({
        url: '/api/generate/imageToVideo',
        method: 'POST',
        data: JSON.stringify({
          images: images.slice(0, 4),
          texts: texts.slice(0, 4),
        }),
      });

      console.log(response);

      if (response?.data?.videos) {
        const videos = response.data.videos;

        setVideo({
          url: videos[0].url,
          thumbnail: videos[0].snapshotUrl,
        });

        setIsGeneratingVideos(false);
      }
    } catch (e) {
      console.log(`Error: ${e}`);
      setIsGeneratingVideos(false);
      messageApi.error(
        'An error occurred during video generation. Please try again'
      );
    }
  };

  const toggleSubscribePopup = () => {
    setIsSubscribePopupOpen(!isSubscribePopupOpen);
  };

  const handleSaveVideo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleSubscribePopup();

    // if (video?.url) {
    //   window.open(video.url, '_blank', `download=${video.url}`);
    // }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    addVideoResource(URL.createObjectURL(file));
  };

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      {isEditVideo ?
        <VideoEditor selectedMenuOption={selectedMenuOption} setSelectedMenuOption={setSelectedMenuOption} />
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
