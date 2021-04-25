interface IVideoSectionProps {
  videoId: string,
}

function VideoSection({videoId}: IVideoSectionProps) {

  const srcUrl = 'https://www.youtube.com/embed/'

  return (
    <section data-testid="video-section">
      <iframe 
        title="YouTube video player" 
        src={srcUrl+videoId} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </section>
  );
}

export default VideoSection
