import { useEffect } from "react";
import styled from "styled-components";

const Goods = ({ goods }) => {
    useEffect(() => {}, []);

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
                    {goods.dc ? <ItemDc>{goods.dc}</ItemDc> : ""}
                    <ItemPrice>{goods.price}</ItemPrice>
                    {goods.cost ? <ItemCost>{goods.cost}</ItemCost> : ""}
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

    @media only screen and (max-width: 420px) {
        height: 410px;
    }
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

    @media only screen and (max-width: 420px) {
        width: 90%;
        margin-left: 5%;
    }
`;

const Info = styled.a`
    display: block;
    padding: 14px 10px 10px 0;

    @media only screen and (max-width: 420px) {
        padding: 14px 14px 10px 14px;
    }
`;

const ItemName = styled.span`
    display: block;
    overflow: hidden;
    max-height: 58px;
    font-weight: 400;
    font-size: 20px;
    color: #333;
    line-height: 29px;
`;

const ItemDc = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #fa622f;
    padding-right: 5px;
`;

const ItemPrice = styled.span`
    padding-top: 7px;
    font-size: 18px;
    line-height: 29px;
`;

const ItemCost = styled.span`
    display: block;
    font-size: 15px;
    color: #999;
    text-decoration: line-through;
    padding-top: 3px;
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
