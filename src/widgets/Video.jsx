import React, { useState } from "react";
import "../css/video.css";
import Logo from "../static/logo.svg";

const Video = () => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="appinion-widget-video">
      <video className="widget-video">
        <source src="https://r18---sn-n8v7znly.googlevideo.com/videoplayback?expire=1616196586&ei=id9UYO2DPNr07ASS_IPIDQ&ip=138.122.86.98&id=o-AGleCLJYUBVjZIPPjG7xPoCHY4TW7jGcvgEaNwgaw_Qw&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=MztCTOby_a66n_Ajp_mrphEF&gir=yes&clen=1491430&ratebypass=yes&dur=33.645&lmt=1448947096975602&fvip=2&fexp=24001373,24007246&c=WEB&n=-g-JP_Rq1L4ajs5SNs&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKZC4uNszIIGVkXJnYiRv3i67crN27CL88xrOnPKTNDbAiAshZrEFoUDdDayzBbzvxzqjcihwyigQhsR4XFkvFQz-g%3D%3D&rm=sn-nxgbp2xfxc-5w0e7l,sn-bg0r77l&req_id=c48dfbf15710a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=-u&mip=95.24.1.101&mm=29&mn=sn-n8v7znly&ms=rdu&mt=1616174710&mv=m&mvi=18&pl=19&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAP583ynfx5I-8d0yQXNbA3B34H7f7OSgtCn6s8HM-m7mAiA3CxHyYbqDOUduRosncbtQx3XGWj4tJ_SxcP9rk49S0Q%3D%3D" />
      </video>

      <div
        className="widget-video-overlay"
        style={{
          opacity: opacity,
        }}
      />

      <div
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.890625 0.742188L36.6071 21.4036L0.890625 42.065V0.742188Z"
            fill="white"
          />
        </svg>
      </div>

      <img src={Logo} alt="logo" />
    </div>
  );
};

export default Video;
