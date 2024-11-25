"use client";

import { useState } from "react";

const Page = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const songs = [
    {
      title: "Citizen Cope - Sideways",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F02.%20Citizen%20Cope%20Sideways%20%5Bezz-nazThiM%5D.mp3?alt=media&token=183bebbe-45da-45d4-a31d-7bf5e675d85c",
    },
    {
      title: "Croosh - Woah",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F03.%20Croosh%20-%20Woah%20%5BI6jBWame_ic%5D.mp3?alt=media&token=2f8548fc-1021-4399-9911-056e0f35a0c2",
    },
    {
      title: "G-Easy - Opportunity",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F05.%20G-Eazy%20-%20Opportunity%20Cost%20%5BMko1OVHwzoU%5D.mp3?alt=media&token=5a20793b-2e23-4d90-8b4e-7286bbbcd311",
    },
    {
      title: "Drake - With My Woes",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F06.%20I%20was%20running%20through%20the%20six%20with%20my%20woes%20-%20drake%20%5BjqScSp5l-AQ%5D.mp3?alt=media&token=63af8aa1-5494-4edf-b783-ac7d6077448e",
    },
    {
      title: "Kendrick Lamar - Money Trees",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F11.%20Kendrick%20Lamar%20-%20Money%20Trees%20ft.%20Jay%20Rock%20(Music%20Video)%20%5BhwR_1EP18eo%5D.mp3?alt=media&token=48760c96-84c6-401c-a0af-74ea25f3abc2",
    },
    {
      title: "Lane 8 - Undercover",
      url: "https://firebasestorage.googleapis.com/v0/b/jessejessexyz.appspot.com/o/mp3%2F14.%20Lane%208%20-%20Undercover%20feat.%20Matthew%20Dear%20%5BHSydHbGdIcY%5D.mp3?alt=media&token=dbc5121c-3037-4c4c-b366-68af0c1b1092",
    },
  ];

  const handleTrackClick = (url) => {
    setCurrentTrack(null);
    requestAnimationFrame(() => setCurrentTrack(url));
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {currentTrack && (
        <audio
          controls
          autoPlay
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
          onPlay={() => console.log("Audio playback started")}
          onError={() => console.error("Audio playback error")}
        >
          <source src={currentTrack} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}

      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "20px",
          zIndex: 2,
          width: "300px",
          textAlign: "left",
          background: "none",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {songs.map((song, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleTrackClick(song.url)}
                style={{
                  background: "none",
                  border: "none",
                  color: currentTrack === song.url ? "#ffcc00" : "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  opacity: currentTrack === song.url ? 1 : 0.7,
                  transition: "opacity 0.3s ease",
                }}
              >
                {song.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <iframe
        src="https://jr-three.vercel.app/"
        title="Embedded Website"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
        }}
        sandbox="allow-scripts allow-same-origin"
      />

      <footer
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px",
          zIndex: 2,
          fontSize: "1.2rem",
          color: "#ffcc00",
        }}
      >
        <a
          href="https://jessejesse.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffcc00", textDecoration: "none" }}
        >
          JesseJesse.com
        </a>
      </footer>
    </div>
  );
};

export default Page;










