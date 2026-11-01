type FrameImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

type BrowserFrameProps = FrameImage & {
  url: string;
};

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  priority,
  url,
}: BrowserFrameProps) {
  return (
    <div className="v2-browser">
      <div className="v2-browser-bar" aria-hidden="true">
        <div className="v2-browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="v2-browser-url">{url}</div>
      </div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </div>
  );
}

export function PhoneFrame({ src, alt, width, height, priority }: FrameImage) {
  return (
    <div className="v2-phone">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
