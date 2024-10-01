import React from "react";

const ImageItem = (props) => {
  const { imageUrl } = props;
  const Click = (FFF) => {
    alert(FFF);
  };
  return (
    <ul>
      <li>
        <img
          onClick={() => Click(imageUrl)}
          src="https://cdn.forbes.ru/forbes-static/new/2022/11/GettyImages-1358485714-copy-637dd00986080.jpg"
          alt=""
        />
      </li>
    </ul>
  );
};
export default ImageItem;
