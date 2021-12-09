import CategoryList from "./CategoryList";
import ProductContainer from "./ProductContainer";
import {
  data_main2,
  data_main4,
  categoryList,
  data_main6,
  data_main7,
  data_main8,
  data_main9,
} from "./Data";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const Main = () => {
  const [data2, setData2] = useState();

  useEffect(() => {
    console.log("main useEffect");
    setTimeout(() => {
      setData2(data_main2);
    }, 2000);
  }, []);

  return (
    <div id="main">
      <Carousel />
      <div className="main2">
        {data2 ? (
          <ProductContainer data={data2} />
        ) : (
          <div className="loader_container">
            <div className="loader"></div>
          </div>
        )}
        {/* <ProductContainer data={data_main2} /> */}
      </div>
      <div className="main3">
        <h3 className="tit_good">
          <span className="ico">특가/혜택</span>
        </h3>
        <div className="products">
          <div className="item item1">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1637752813.jpg"
                width="338"
                height="338"
              />
            </div>
            <div className="item_description">
              <span className="name">주방용품 최대 50% 할인</span>
              <span className="desc">지금이 교체할 때!</span>
            </div>
          </div>
          <div className="item item1">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1637754220.jpg"
                width="338"
                height="338"
              />
            </div>
            <div className="item_description">
              <span className="name">태우한우 최대 20% 할인</span>
              <span className="desc">까다롭게 엄선한 1+ 한우</span>
            </div>
          </div>
          <div className="item item1">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1637754224.jpg"
                width="338"
                height="338"
              />
            </div>
            <div className="item_description">
              <span className="name">이연복의 목란 최대 7% 할인</span>
              <span className="desc">중식 대가의 일품 요리</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main4">
        <ProductContainer data={data_main4} />
      </div>
      <div className="ad ad1">
        <img
          src="https://img-cf.kurly.com/shop/data/main/5/pc_img_1637808134.jpg"
          width="1050px"
          height="140px"
        />
      </div>
      <div className="main5 category_type">
        <h3 className="tit_good">MD의 추천</h3>
        <div className="category">
          <ul className="list_category">
            {categoryList.map((category) => {
              return <CategoryList category={category} />;
            })}
          </ul>
        </div>
        <div className="products">
          <div className="item item1">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637926072371l0.jpg"
                width="249"
                height="320"
              />
            </div>
            <div className="item_description">
              <span className="name">[헬카페] Big 머그컵</span>
              <span className="price"> 9,350원 </span>
            </div>
          </div>
          <div className="item item2">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637926103962l0.jpg"
                width="249"
                height="320"
              />
            </div>
            <div className="item_description">
              <span className="name">
                [에델코첸] 컬러 믹싱볼 바닐라크림 24cm
              </span>
              <span className="price">
                <span className="dc">20%</span>
                11,120원
              </span>
              <span className="cost">13,900원</span>
            </div>
          </div>
          <div className="item item3">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637921270493l0.jpeg"
                width="249"
                height="320"
              />
            </div>
            <div className="item_description">
              <span className="name">
                [씨밀렉스] 대용량 보관용기 3pcs 세트 (채반형, 김밥재료형 혼합)
              </span>
              <span className="price">
                <span className="dc">52%</span>
                10,000원
              </span>
              <span className="cost">21,200원</span>
            </div>
          </div>
          <div className="item item4">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1637927153175l0.jpg"
                width="249"
                height="320"
              />
            </div>
            <div className="item_description">
              <span className="name">
                [나인웨어] 올디너리 데일리 브런치세트 5종
              </span>
              <span className="price"> 15,750원 </span>
            </div>
          </div>
        </div>
        <div className="link_button">
          <a className="link">
            <span className="ico">주방용품 전체보기</span>
          </a>
        </div>
      </div>
      <div className="ad ad2">
        <img
          src="https://img-cf.kurly.com/shop/data/main/7/pc_img_1637633097.jpg"
          width="1050px"
          height="140px"
        />
      </div>
      <div className="main6">
        <ProductContainer data={data_main6} />
      </div>
      <div
        className="main7"
        style={{ "background-color": "rgb(247, 247, 247)" }}
      >
        <ProductContainer data={data_main7} />
      </div>
      <div
        className="main8"
        style={{ "background-color": "rgb(247, 247, 247)" }}
      >
        <ProductContainer data={data_main8} />
      </div>
      <div className="main9">
        <ProductContainer data={data_main9} />
      </div>
      <div className="main10">
        <h3 className="tit_good">
          <span className="ico">컬리의 레시피</span>
        </h3>
        <div className="products">
          <div className="item item1">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/goods/1600665398350l0.jpg"
                width="338"
                height="235"
              />
            </div>
            <div className="item_description">
              <span className="name">마 우동</span>
            </div>
          </div>
          <div className="item item2">
            <div>
              <img
                src="	https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_4da279d0b19f0c2a.jpg"
                width="338"
                height="235"
              />
            </div>
            <div className="item_description">
              <span className="name">죽순 솥밥</span>
            </div>
          </div>
          <div className="item item3">
            <div>
              <img
                src="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_f24f4e4b0b4f269a.jpg"
                width="338"
                height="235"
              />
            </div>
            <div className="item_description">
              <span className="name">전복죽</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main11">
        <h3 className="tit_good">인스타그램 고객 후기</h3>
        <div className="list">
          <img
            src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__480.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
          <img
            src="https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871__340.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305__340.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg"
            className="instagram_image"
            width="175px"
            height="175px"
          />
        </div>
        <div className="bnr">
          <span className="txt">더 많은 고객 후기가 궁금하다면?</span>
          <span className="txt_link">@marketkurly_regram</span>
        </div>
      </div>
      <div className="ad ad3">
        <img
          src="https://img-cf.kurly.com/shop/data/main/15/pc_img_1629447526.jpg"
          width="1050px"
          height="140px"
        />
      </div>
    </div>
  );
};

export default Main;
