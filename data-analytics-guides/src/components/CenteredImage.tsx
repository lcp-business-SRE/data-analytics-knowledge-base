import React from 'react';
import styles from './CenteredImage.module.css'; // 専用のCSS Modules をインポート

interface CenteredImageProps {
  src: string;
  alt: string;
  caption?: string; // キャプションも受け取れるように
  width?: string;
  height?: string;
}

function CenteredImage({ src, alt, caption, width, height }: CenteredImageProps): JSX.Element {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} style={{ width, height }} />
      {caption && (
        <p className={styles.imageCaption}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default CenteredImage;