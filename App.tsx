import React, { useLayoutEffect } from "react";
import { Navigator } from "@/navigation/index";
import {} from "@/services/api/musicService";

export default function App() {
  // useLayoutEffect(() => {
  //   const fetchRequest = async () => {
  //     const response = await getTrendingMusicVideos();
  //     console.log(response);
  //   };
  //   fetchRequest();
  // }, []);
  return (
    <React.Fragment>
      <Navigator />
    </React.Fragment>
  );
}
