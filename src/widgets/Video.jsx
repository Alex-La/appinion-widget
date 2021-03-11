import React, { useEffect, useState, useRef } from "react";
import "../css/video.css";

const Video = () => {
  const [fullWidth, setFullWidth] = useState(false);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = !fullWidth;
  }, [fullWidth]);

  useEffect(() => {
    if (videoRef.current) {
      if (play) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [play]);

  useEffect(() => {
    if (videoRef.current && fullWidth) videoRef.current.muted = mute;
  }, [mute, fullWidth]);

  const replay = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = "0";
    videoRef.current.play();
  };

  return (
    <div
      style={{
        position: "absolute",
        width: fullWidth ? 230 : 130,
        height: fullWidth ? 410 : 230,
        borderRadius: "4px 4px 0 0",
        cursor: "pointer",
        left: 40,
        top: 60,
      }}
    >
      <div
        className="video-wrap"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px 4px 0 0",
          }}
          autoPlay
          muted
          loop
        >
          <source src="https://r18---sn-n8v7knel.googlevideo.com/videoplayback?expire=1615498508&ei=rDhKYMfkD9Cgx_APxP-1mAQ&ip=183.89.153.236&id=o-ACaQ2JNwXRZQkEPyWjGYBeCCluPLfNVdCfk5h1a1LEqO&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=7YpF2klgeHV_cZgutVoEAHMF&gir=yes&clen=1491430&ratebypass=yes&dur=33.645&lmt=1448947096975602&fvip=2&fexp=9466586,24001373,24007246&beids=9466586&c=WEB&n=Nq29PhLRX5lOCMp7s&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgIKwTFgoIQktSuWuF6QQqIdtMpNaotKBOfrHWlaJ8K4wCICjSkBZAKMcjvgCXvVfWlS5KeC-P51Oj4MuLCcOf9Dqi&rm=sn-w5nuxa-c33ls7l,sn-30aer7s&req_id=c1cd83a107aea3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=-u&mip=95.24.6.77&mm=30&mn=sn-n8v7knel&ms=nxu&mt=1615481306&mv=m&mvi=18&pl=19&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgQnkOCjs9RS7XjshBztjxsjRR6gItUIGK5TwiZ3ULIJMCIEHDePjbMhc6_028mT0bGSMjK6j4oY8SN8G5Y6FKzHJy" />
        </video>
        {fullWidth && (
          <span
            className="control"
            style={{
              position: "absolute",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
              borderRadius: "4px 4px 0 0",
              boxShadow: "inset 0px -58px 36px -12px rgba(0, 0, 0, 0.67)",
            }}
          >
            <svg
              onClick={() => setFullWidth(false)}
              className="close"
              style={{
                position: "absolute",
                top: 12,
                right: 15,
                display: "none",
              }}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.147302 1.27787C-0.0491008 1.47415 -0.0491008 1.79257 0.147302 1.98885L16.0111 17.8526C16.2075 18.049 16.5258 18.049 16.7222 17.8526L17.8528 16.7221C18.0491 16.5257 18.0491 16.2074 17.8528 16.011L1.98892 0.147209C1.79262 -0.0490696 1.47421 -0.0490696 1.2779 0.147209L0.147302 1.27787Z"
                fill="white"
              />
              <path
                d="M16.722 0.147284C16.5257 -0.0490947 16.2073 -0.0490947 16.011 0.147284L0.147302 16.0111C-0.0491008 16.2075 -0.0491008 16.5258 0.147302 16.7222L1.2778 17.8527C1.47421 18.0491 1.79252 18.0491 1.98892 17.8527L17.8526 1.98893C18.0489 1.79255 18.0489 1.47422 17.8526 1.27784L16.722 0.147284Z"
                fill="white"
              />
            </svg>

            <svg
              onClick={() => setPlay(!play)}
              className="pause"
              style={{
                position: "absolute",
                left: 15,
                bottom: 22,
                display: "none",
              }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {play ? (
                <>
                  {" "}
                  <path
                    d="M3.33301 2.50004C3.33301 2.26992 3.51956 2.08337 3.74967 2.08337H7.08301C7.31313 2.08337 7.49967 2.26992 7.49967 2.50004V17.5C7.49967 17.7302 7.31313 17.9167 7.08301 17.9167H3.74967C3.51956 17.9167 3.33301 17.7302 3.33301 17.5V2.50004Z"
                    fill="white"
                  />
                  <path
                    d="M12.5 2.50004C12.5 2.26992 12.6865 2.08337 12.9167 2.08337H16.25C16.4801 2.08337 16.6667 2.26992 16.6667 2.50004V17.5C16.6667 17.7302 16.4801 17.9167 16.25 17.9167H12.9167C12.6865 17.9167 12.5 17.7302 12.5 17.5V2.50004Z"
                    fill="white"
                  />
                </>
              ) : (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3.6571C5 2.68256 6.06571 2.08285 6.89871 2.58862L17.3459 8.93151C18.1476 9.41826 18.1476 10.5818 17.3459 11.0685L6.89871 17.4114C6.06571 17.9172 5 17.3175 5 16.3429V3.6571Z"
                  fill="white"
                />
              )}
            </svg>

            <svg
              onClick={replay}
              className="replay"
              style={{
                position: "absolute",
                bottom: 24,
                left: 45,
                display: "none",
              }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5938 0.719503C15.3091 0.601658 15.0661 0.650109 14.8646 0.865405L13.5104 2.20928C12.7674 1.50786 11.9185 0.964497 10.9636 0.579074C10.0087 0.193688 9.02084 0.000976562 8 0.000976562C6.9167 0.000976562 5.882 0.212879 4.8959 0.636428C3.90972 1.06001 3.05901 1.62935 2.34377 2.34463C1.62849 3.05999 1.059 3.91059 0.635415 4.89669C0.211866 5.88287 0 6.91742 0 8.00087C0 9.08398 0.211866 10.1188 0.635451 11.1049C1.05915 12.0911 1.62849 12.9418 2.3438 13.6571C3.05905 14.3722 3.90976 14.9416 4.89593 15.3652C5.88204 15.7889 6.91674 16.0008 8.00004 16.0008C9.19439 16.0008 10.3301 15.7491 11.4063 15.2455C12.4826 14.7422 13.3993 14.0321 14.1564 13.1153C14.2119 13.0459 14.2379 12.9678 14.2344 12.881C14.2311 12.7942 14.1979 12.723 14.1355 12.6675L12.7086 11.23C12.632 11.1676 12.5454 11.1364 12.4482 11.1364C12.3371 11.1502 12.2573 11.1921 12.2086 11.2615C11.7016 11.9214 11.0801 12.4316 10.344 12.793C9.60798 13.154 8.82674 13.3344 8.00033 13.3344C7.27823 13.3344 6.58896 13.1938 5.93271 12.9125C5.27639 12.6313 4.70862 12.2511 4.22954 11.7719C3.7505 11.2927 3.3703 10.7252 3.089 10.0688C2.80778 9.41253 2.66713 8.72344 2.66713 8.00116C2.66713 7.27895 2.80789 6.58954 3.089 5.93343C3.37019 5.27726 3.75035 4.70949 4.22954 4.23041C4.70877 3.75122 5.27639 3.37102 5.93271 3.08972C6.58881 2.80853 7.27823 2.66785 8.00033 2.66785C9.39619 2.66785 10.6081 3.14357 11.6359 4.09498L10.198 5.53225C9.98268 5.74061 9.93423 5.98024 10.0521 6.25103C10.1703 6.52883 10.3752 6.66769 10.667 6.66769H15.3336C15.5141 6.66769 15.6703 6.60176 15.8023 6.46979C15.9341 6.33787 16.0001 6.18164 16.0001 6.00108V1.33438C16 1.04279 15.8649 0.837932 15.5938 0.719503Z"
                fill="white"
              />
            </svg>

            {mute ? (
              <svg
                onClick={() => setMute(false)}
                style={{ position: "absolute", bottom: 24, right: 16 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 5.43428C12.5 4.23624 11.1648 3.52165 10.1679 4.18621L5.1972 7.50003H3C2.17158 7.50003 1.5 8.17158 1.5 9.00003V15C1.5 15.8284 2.17157 16.5 3 16.5H5.1972L10.1679 19.8138C11.1648 20.4784 12.5 19.7638 12.5 18.5658V5.43428ZM14.6465 9.06068L17.5858 12L14.6465 14.9394C14.4512 15.1346 14.4512 15.4512 14.6465 15.6465L15.3535 16.3536C15.5488 16.5488 15.8654 16.5488 16.0606 16.3536L19 13.4142L21.9394 16.3536C22.1346 16.5488 22.4512 16.5488 22.6465 16.3536L23.3535 15.6465C23.5488 15.4512 23.5488 15.1346 23.3535 14.9394L20.4142 12L23.3535 9.06068C23.5488 8.86543 23.5488 8.54883 23.3535 8.35358L22.6465 7.64648C22.4512 7.45123 22.1346 7.45123 21.9394 7.64648L19 10.5858L16.0606 7.64648C15.8654 7.45123 15.5488 7.45123 15.3535 7.64648L14.6465 8.35358C14.4512 8.54883 14.4512 8.86543 14.6465 9.06068Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setMute(true)}
                style={{ position: "absolute", bottom: 24, right: 16 }}
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.16795 1.18621C10.1648 0.521655 11.5 1.23624 11.5 2.43428V15.5658C11.5 16.7638 10.1648 17.4784 9.16795 16.8138L4.1972 13.5H2C1.17157 13.5 0.5 12.8284 0.5 12V6.00003C0.5 5.17158 1.17158 4.50003 2 4.50003H4.1972L9.16795 1.18621ZM9.5 3.36853L5.0547 6.33208C4.89045 6.44158 4.6974 6.50003 4.5 6.50003H2.5V11.5H4.5C4.6974 11.5 4.89045 11.5585 5.0547 11.668L9.5 14.6315V3.36853ZM15.4999 9.00003C15.4999 7.77918 15.0147 6.67228 14.224 5.86058C14.0312 5.66278 13.9982 5.34948 14.1736 5.13623L14.8089 4.36388C14.9843 4.15058 15.3008 4.11858 15.5 4.30978C16.7314 5.49163 17.4999 7.15643 17.4999 9.00003C17.4999 10.8436 16.7314 12.5084 15.5 13.6903C15.3008 13.8815 14.9843 13.8495 14.8089 13.6362L14.1736 12.8639C13.9982 12.6506 14.0312 12.3373 14.224 12.1395C15.0147 11.3278 15.4999 10.2209 15.4999 9.00003ZM17.5072 2.52503C17.3281 2.73528 17.3547 3.04978 17.5534 3.24148C19.0632 4.69758 20.0001 6.73893 20.0001 8.99998C20.0001 11.261 19.0632 13.3024 17.5534 14.7585C17.3547 14.9502 17.3281 15.2647 17.5072 15.4749L18.1555 16.2364C18.3345 16.4466 18.651 16.4728 18.8521 16.2836C20.7887 14.461 22.0001 11.8715 22.0001 8.99998C22.0001 6.12848 20.7887 3.53903 18.8521 1.71638C18.651 1.52713 18.3345 1.55335 18.1555 1.76361L17.5072 2.52503Z"
                  fill="white"
                />
              </svg>
            )}
          </span>
        )}
        {!fullWidth && (
          <span
            className="overlay"
            onClick={() => setFullWidth(true)}
            style={{
              position: "absolute",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
              background: "rgb(0,0,0,.5)",
              opacity: 0,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.317 9.19195L14.9375 12.8125L16.1496 11.5265C16.7402 10.9359 17.75 11.3541 17.75 12.1894L17.75 16.5644C17.75 17.0821 17.3303 17.5 16.8125 17.5L12.4375 17.5C11.6023 17.5 11.184 16.4921 11.7746 15.9015L13.0625 14.6875L9.44195 11.067C9.19789 10.8229 9.19789 10.4271 9.44195 10.1831L10.4331 9.19195C10.6771 8.94785 11.0729 8.94785 11.317 9.19195ZM6.68305 8.30805L3.0625 4.6875L1.85043 5.97352C1.2598 6.56414 0.25 6.14586 0.249999 5.31063L0.249999 0.935627C0.249999 0.417852 0.669726 1.889e-06 1.1875 1.86637e-06L5.5625 1.67513e-06C6.39773 1.63862e-06 6.81601 1.00793 6.22543 1.59852L4.9375 2.8125L8.55805 6.43305C8.80211 6.67711 8.80211 7.07285 8.55805 7.31691L7.56691 8.30805C7.32285 8.55215 6.92715 8.55215 6.68305 8.30805Z"
                fill="white"
              />
            </svg>
          </span>
        )}
      </div>

      {fullWidth && (
        <div
          style={{
            padding: "8px 10px",
            backgroundColor: "F9FAF9",
          }}
        >
          <p style={{ fontSize: 14, margin: 0, fontWeight: "bold" }}>
            Иванова Инна
          </p>

          <div
            style={{
              width: 30,
              height: 2,
              backgroundColor: "#FE950D",
              marginTop: 7,
            }}
          />

          <p style={{ fontWeight: 400, fontSize: 12 }}>
            Ген. Директор АО Росчеснок
          </p>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <svg
          style={{ marginTop: 3 }}
          width={fullWidth ? "70" : "32"}
          height={fullWidth ? "33" : "15"}
          viewBox="0 0 32 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.64871 10.4122C1.4521 8.24951 1.29432 5.60729 2.5577 3.41895C3.0281 2.60428 3.66301 1.90668 4.42675 1.35785C6.98673 -0.481708 10.4485 -0.363188 13.1174 1.17768C14.2516 1.83255 15.2348 2.74006 15.9667 3.80768H14.882C14.295 3.08138 13.5558 2.43929 12.6807 1.93413C9.26044 -0.0405846 5.06687 0.81983 3.31409 3.85571C2.13941 5.89036 2.35923 8.38572 3.66152 10.4049L1.81066 13.6106L5.74772 12.5556C5.93554 12.6866 6.1306 12.8112 6.33325 12.9282C9.7535 14.9029 13.947 14.0425 15.6999 11.0066C16.6092 9.43142 16.6827 7.58011 16.0653 5.88743H16.9919C17.2874 6.81004 17.4068 7.79194 17.3067 8.79411C17.2133 9.72988 16.9265 10.6286 16.4561 11.4433C15.9858 12.2581 15.3506 12.9559 14.5867 13.5048C12.0268 15.344 8.56521 15.2253 5.89656 13.6845C5.79426 13.6255 5.6931 13.5644 5.5932 13.5012L0 15L2.64871 10.4122ZM19.5474 4.38416C19.7183 4.68338 19.8698 4.99297 20.0005 5.31099H19.0447C18.8956 4.99329 18.7213 4.68338 18.5232 4.38416H19.5474ZM16.3284 4.38416C16.4993 4.68338 16.6509 4.99297 16.7815 5.31099H15.8258C15.6768 4.99329 15.5023 4.68338 15.3043 4.38416H16.3284ZM22.7664 4.38416C22.9373 4.68338 23.0888 4.99297 23.2194 5.31099H22.2637C22.1146 4.99329 21.9403 4.68338 21.7422 4.38416H22.7664Z"
            fill="#FE950D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.22201 9.66516H4.30469L6.44117 5.76322L8.5357 9.66516H7.83357H7.6364L6.44117 7.43852L5.22201 9.66516Z"
            fill="#4E7FCE"
          />
          <path
            d="M8.88867 5.86808H10.5431C11.0277 5.86808 11.4037 5.98293 11.6713 6.21255C11.9389 6.44221 12.0728 6.76852 12.0728 7.19165C12.0728 7.63646 11.9389 7.98178 11.6713 8.22768C11.4037 8.47359 11.0277 8.59656 10.5431 8.59656H9.85421V9.66516H8.88867V5.86808ZM9.85421 6.62751V7.83717H10.4943C10.7076 7.83717 10.8722 7.7847 10.9879 7.67984C11.1036 7.57498 11.1615 7.42309 11.1615 7.22418C11.1615 7.02892 11.1036 6.88065 10.9879 6.77941C10.8722 6.67815 10.7076 6.62751 10.4943 6.62751H9.85421Z"
            fill="#4E7FCE"
          />
          <path
            d="M12.5762 5.86808H14.2306C14.7151 5.86808 15.0912 5.98293 15.3588 6.21255C15.6264 6.44221 15.7602 6.76852 15.7602 7.19165C15.7602 7.63646 15.6264 7.98178 15.3588 8.22768C15.0912 8.47359 14.7151 8.59656 14.2306 8.59656H13.5417V9.66516H12.5762V5.86808ZM13.5417 6.62751V7.83717H14.1818C14.395 7.83717 14.5596 7.7847 14.6753 7.67984C14.791 7.57498 14.8489 7.42309 14.8489 7.22418C14.8489 7.02892 14.791 6.88065 14.6753 6.77941C14.5596 6.67815 14.395 6.62751 14.1818 6.62751H13.5417Z"
            fill="#4E7FCE"
          />
          <path
            d="M21.4944 9.66516H20.6427L18.8961 7.32725V9.66516H17.9902V5.86808H18.8418L20.5939 8.2114V5.86808H21.4944V9.66516Z"
            fill="#4E7FCE"
          />
          <path
            d="M23.2194 9.66516H22.2539V5.86808H23.2194V9.66516Z"
            fill="#4E7FCE"
          />
          <path
            d="M25.779 5.83559C26.3684 5.83559 26.8584 6.01912 27.249 6.38616C27.6396 6.75321 27.8348 7.21155 27.8348 7.76126C27.8348 8.31451 27.6386 8.77739 27.2463 9.14989C26.8539 9.52233 26.3649 9.70862 25.779 9.70862C25.1931 9.70862 24.705 9.52327 24.3144 9.1526C23.9239 8.78195 23.7285 8.31813 23.7285 7.76126C23.7285 7.20797 23.9239 6.7487 24.3144 6.38344C24.705 6.01818 25.1931 5.83559 25.779 5.83559ZM25.7898 6.64385C25.4933 6.64385 25.2402 6.75142 25.0305 6.96654C24.8207 7.18174 24.7158 7.44843 24.7158 7.76667C24.7158 8.08489 24.8216 8.35341 25.0332 8.57219C25.2447 8.79096 25.497 8.90037 25.7898 8.90037C26.0827 8.90037 26.3314 8.79096 26.5357 8.57219C26.74 8.35341 26.8422 8.08489 26.8422 7.76667C26.8422 7.44843 26.74 7.18174 26.5357 6.96654C26.3314 6.75142 26.0827 6.64385 25.7898 6.64385Z"
            fill="#4E7FCE"
          />
          <path
            d="M31.8498 9.66516H30.9983L29.2515 7.32725V9.66516H28.3457V5.86808H29.1974L30.9494 8.2114V5.86808H31.8498V9.66516Z"
            fill="#4E7FCE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.02325 9.66516H5.71875L6.42802 8.36974L7.12337 9.66516H6.89026H6.82479H6.02325Z"
            fill="#FE950D"
          />
        </svg>

        {fullWidth && (
          <p style={{ fontSize: 9, fontWeight: 600, marginLeft: 10 }}>
            Новый уровень сервиса для ваших клиентов
          </p>
        )}
      </div>
    </div>
  );
};

export default Video;
