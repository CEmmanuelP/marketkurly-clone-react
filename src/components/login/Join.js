import styled from "styled-components";
import { Main, PageArticle } from "../../common/styled";

const Join = () => {
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
                                <RowTitle>아이디</RowTitle>
                                <RowInput placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                                <RowButton>중복확인</RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>비밀번호</RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>비밀번호확인</RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>이름</RowTitle>
                                <RowInput />
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>이메일</RowTitle>
                                <RowInput />
                                <RowButton>중복확인</RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>휴대폰</RowTitle>
                                <RowInput />
                                <RowButton>인증번호 받기</RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>주소</RowTitle>
                                <RowButton>주소 검색</RowButton>
                            </RowWrapper>
                            <RowWrapper>
                                <RowTitle>아이디</RowTitle>
                                <RowInput />
                                <RowButton>중복확인</RowButton>
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
`;

const RowTitle = styled.div`
    vertical-align: center;
    font-weight: 600;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    padding: 10px 0 10px 20px;
    width: 140px;
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
    width: 120px;
    margin-left: 10px;
    border-radius: 3px;
    height: 40px;
    font-weight: 600;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
    outline: none;
`;

export default Join;
