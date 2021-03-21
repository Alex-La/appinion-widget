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

  useEffect(() => {
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
        boxShadow: expand && "10px 0px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: 40,
        [position[1]]: 60,
        [position[0]]: 40,
      }}
    >
      <div className="widget-wrap">
        <video
          ref={videoRef}
          className="widget-video"
          style={{
            width: expand && 354,
            height: expand && 505,
            borderRadius: expand && 40,
            borderWidth: expand && 7,
          }}
          autoPlay
          muted
          loop
        >
          <source src={data.videos[0].url} />
        </video>

        {!expand && (
          <div
            onClick={() => setExpand(true)}
            className="widget-video-overlay"
            style={{
              opacity: opacity,
            }}
          />
        )}

        {!expand && (
          <div
            onClick={() => setExpand(true)}
            onMouseOver={() => setOpacity(0.6)}
            onMouseOut={() => setOpacity(0)}
            className="widget-video-play"
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
        )}

        <a
          href="https://appinion.digital"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              position: "absolute",
              bottom: expand ? 30 : 15,
              [expand ? "left" : "right"]: expand ? 30 : 15,
            }}
          />
        </a>

        {expand && (
          <>
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

            <div
              onClick={() => setPlay(!play)}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 50,
                bottom: 110,
                margin: "auto",
                cursor: "pointer",
              }}
            />

            <svg
              onClick={() => {
                setExpand(false);
                videoRef.current.pause();
              }}
              className="widget-close"
              style={{
                position: "absolute",
                top: 30,
                right: 30,
                cursor: "pointer",
              }}
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.155486 1.34886C-0.0518286 1.55604 -0.0518286 1.89216 0.155486 2.09934L16.9006 18.8445C17.1079 19.0517 17.4439 19.0517 17.6512 18.8445L18.8446 17.6511C19.0518 17.4438 19.0518 17.1078 18.8446 16.9005L2.09942 0.155387C1.89221 -0.0517957 1.55611 -0.0517957 1.3489 0.155387L0.155486 1.34886Z"
                fill="white"
              />
              <path
                d="M17.651 0.155467C17.4438 -0.0518222 17.1077 -0.0518222 16.9004 0.155467L0.155486 16.9006C-0.0518286 17.1079 -0.0518286 17.4439 0.155486 17.6512L1.34879 18.8445C1.55611 19.0518 1.8921 19.0518 2.09942 18.8445L18.8444 2.09942C19.0516 1.89213 19.0516 1.55612 18.8444 1.34884L17.651 0.155467Z"
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
                width="25"
                height="25"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.421053C0 0.188509 0.188514 0 0.421053 0H3.78947C4.02202 0 4.21053 0.188514 4.21053 0.421053V15.5789C4.21053 15.8115 4.02202 16 3.78947 16H0.421053C0.188514 16 0 15.8115 0 15.5789V0.421053Z"
                  fill="white"
                />
                <path
                  d="M9.26318 0.421053C9.26318 0.188509 9.45169 0 9.68424 0H13.0527C13.2852 0 13.4737 0.188514 13.4737 0.421053V15.5789C13.4737 15.8115 13.2852 16 13.0527 16H9.68424C9.45169 16 9.26318 15.8115 9.26318 15.5789V0.421053Z"
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
                width="25"
                height="25"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1.31874C0 0.292208 1.12256 -0.339496 1.99999 0.193255L13.0045 6.8745C13.8489 7.38722 13.8489 8.61279 13.0045 9.1255L1.99999 15.8067C1.12256 16.3395 0 15.7078 0 14.6813V1.31874Z"
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
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5938 0.718526C15.3091 0.600681 15.0661 0.649133 14.8646 0.864428L13.5104 2.2083C12.7674 1.50688 11.9185 0.96352 10.9636 0.578097C10.0087 0.192711 9.02084 0 8 0C6.9167 0 5.882 0.211902 4.8959 0.635451C3.90972 1.05904 3.05901 1.62838 2.34377 2.34366C1.62849 3.05901 1.059 3.90961 0.635415 4.89571C0.211866 5.88189 0 6.91645 0 7.99989C0 9.08301 0.211866 10.1178 0.635451 11.104C1.05915 12.0902 1.62849 12.9408 2.3438 13.6561C3.05905 14.3712 3.90976 14.9406 4.89593 15.3643C5.88204 15.7879 6.91674 15.9998 8.00004 15.9998C9.19439 15.9998 10.3301 15.7481 11.4063 15.2446C12.4826 14.7412 13.3993 14.0311 14.1564 13.1144C14.2119 13.0449 14.2379 12.9668 14.2344 12.88C14.2311 12.7932 14.1979 12.722 14.1355 12.6665L12.7086 11.229C12.632 11.1666 12.5454 11.1354 12.4482 11.1354C12.3371 11.1493 12.2573 11.1911 12.2086 11.2605C11.7016 11.9204 11.0801 12.4306 10.344 12.792C9.60798 13.153 8.82674 13.3334 8.00033 13.3334C7.27823 13.3334 6.58896 13.1928 5.93271 12.9115C5.27639 12.6304 4.70862 12.2502 4.22954 11.771C3.7505 11.2917 3.3703 10.7242 3.089 10.0678C2.80778 9.41155 2.66713 8.72247 2.66713 8.00018C2.66713 7.27797 2.80789 6.58856 3.089 5.93246C3.37019 5.27628 3.75035 4.70851 4.22954 4.22943C4.70877 3.75025 5.27639 3.37004 5.93271 3.08874C6.58881 2.80756 7.27823 2.66687 8.00033 2.66687C9.39619 2.66687 10.6081 3.1426 11.6359 4.094L10.198 5.53127C9.98268 5.73964 9.93423 5.97927 10.0521 6.25006C10.1703 6.52785 10.3752 6.66671 10.667 6.66671H15.3336C15.5141 6.66671 15.6703 6.60078 15.8023 6.46882C15.9341 6.33689 16.0001 6.18066 16.0001 6.0001V1.3334C16 1.04182 15.8649 0.836955 15.5938 0.718526Z"
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
                width="25"
                height="25"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9069 1.48981C10.9069 0.301901 9.58303 -0.406638 8.59462 0.252295L3.66592 3.53808H1.48731C0.665893 3.53808 0 4.20395 0 5.02539V10.9746C0 11.796 0.665888 12.4619 1.48731 12.4619H3.66592L8.59462 15.7477C9.58303 16.4066 10.9069 15.6981 10.9069 14.5102V1.48981ZM13.0352 5.08553L15.9497 8.00001L13.0352 10.9145C12.8416 11.1081 12.8416 11.422 13.0352 11.6156L13.7363 12.3167C13.9299 12.5103 14.2439 12.5103 14.4375 12.3167L17.3519 9.40224L20.2664 12.3167C20.46 12.5103 20.7739 12.5103 20.9675 12.3167L21.6687 11.6156C21.8623 11.422 21.8623 11.1081 21.6687 10.9145L18.7542 8.00001L21.6687 5.08553C21.8623 4.89193 21.8623 4.57801 21.6687 4.38441L20.9675 3.68329C20.7739 3.48969 20.46 3.48969 20.2664 3.68329L17.3519 6.59777L14.4375 3.68329C14.2439 3.48969 13.9299 3.48969 13.7363 3.68329L13.0352 4.38441C12.8416 4.57801 12.8416 4.89193 13.0352 5.08553Z"
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
                width="25"
                height="25"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.59462 0.252295C9.58303 -0.406638 10.9069 0.301901 10.9069 1.48981V14.5102C10.9069 15.6981 9.58303 16.4066 8.59462 15.7477L3.66592 12.4619H1.48731C0.665888 12.4619 0 11.796 0 10.9746V5.02539C0 4.20395 0.665893 3.53808 1.48731 3.53808H3.66592L8.59462 0.252295ZM8.92386 2.41615L4.51617 5.35463C4.35331 5.4632 4.16189 5.52116 3.96616 5.52116H1.98308V10.4789H3.96616C4.16189 10.4789 4.35331 10.5368 4.51617 10.6454L8.92386 13.5839V2.41615ZM14.873 8.00001C14.873 6.78949 14.3919 5.69195 13.6078 4.88712C13.4168 4.69099 13.384 4.38034 13.5579 4.1689L14.1878 3.40308C14.3617 3.19159 14.6756 3.15986 14.8731 3.34944C16.0941 4.52129 16.8561 6.172 16.8561 8.00001C16.8561 9.82801 16.0941 11.4787 14.8731 12.6506C14.6756 12.8402 14.3617 12.8084 14.1878 12.597L13.5579 11.8312C13.384 11.6197 13.4168 11.309 13.6078 11.1129C14.3919 10.3081 14.873 9.21058 14.873 8.00001ZM16.8633 1.57979C16.6858 1.78826 16.7121 2.1001 16.9092 2.29018C18.4061 3.73396 19.3351 5.75804 19.3351 7.99996C19.3351 10.2419 18.4061 12.266 16.9092 13.7097C16.7121 13.8998 16.6858 14.2117 16.8633 14.4201L17.5061 15.1751C17.6836 15.3836 17.9974 15.4096 18.1968 15.2219C20.1171 13.4148 21.3182 10.8472 21.3182 7.99996C21.3182 5.15275 20.1171 2.58521 18.1968 0.777984C17.9974 0.590335 17.6836 0.616328 17.5061 0.824809L16.8633 1.57979Z"
                  fill="white"
                />
              </svg>
            )}

            <a
              className="video-logo-title"
              href="https://appinion.digital"
              target="_blank"
              referrerPolicy="no-referrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontWeight: 700 }}>ОТЗЫВЫ,</span> КОТОРЫМ{" "}
              <p style={{ margin: 0, fontWeight: 700 }}>ДОВЕРЯЮТ</p>
            </a>
          </>
        )}
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
            Дмитрий нагиев
          </p>
          <div
            style={{
              width: 46,
              height: 4,
              backgroundColor: "#FE950D",
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
            Амбассадор бренда МТС
          </p>
        </div>
      )}
    </div>
  );
};

export default Video;
