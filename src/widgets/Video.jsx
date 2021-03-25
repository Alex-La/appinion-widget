import React, { useState, useEffect, useRef } from "react";
import "../css/video.css";

import Logo from "../static/logoWidget.svg";

const Video = ({ data = null }) => {
  const videoRef = useRef();
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState(["bottom", "right"]);

  const [expand, setExpand] = useState(false);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resize);
    () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    console.log(data);
    setPosition(JSON.parse(data.position));
  }, [data]);

  useEffect(() => {
    if (videoRef.current) {
      if (expand) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setPlay(true);
        setMute(false);
      }
    }
  }, [expand]);

  useEffect(() => {
    if (videoRef.current) {
      if (play) videoRef.current.play();
      else videoRef.current.pause();
    }
  }, [play]);

  useEffect(() => {
    if (videoRef.current && expand) {
      videoRef.current.muted = mute;
    }
  }, [mute, expand]);

  return (
    <div
      className="appinion-widget-video"
      style={{
        transition: "0.5s",
        position: "absolute",
        borderRadius: expand ? 40 : 15,
        [position[1]]: 60,
        [position[0]]: 40,
        transformOrigin: `${position[0]} ${position[1]}`,
        zIndex: 99999,
        backgroundColor: "white",
        boxShadow: expand && "1px 3px 6px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div
        className="widget-wrap"
        style={{
          transition: "0.5s",
          padding: expand ? 7 : 4,
          backgroundColor: data.button_color,
          borderRadius: expand ? 40 : 15,
        }}
      >
        <div
          className="video-wrap"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <video
            ref={videoRef}
            style={{
              transition: "0.5s",
              borderRadius: expand ? 40 : 15,
              width: expand ? 354 : 197,
              height: expand ? 505 : 283,
              objectFit: "cover",
            }}
            muted
            autoPlay
            loop
          >
            <source src={data.videos[0].url} />
          </video>
          <div
            style={{
              transition: "0.5s",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: expand ? 40 : 15,
              boxShadow: "inset 0px -58px 36px -12px rgba(0, 0, 0, 0.53)",
            }}
          />

          {!expand && (
            <>
              <img
                src={Logo}
                alt="logo"
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: 15,
                }}
              />

              <div
                onClick={() => setExpand(true)}
                onMouseOver={() => setOpacity(0.6)}
                onMouseOut={() => setOpacity(0)}
                className="widget-video-overlay"
                style={{
                  transition: "0.5s",
                  opacity: opacity,
                  borderRadius: expand ? 40 : 15,
                }}
              />

              <div
                onClick={() => setExpand(true)}
                onMouseOver={() => setOpacity(0.6)}
                onMouseOut={() => setOpacity(0)}
                className="widget-video-play"
                style={{
                  backgroundColor: data.button_color,
                  boxShadow:
                    opacity === 0.6 &&
                    `0 0 0 11px ${data.button_color}26,
    0 0 0 5px ${data.button_color}4D`,
                }}
              >
                <svg
                  style={{ marginLeft: 10 }}
                  width="37"
                  height="43"
                  viewBox="0 0 37 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.890625 0.742188L36.6071 21.4036L0.890625 42.065V0.742188Z"
                    fill="white"
                  />
                </svg>
              </div>
            </>
          )}

          {expand && (
            <>
              <div
                onClick={() => setPlay(!play)}
                style={{
                  borderRadius: 40,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  cursor: "pointer",
                }}
              />

              {data.button_inner_text && (
                <a
                  href={data.button_link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <div
                    style={{
                      height: 45,
                      position: "absolute",
                      bottom: 130,
                      width: "60%",
                      backgroundColor: data.button_color,
                      left: 0,
                      right: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: data.text_color,
                      }}
                    >
                      {data.button_inner_text}
                    </p>
                  </div>
                </a>
              )}

              <svg
                onClick={() => {
                  setExpand(false);
                  videoRef.current.muted = true;
                }}
                className="widget-close"
                style={{
                  position: "absolute",
                  top: 30,
                  right: 30,
                  cursor: "pointer",
                }}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.204586 1.77482C-0.0681955 2.04743 -0.0681955 2.48969 0.204586 2.7623L22.2376 24.7954C22.5104 25.0682 22.9525 25.0682 23.2252 24.7954L24.7955 23.2252C25.0682 22.9525 25.0682 22.5103 24.7955 22.2376L2.76239 0.204457C2.48975 -0.0681525 2.04751 -0.0681525 1.77487 0.204457L0.204586 1.77482Z"
                  fill="white"
                />
                <path
                  d="M23.2252 0.204561C22.9526 -0.0681871 22.5103 -0.0681871 22.2377 0.204561L0.204589 22.2376C-0.0681963 22.5104 -0.0681963 22.9525 0.204589 23.2252L1.77474 24.7954C2.04753 25.0682 2.48964 25.0682 2.76242 24.7954L24.7955 2.7624C25.0682 2.48965 25.0682 2.04753 24.7955 1.77478L23.2252 0.204561Z"
                  fill="white"
                />
              </svg>

              {play ? (
                <svg
                  onClick={() => setPlay(false)}
                  className="widget-pause"
                  style={{
                    position: "absolute",
                    bottom: 85,
                    left: 25,
                    cursor: "pointer",
                  }}
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.657895C0 0.294546 0.294553 0 0.657895 0H5.92105C6.28441 0 6.57895 0.294553 6.57895 0.657895V24.3421C6.57895 24.7055 6.28441 25 5.92105 25H0.657895C0.294553 25 0 24.7055 0 24.3421V0.657895Z"
                    fill="white"
                  />
                  <path
                    d="M14.474 0.657895C14.474 0.294546 14.7685 0 15.1319 0H20.3951C20.7584 0 21.0529 0.294553 21.0529 0.657895V24.3421C21.0529 24.7055 20.7584 25 20.3951 25H15.1319C14.7685 25 14.474 24.7055 14.474 24.3421V0.657895Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setPlay(true)}
                  className="widget-play"
                  style={{
                    position: "absolute",
                    bottom: 85,
                    left: 25,
                    cursor: "pointer",
                  }}
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 2.06052C0 0.456575 1.754 -0.530463 3.12499 0.301961L20.3195 10.7414C21.639 11.5425 21.639 13.4575 20.3195 14.2586L3.12499 24.698C1.754 25.5305 0 24.5434 0 22.9395V2.06052Z"
                    fill="white"
                  />
                </svg>
              )}

              <svg
                onClick={() => (videoRef.current.currentTime = 0)}
                className="widget-replay"
                style={{
                  position: "absolute",
                  bottom: 85,
                  left: 65,
                  cursor: "pointer",
                }}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3653 1.1227C23.9205 0.938565 23.5408 1.01427 23.2259 1.35067L21.1101 3.45047C19.9491 2.35451 18.6226 1.5055 17.1306 0.903277C15.6386 0.301111 14.0951 0 12.5 0C10.8073 0 9.19062 0.331097 7.64984 0.992892C6.10894 1.65474 4.7797 2.54434 3.66213 3.66196C2.54451 4.7797 1.65469 6.10876 0.992835 7.64955C0.33104 9.19045 0 10.8069 0 12.4998C0 14.1922 0.33104 15.8091 0.992892 17.3499C1.65492 18.8909 2.54451 20.2201 3.66219 21.3377C4.77976 22.455 6.10899 23.3447 7.64989 24.0067C9.19068 24.6686 10.8074 24.9997 12.5001 24.9997C14.3662 24.9997 16.1408 24.6064 17.8224 23.8196C19.5041 23.0332 20.9364 21.9236 22.1194 20.4912C22.2061 20.3827 22.2468 20.2606 22.2412 20.125C22.2361 19.9894 22.1842 19.8782 22.0867 19.7914L19.8572 17.5454C19.7374 17.4478 19.6022 17.3991 19.4502 17.3991C19.2767 17.4207 19.152 17.4861 19.0759 17.5946C18.2838 18.6256 17.3127 19.4229 16.1625 19.9875C15.0125 20.5516 13.7918 20.8335 12.5005 20.8335C11.3722 20.8335 10.2952 20.6138 9.26986 20.1742C8.24436 19.7349 7.35722 19.1409 6.60866 18.3921C5.86016 17.6434 5.26609 16.7565 4.82656 15.7309C4.38715 14.7055 4.16739 13.6289 4.16739 12.5003C4.16739 11.3718 4.38732 10.2946 4.82656 9.26947C5.26591 8.24419 5.85993 7.35705 6.60866 6.60849C7.35745 5.85976 8.24436 5.26569 9.26986 4.82616C10.295 4.38681 11.3722 4.16699 12.5005 4.16699C14.6815 4.16699 16.5751 4.91031 18.181 6.39688L15.9344 8.64262C15.5979 8.96818 15.5222 9.34261 15.7064 9.76571C15.8911 10.1998 16.2112 10.4167 16.6672 10.4167H23.9587C24.2408 10.4167 24.4849 10.3137 24.6911 10.1075C24.8971 9.90139 25.0001 9.65728 25.0001 9.37516V2.08344C25 1.62784 24.789 1.30774 24.3653 1.1227Z"
                  fill="white"
                />
              </svg>

              {mute ? (
                <svg
                  onClick={() => setMute(false)}
                  className="widget-mute"
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    bottom: 85,
                    right: 30,
                  }}
                  width="35"
                  height="25"
                  viewBox="0 0 35 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0421 2.32782C17.0421 0.471721 14.9735 -0.635372 13.4291 0.39421L5.728 5.52825H2.32392C1.04046 5.52825 0 6.56867 0 7.85217V17.1479C0 18.4313 1.04045 19.4718 2.32392 19.4718H5.728L13.4291 24.6058C14.9735 25.6354 17.0421 24.5283 17.0421 22.6722V2.32782ZM20.3675 7.94613L24.9214 12.5L20.3675 17.0539C20.065 17.3564 20.065 17.8469 20.3675 18.1494L21.463 19.2449C21.7655 19.5474 22.256 19.5474 22.5585 19.2449L27.1124 14.691L31.6663 19.2449C31.9688 19.5474 32.4593 19.5474 32.7618 19.2449L33.8573 18.1494C34.1598 17.8469 34.1598 17.3564 33.8573 17.0539L29.3034 12.5L33.8573 7.94613C34.1598 7.64364 34.1598 7.15313 33.8573 6.85064L32.7618 5.75514C32.4593 5.45264 31.9688 5.45264 31.6663 5.75514L27.1124 10.309L22.5585 5.75514C22.256 5.45264 21.7655 5.45264 21.463 5.75514L20.3675 6.85064C20.065 7.15313 20.065 7.64364 20.3675 7.94613Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setMute(true)}
                  className="widget-value"
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    bottom: 85,
                    right: 30,
                  }}
                  width="35"
                  height="25"
                  viewBox="0 0 35 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4291 0.39421C14.9735 -0.635372 17.0421 0.471721 17.0421 2.32782V22.6722C17.0421 24.5283 14.9735 25.6354 13.4291 24.6058L5.728 19.4718H2.32392C1.04045 19.4718 0 18.4313 0 17.1479V7.85217C0 6.56867 1.04046 5.52825 2.32392 5.52825H5.728L13.4291 0.39421ZM13.9435 3.77524L7.05651 8.36661C6.80204 8.53625 6.50295 8.62681 6.19712 8.62681H3.09856V16.3732H6.19712C6.50295 16.3732 6.80204 16.4638 7.05651 16.6334L13.9435 21.2248V3.77524ZM23.2391 12.5C23.2391 10.6086 22.4873 8.89367 21.2623 7.63612C20.9637 7.32967 20.9125 6.84429 21.1842 6.5139L22.1684 5.31731C22.4402 4.98685 22.9307 4.93727 23.2393 5.2335C25.147 7.06452 26.3376 9.64376 26.3376 12.5C26.3376 15.3563 25.147 17.9355 23.2393 19.7665C22.9307 20.0627 22.4402 20.0132 22.1684 19.6828L21.1842 18.4862C20.9125 18.1557 20.9637 17.6703 21.2623 17.3639C22.4873 16.1064 23.2391 14.3915 23.2391 12.5ZM26.3489 2.46842C26.0715 2.79415 26.1127 3.2814 26.4206 3.5784C28.7595 5.83431 30.2111 8.99693 30.2111 12.4999C30.2111 16.0029 28.7595 19.1656 26.4206 21.4215C26.1127 21.7185 26.0715 22.2057 26.3489 22.5314L27.3533 23.7111C27.6306 24.0369 28.121 24.0775 28.4325 23.7843C31.4329 20.9606 33.3097 16.9487 33.3097 12.4999C33.3097 8.05118 31.4329 4.03939 28.4325 1.2156C28.121 0.922399 27.6306 0.963013 27.3533 1.28876L26.3489 2.46842Z"
                    fill="white"
                  />
                </svg>
              )}
            </>
          )}

          <a
            style={{
              transition: expand ? "1s" : "0s",
              opacity: expand ? 1 : 0,
            }}
            href={expand && "https://appinion.digital"}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                position: "absolute",
                bottom: 30,
                left: 30,
              }}
            />
          </a>

          <a
            className="video-logo-title"
            href={expand && "https://appinion.digital"}
            target="_blank"
            referrerPolicy="no-referrer"
            style={{
              textDecoration: "none",
              transition: expand ? "1s" : "0s",
              opacity: expand ? 1 : 0,
            }}
          >
            <span style={{ fontWeight: 700, color: "white" }}>ОТЗЫВЫ,</span>{" "}
            КОТОРЫМ{" "}
            <p style={{ margin: 0, fontWeight: 700, color: "white" }}>
              ДОВЕРЯЮТ
            </p>
          </a>
        </div>
      </div>

      {expand && (
        <div style={{ padding: 20 }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#404040",
              margin: 0,
            }}
          >
            {data.first_name}
          </p>
          <div
            style={{
              width: 46,
              height: 4,
              backgroundColor: data.button_color,
              margin: "8px 0",
            }}
          />
          <p
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: "#3A3A3A",
              margin: 0,
            }}
          >
            {data.signature}
          </p>
        </div>
      )}
    </div>
  );
};

export default Video;
