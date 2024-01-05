import { NextRequest, NextResponse } from 'next/server';

import axios from '@/lib/axios';

const Creatomate = require('creatomate');

const client = new Creatomate.Client(
  '1074e601121347a9a72c24119b9d4d29102e24d7deca58d929b9cd93e2c9ea36e30ee6260c93158b339ddf952220f649'
);

const createScene = (image: string, text: string) => {
  return new Creatomate.Composition({
    track: 1,
    duration: 5,

    transition: new Creatomate.CircularWipe({
      duration: 1,
      fade: false,
    }),

    elements: [
      // Background image
      new Creatomate.Image({
        source: image,

        // Slowly zoom out the background image (Ken Burns effect)
        animations: [
          new Creatomate.Scale({
            easing: 'linear',
            startScale: '150%',
            endScale: '100%',
            fade: false,
          }),
        ],
      }),

      new Creatomate.Text({
        // Put the text at the bottom
        x: '50%',
        y: '66%',
        width: '88%',
        height: '40%',

        // Relative font size
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '6.2 vmin',
        lineHeight: '100%',

        // Center text alignment
        xAlignment: '50%',
        yAlignment: '50%',

        // Instagram text style
        fillColor: '#000000',
        background: new Creatomate.TextBackground(
          '#ffffff',
          '68%',
          '32%',
          '24%',
          '5%'
        ),

        text,

        // Animate the text (slide right line-by-line)
        animations: [
          new Creatomate.TextSlideRightLineByLine({
            time: 1,
            duration: 1.5,
            easing: 'quadratic-out',
            fade: false,
            backgroundEffect: 'sliding',
          }),
        ],
      }),
    ],
  });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { images, texts } = body;

    // TODO: The source of our video
    const source = new Creatomate.Source({
      outputFormat: 'mp4',

      // Dimensions of the output video
      width: 1080,
      height: 1920,

      // Frame rate in frames per second
      frameRate: 25,

      // Extract a still image from the video to be used as thumbnail or poster
      snapshotTime: 3.5,

      // Content of the video
      elements: [
        // Background music
        new Creatomate.Audio({
          source:
            'https://creatomate-static.s3.amazonaws.com' +
            '/demo/pixabay-best-summer-128473.mp3',
          duration: 16,
          audioFadeOut: 2,
        }),

        createScene(images[0], texts[0]),
        createScene(images[1], texts[1]),
        createScene(images[2], texts[2]),
        createScene(images[3], texts[3]),
      ],
    });

    const renders = await client.render({ source });

    if (renders) {
      return NextResponse.json(
        { videos: renders },
        {
          status: 200,
        }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { error: e },
      {
        status: 500,
      }
    );
  }
}
