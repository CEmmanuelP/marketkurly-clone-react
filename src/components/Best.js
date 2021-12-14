import { Content, GoodsList, Main, PageArticle } from "../common/styled";

import { useEffect, useState } from "react";
import { product_best } from "../Data";
import Loading from "../Loading";
import Goods from "./common/Goods";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SelectType from "./SelectType";

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

    const selectTypeList = [
        "추천순",
        "신상품순",
        "판매량순",
        "혜택순",
        "낮은가격순",
        "높은가격순",
    ];

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setGoods(product_best);
            console.log(goods.length);
        }, 2000);
    });

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
                            <div className="list_ability">
                                <ListWrapper>
                                    <p className="count">총 {goods.length}개</p>
                                    <div className="select_type">
                                        <ListTypeWrapper>
                                            {selectTypeList.map((type, i) => {
                                                console.log(type);
                                                return (
                                                    <SelectType
                                                        key={i}
                                                        type={type}
                                                    />
                                                );
                                            })}
                                        </ListTypeWrapper>
                                    </div>
                                </ListWrapper>
                            </div>
                            <GoodsList>
                                {goods ? (
                                    goods.map((goods) => {
                                        return (
                                            <Goods
                                                key={goods.id}
                                                goods={goods}
                                            />
                                        );
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

const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 19px;
    font-size: 11px;
`;

const ListTypeWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default Best;
