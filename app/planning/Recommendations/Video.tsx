import { Key, useEffect, useRef, useState } from 'react';
import { useSeoAnalyzerContext } from '@/context/seo';
import styles from '@/./app/planning/planning.module.css';
import { createClient } from 'pexels';
import axios from '@/lib/axios';
import LoadingSpin from '../LoadingSpin';

const pexelsClient = createClient(
  'AwuvNDeK5A4e1CWhdN42estyfTgqKEIsS1bGYY8ZRdaeZVM5DxfaBby1'
);

const VideoRecommendations = () => {
  const { videoTextsAndKeywords } = useSeoAnalyzerContext();

  const [mediaAssets, setMediaAssets] = useState<string[]>([]);
  const [video, setVideo] = useState<any>({});
  const [isGeneratingVideos, setIsGeneratingVideos] = useState<boolean>(true);

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
      setIsGeneratingVideos(true);
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
    }
  };

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      <div className="flex align-center justify-center w-full">
        {isGeneratingVideos ? (
          <div className="flex flex-col items-center justify-center w-full">
            <LoadingSpin />
            <h1>
              Your videos are being generated. Please be patient as this may
              take a few minutes...
            </h1>
          </div>
        ) : (
          <div className="flex align-center justify-center w-full p-4">
            {video && (
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecommendations;
