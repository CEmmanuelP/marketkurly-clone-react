import { useEffect } from "react";
import styled from "styled-components";

const Goods = ({ goods }) => {
    return (
        <>
            <Item>
                <Thumb>
                    <Thumbnail src={goods.img}>
                        {/* <img
                            src={goods.src}
                            style={{ width: "100%", verticalAlign: "top" }}
                        /> */}
                    </Thumbnail>
                </Thumb>
                <Info>
                    <ItemName>{goods.name}</ItemName>
                    <ItemPrice>{goods.price}</ItemPrice>
                    <ItemDesc>{goods.description}</ItemDesc>
                    <ItemTag>
                        {goods.tags.length ? (
                            goods.tags.length === 1 ? (
                                <ItemTagElement color="#5f0080">
                                    {goods.tags[0]}
                                </ItemTagElement>
                            ) : (
                                <>
                                    <ItemTagElement color="#5f0080">
                                        {goods.tags[0]}
                                    </ItemTagElement>
                                    <ItemTagElement color="#666">
                                        {goods.tags[1]}
                                    </ItemTagElement>
                                </>
                            )
                        ) : (
                            ""
                        )}
                    </ItemTag>
                </Info>
            </Item>
        </>
    );
};

const Item = styled.div`
    display: block;
    background-color: #fff;
    cursor: pointer;
    padding-top: 15px;
`;

const Thumb = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 435px;
    background-color: #f9f9f9;
`;

const Thumbnail = styled.a`
    overflow: hidden;
    position: absolute;
    left: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
`;

const Info = styled.a`
    display: block;
    padding: 14px 10px 10px 0;
`;

const ItemName = styled.span`
    overflow: hidden;
    max-height: 58px;
    font-weight: 400;
    font-size: 20px;
    color: #333;
    line-height: 29px;
`;

const ItemPrice = styled.span`
    display: block;
    padding-top: 7px;
    font-size: 18px;
    line-height: 29px;
`;

const ItemDesc = styled.span`
    display: block;
    padding-top: 11px;
    font-size: 13px;
    color: #999;
    line-height: 19px;
`;

const ItemTag = styled.span`
    display: block;
    padding: 12px 10px 10px 0;
    cursor: default;
`;

const ItemTagElement = styled.span`
    display: inline-block;
    height: 22px;
    margin-right: 6px;
    padding: 0 8px;
    border-radius: 4px;
    background-color: #f3f3f3;
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.color};
    line-height: 22px;
    vertical-align: middle;
`;

export default Goods;
