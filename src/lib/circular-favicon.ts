export function createCircularFavicon(imagePath: string): string {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 180;
  canvas.height = 180;
  const ctx = canvas.getContext('2d');

  if (!ctx) return imagePath;

  // Create a new image object
  const img = new Image();
  img.src = imagePath;

  // When the image loads, draw it in a circular shape
  img.onload = () => {
    ctx.beginPath();
    ctx.arc(90, 90, 90, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, 0, 0, 180, 180);

    // Update the favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = canvas.toDataURL();
    }
  };

  return imagePath;
} 