import { useState } from "react";
import styled from "styled-components";
import { Main, PageArticle } from "../../common/styled";

const Join = () => {
    const [radio, setRadio] = useState();

    return (
        <>
            <Main>
                <PageArticle>
                    <TitPage>
                        <TitHeader2>회원가입</TitHeader2>
                    </TitPage>
                    <JoinFormWrapper>
                        <form method="post">
                            <RowWrapper>
                                <RowTitle>
                                    아이디<span className="ico">*</span>
                                </RowTitle>
                                <RowInput placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                                <RowButton leftMargin="10px">
                                    중복확인
                                </RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    비밀번호<span className="ico">*</span>
                                </RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    비밀번호확인<span className="ico">*</span>
                                </RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    이름<span className="ico">*</span>
                                </RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    이메일<span className="ico">*</span>
                                </RowTitle>
                                <RowInput />
                                <RowButton leftMargin="10px">
                                    중복확인
                                </RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    휴대폰<span className="ico">*</span>
                                </RowTitle>
                                <RowInput />
                                <RowButton leftMargin="10px">
                                    인증번호 받기
                                </RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>
                                    주소<span className="ico">*</span>
                                </RowTitle>
                                <RowButton leftMargin="0px" width="330px">
                                    <span>주소 검색</span>
                                    <p className="txt_guide">
                                        배송지에 따라 상품 정보가 달라질 수
                                        있습니다.
                                    </p>
                                </RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>성별</RowTitle>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sex"
                                            value="m"
                                        />
                                        <span className="ico"></span>
                                        남자
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sex"
                                            value="w"
                                        />
                                        <span className="ico"></span>
                                        여자
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sex"
                                            value="n"
                                        />
                                        <span className="ico"></span>
                                        선택안함
                                    </label>
                                </div>
                            </RowWrapper>
                        </form>
                    </JoinFormWrapper>
                </PageArticle>
            </Main>
        </>
    );
};

const TitPage = styled.div`
    overflow: hidden;
    width: 1050px;
    margin: 0 auto;
    padding: 50px 0 51px;
`;

const TitHeader2 = styled.h2`
    font-weight: 600;
    font-size: 26px;
    color: #333;
    line-height: 33px;
    text-align: center;
`;

const JoinFormWrapper = styled.div`
    width: 640px;
    margin: 0 auto;
    border-top: 2px solid #333;
`;

const RowWrapper = styled.div`
    display: flex;
    padding-top: 20px;

    .txt_guide {
        font-family: noto sans;
        font-weight: 500;
        color: gray;
        font-size: 12px;
        line-height: 12px;
        margin-top: 3px;
        float: left;
    }

    label {
        display: inline-block;
        padding: 10px 52px 10px 0%;
        vertical-align: top;
    }
`;

const RowTitle = styled.div`
    vertical-align: center;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    padding: 10px 0 10px 20px;
    width: 140px;

    .ico {
        color: #ee6a7b;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
`;

const RowInput = styled.input`
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    border-radius: 3px;
    background: #fff;
    outline: none;
    padding: 0 14px;

    &::placeholder {
        color: #ccc;
        font-weight: 600;
    }
`;

const RowButton = styled.button`
    border: 1px solid #5f0080;
    background-color: #fff;
    color: #5f0080;
    width: ${(props) => (props.width ? props.width : "120px")};
    margin-left: ${(props) => props.leftMargin};
    border-radius: 3px;
    height: 40px;
    font-weight: 600;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
    outline: none;

    span {
        display: inline-block;
        height: 100%;
        margin-left: -14px;
        padding-left: 24px;
        font-weight: 600;
        font-size: 13px;
        color: #5f0080;
        line-height: 40px;
        background: url(https://res.kurly.com/pc/service/common/2006/ico_search.svg)
            no-repeat 0 60%;
        background-size: 24px 24px;
        vertical-align: top;
    }
`;

export default Join;
