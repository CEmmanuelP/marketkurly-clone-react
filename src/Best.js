import { Content, GoodsList, Main, PageArticle } from "./common/styled";

import { useEffect, useState } from "react";
import { product_best } from "./Data";
import Loading from "./Loading";
import Goods from "./components/common/Goods";

const Best = () => {
  const tit = {
    paddingTop: "23px",
    fontWeight: "700",
    fontSize: "28px",
    color: "#333",
    lineHeight: "35px",
    letterSpacing: "-1px",
    textAlign: "center",
  };

  const [goods, setGoods] = useState([]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log(product_best);
  //       setGoods(product_best);
  //       console.log(goods);
  //     }, 2000);
  //   });

  return (
    <>
      <Main>
        <Content>
          <PageArticle>
            <div style={{ paddingTop: "26px" }}>
              <div style={{ position: "relative" }}>
                <h3 style={tit}>베스트</h3>
              </div>
            </div>
            <div>
              <div className="list_ability"></div>
              <GoodsList>
                {goods ? (
                  goods.map((goods) => {
                    return <Goods goods={goods} />;
                  })
                ) : (
                  <Loading />
                )}
              </GoodsList>
              <div className="layout-pagination"></div>
            </div>
          </PageArticle>
        </Content>
      </Main>
    </>
  );
};

export default Best;
