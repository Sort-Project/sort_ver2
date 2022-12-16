import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail_Container, Detail_Section } from './DetailStyle';
import ItemCategory from './ItemCategory/ItemCategory';
import DetailImg from './DetailImg/DetailImg';
import DetailItemInfo from './DetailItemInfo/DetailItemInfo';
import ImgList from './ImgList/ImgList';
import { Description, ItemSubInfo } from './ItemDescription/ItemDescription';
import ItemSeller from './ItemSeller/ItemSeller';
import SellerReview from './SellerReview/SellerReview';
import { calculateDate } from '../../util/calculateDate';
import { getDetail } from '../../util/requestItem';

const DetailMain = () => {
  const { id } = useParams();
  const { title, body, price, end_date, seat_number, createdDate, region, img_url } = getDetail(id);
  const detailPageDate = calculateDate(createdDate);
  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg img_url={img_url} />
        <DetailItemInfo
          title={title}
          price={price}
          createdDate={detailPageDate}
          endDate={end_date}
          seat={seat_number}
          region={region}
        />
        <ImgList img_url={img_url} />
        <Description description={body} />
        <ItemSeller />
        <ItemSubInfo region={region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
