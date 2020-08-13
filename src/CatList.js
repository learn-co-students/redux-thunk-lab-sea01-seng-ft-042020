import React from "react";

const CatList = ({ catPics }) => {
  const renderCats = () => {
    return catPics.map((catPic) => {
      return <img key={catPic.id} src={catPic.url} alt={catPic.id}></img>;
    });
  };

  return <div>{renderCats()}</div>;
};

export default CatList;
