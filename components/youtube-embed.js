export default props => {
  return (
    <div className="resp-container">
      <iframe
        className="resp-iframe"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <style jsx>{`
        .resp-container {
          position: relative !important;
          overflow: hidden;
          padding-top: 56.25%;
        }
        .resp-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </div>
  );
};
