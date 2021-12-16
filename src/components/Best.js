import { Content, GoodsList, Main, PageArticle } from "../common/styled";

import { useEffect, useState } from "react";
import { product_best } from "../Data";
import Loading from "../Loading";
import Goods from "./common/Goods";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SelectType from "./SelectType";
import { useDispatch } from "react-redux";
import { languageAction } from "../store/redux";
import { useSelector } from "react-redux";

const Best = () => {
    const selectTypeList = [
        "추천순",
        "신상품순",
        "판매량순",
        "혜택순",
        "낮은가격순",
        "높은가격순",
    ];

    const [goods, setGoods] = useState([]);
    const { language, explain } = useSelector((state) => state.languageReducer);

    useEffect(() => {
        setTimeout(() => {
            setGoods(product_best);
            console.log(goods.length);
        }, 1000);
    });

    const dispatch = useDispatch();

    const changeAction = () => {
        dispatch(
            languageAction({
                language: "python",
                explain: "very easy language",
            })
        );
    };

    return (
        <>
            <Main>
                <Content>
                    <PageArticle>
                        <div style={{ paddingTop: "26px" }}>
                            <div style={{ position: "relative" }}>
                                <h3 className="best_title">베스트</h3>
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
                            <div className="layout-pagination">
                                <LayoutPagination>
                                    <PagenationButton img_src="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-first.png"></PagenationButton>
                                    <PagenationButton img_src="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-prev.png"></PagenationButton>
                                    <PagenationButton bg_color="#f7f7f7">
                                        1
                                    </PagenationButton>
                                    <PagenationButton img_src="	https://res.kurly.com/pc/etc/old/images/common/icon-pagination-next.png"></PagenationButton>
                                    <PagenationButton img_src="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-last.png"></PagenationButton>
                                </LayoutPagination>
                            </div>
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

    @media only screen and (max-width: 420px) {
        display: none;
    }
`;

const ListTypeWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const LayoutPagination = styled.div`
    font-weight: 400;
    text-align: center;
`;

const PagenationButton = styled.a`
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    vertical-align: top;
    background-image: url(${(props) => props.img_src});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: ${(props) => props.bg_color};
    font-weight: 700;
    font-size: 11px;
    line-height: 30px;
`;

export default Best;
