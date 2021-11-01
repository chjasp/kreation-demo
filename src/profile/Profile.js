import React, { useState } from "react";
import ShoeCards from "./ShoeCard";
import styled from "styled-components";

const Profile = () => {
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    if (progress > 90) {
      return;
    }
    setProgress(progress + 10);
  };

  return (
    <CardHolder>
      <ShoeCards like={incrementProgress} />
      {progress === 100 ? (
        <Progress
        style={{
          background: `linear-gradient(to right, #FF779A ${progress}%, #315C7C ${progress}%)`, cursor: "pointer",
        }}
      >
        Push to customize
      </Progress>
      ) : (
        <Progress
          style={{
            background: `linear-gradient(to right, #FF779A ${progress}%, #315C7C ${progress}%)`,
          }}
        >
          Tailoring: {progress} %
        </Progress>
      )}
    </CardHolder>
  );
};

export default Profile;

const Progress = styled.div`
  position: relative;
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const CardHolder = styled.div`
  top: 20%;
  left: 45%;
  position: absolute;
  height: 500px;
  width: 350px;
  background-image: linear-gradient(to bottom, #3e75ce 0%, #27bfdb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 17px 17px -7px rgba(0, 0, 0, 0.7);
`;
