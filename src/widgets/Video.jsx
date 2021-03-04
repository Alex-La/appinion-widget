import React, { useEffect, useState, useRef } from "react";

const Video = () => {
  const [fullWidth, setFullWidth] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      if (fullWidth) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.muted = true;
      }
    }
  }, [fullWidth]);

  return (
    <div
      style={{
        position: "absolute",
        width: fullWidth ? 300 : 150,
        height: fullWidth ? 500 : 200,
        borderRadius: 15,
        boxShadow: "1px 3px 6px rgba(0, 0, 0, 0.12)",
        bottom: 10,
        right: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          cursor: "pointer",
        }}
      >
        {fullWidth && (
          <span
            onClick={() => setFullWidth(false)}
            style={{ position: "absolute", right: 5, top: 5, zIndex: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        )}
        <video
          className="appinion-widget-video"
          ref={videoRef}
          onClick={() => setFullWidth(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 15,
          }}
          muted
          autoPlay
          loop
        >
          <source src="https://r6---sn-8ph2xajvh-8vbl.googlevideo.com/videoplayback?expire=1614900786&ei=0hlBYLfLAdnjhwbFjb6wBQ&ip=138.199.10.12&id=o-AGrRaUFtTl4f9dJZJr9NCY3i5PGbtjV8VzRswi7KGBR4&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=3cOQn5uJHDLpP4QfeFr_he8F&gir=yes&clen=1506504&ratebypass=yes&dur=33.715&lmt=1546954090266708&fvip=2&fexp=24007246&c=WEB&txp=5531432&n=y8zHYo9M4S-u3_41lZG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgUHvs82RGdreL9e73CsEDbUcD8aLVxrcccSsHz12TF5cCIQDnJ2IMNrmJU5DNIN2EF9WCx56ELolLLHb4t5ja13G6qA%3D%3D&redirect_counter=1&rm=sn-ab5ee7d&req_id=c35085a54b30a3ee&cms_redirect=yes&ipbypass=yes&mh=1f&mip=95.24.0.149&mm=31&mn=sn-8ph2xajvh-8vbl&ms=au&mt=1614878680&mv=m&mvi=6&pl=19&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIqZGCuWtroWAJVLGdG6MQXm5T5dQaP8qHz7SP4h1Cq9AiEAs8R1BsL1mQaiE1_nLP6xcHydTntB1M0j8alf9bsbCUo%3D" />
        </video>
      </div>
    </div>
  );
};

export default Video;
