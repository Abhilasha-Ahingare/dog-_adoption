const Image = ({ src, alt, className, fill, ...props }) => {
  if (fill) {
    return (
      <div
        className={className}
        style={{ position: "relative", height: "100%", width: "100%" }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            objectFit: "cover",
          }}
          {...props}
        />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} {...props} />;
};

export default Image;
