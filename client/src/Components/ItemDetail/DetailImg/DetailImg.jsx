import React from 'react';
import { Detail_Img } from './ImgStyle';

const DetailImg = ({ img_url }) => {
  return (
    <Detail_Img>
      <img src={img_url} />
    </Detail_Img>
  );
};

export default DetailImg;
