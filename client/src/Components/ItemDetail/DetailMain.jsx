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
  const itemData = getDetail(id)[0];
  const detailPageDate = calculateDate(itemData?.created_date);
  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg img_url={itemData?.img_url} />
        <DetailItemInfo
          title={itemData?.title}
          price={itemData?.price}
          createdDate={itemData?.detailPageDate}
          endDate={itemData?.end_date}
          seat={itemData?.seat_number}
          region={itemData?.region}
        />
        <ImgList img_url={itemData?.img_url} />
        <Description description={itemData?.body} />
        <ItemSeller />
        <ItemSubInfo region={itemData?.region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
