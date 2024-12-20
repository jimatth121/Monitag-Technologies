import { useState } from "react";
import Banner from "./Banner";
import Press from "./Press";
import Subscribe from "./Subscribe";
import ReadScreen from "./ReadScreen";

const News = () => {
  const [isRead, setIsRead] = useState(false);
  return (
    <div>
      <Banner />
      {isRead ? (
        <ReadScreen setIsRead={setIsRead} />
      ) : (
        <Press setIsRead={setIsRead} />
      )}
      <Subscribe />
    </div>
  );
};

export default News;
