import { PixelCrop } from 'react-image-crop';

// Constant to convert degrees to radians
const TO_RADIANS = Math.PI / 180;

// Function for canvas preview
export async function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop,
  scale = 1,
  rotate = 0,
) {
  // Get the 2D rendering context of the canvas
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    // If the context is not available, throw an error
    throw new Error('No 2d context');
  }

  // Calculate the scaling factors for the image
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  // Determine the pixel ratio for the device (e.g., for Retina displays)
  const pixelRatio = window.devicePixelRatio;

  // Set the canvas dimensions to match the cropped area, considering the pixel ratio
  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  // Scale the rendering context to match the pixel ratio
  ctx.scale(pixelRatio, pixelRatio);

  // Set the image smoothing quality to 'high' for better quality
  ctx.imageSmoothingQuality = 'high';

  // Calculate the cropped area position after scaling
  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  // Convert rotation angle to radians
  const rotateRads = rotate * TO_RADIANS;

  // Calculate the center coordinates of the original image
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  // Save the current context state
  ctx.save();

  // Apply transformations to the image:
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY);
  // 2) Scale the image
  ctx.scale(scale, scale);
  // 3) Rotate the image around the origin
  ctx.rotate(rotateRads);
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY);
  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY);

  // Draw the image onto the canvas with the specified transformations
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  );

  // Restore the context to its previous state (undo transformations)
  ctx.restore();
}