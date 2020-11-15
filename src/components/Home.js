import React from "react";

import Title from "./Title";
import PhotosWrapper from "./PhotosWrapper";

export default function Home({ match }, props) {
  return (
    <div>
      <Title title={match.params.category_id}></Title>
      <PhotosWrapper category_id={match.params.category_id}></PhotosWrapper>
    </div>
  );
}
