import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main, PageArticle } from "../../common/styled";

const Join = () => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const [isAllEventChecked, setIsAllEventChecked] = useState(false);
    const [eventCheckedItems, setEventCheckedItems] = useState([]);

    useEffect(() => {
        console.log(checkedItems);
        if (checkedItems.length >= 5) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    }, [checkedItems]);

    useEffect(() => {
        console.log(eventCheckedItems);
        if (eventCheckedItems.length >= 2) {
            setIsAllEventChecked(true);
        } else {
            setIsAllEventChecked(false);
        }
    }, [eventCheckedItems]);

    const allEventAgreeHandler = (checked) => {
        setIsAllEventChecked(!isAllEventChecked);
        if (checked) {
            setEventCheckedItems([...eventCheckedItems, "sms", "email"]);
        } else if (
            (!checked && eventCheckedItems.includes("sms")) ||
            (!checked && eventCheckedItems.includes("email"))
        ) {
            setEventCheckedItems([]);
        }
    };

    const allAgreeHandler = (checked) => {
        setIsAllChecked(!isAllChecked);
        if (checked) {
            setCheckedItems([
                ...checkedItems,
                "provision",
                "privacy_required",
                "privacy_optional",
                "age",
                "event",
            ]);
            // 하나라도 체크가 안되어있을 경우
        } else if (
            (!checked && checkedItems.includes("provision")) ||
            (!checked && checkedItems.includes("privacy_required")) ||
            (!checked && checkedItems.includes("privacy_optional")) ||
            (!checked && checkedItems.includes("age")) ||
            (!checked && checkedItems.includes("event"))
        ) {
            setCheckedItems([]);
        }
    };

    const agreeHandler = (checked, value) => {
        console.log(checked);
        console.log(value);
        if (checked) {
            setCheckedItems([...checkedItems, value]);
        } else if (!checked && checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((el) => el !== value));
        }
    };

    const eventAgreeHandler = (checked, value) => {
        if (checked) {
            // 전체 체크된 아이템 목록에 value값 추가
            setCheckedItems([...checkedItems, value]);
        } else if (!checked && checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((el) => el !== value));
        }
    };

    const eventItemHandler = (checked, value) => {
        console.log(checked);
        console.log(value);
        if (checked) {
            // 전체 체크된 아이템 목록에 value값 추가
            setEventCheckedItems([...eventCheckedItems, value]);
        } else if (!checked && eventCheckedItems.includes(value)) {
            setEventCheckedItems(
                eventCheckedItems.filter((el) => el !== value)
            );
        }
    };

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
                                <div style={{ marginLeft: "17px" }}>
                                    <RowButton leftMargin="0px" width="330px">
                                        <span>주소 검색</span>
                                    </RowButton>
                                    <p className="txt_guide">
                                        배송지에 따라 상품 정보가 달라질 수
                                        있습니다.
                                    </p>
                                </div>
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
                            <RowWrapper>
                                <RowTitle>생년월일</RowTitle>
                                <div className="birth_day">
                                    <input
                                        type="text"
                                        name="birth_year"
                                        id="birth_year"
                                        pattern="[0-9]*"
                                        label="생년월일"
                                        size="4"
                                        maxLength="4"
                                        placeholder="YYYY"
                                    />
                                    <span className="bar"></span>
                                    <input
                                        type="text"
                                        name="birth[]"
                                        id="birth_month"
                                        pattern="[0-9]*"
                                        label="생년월일"
                                        size="2"
                                        maxLength="2"
                                        placeholder="MM"
                                    />
                                    <span className="bar"></span>
                                    <input
                                        type="text"
                                        name="birth[]"
                                        id="birth_day"
                                        pattern="[0-9]*"
                                        label="생년월일"
                                        size="2"
                                        maxLength="2"
                                        placeholder="DD"
                                    />
                                </div>
                            </RowWrapper>
                            <RowWrapper className="route">
                                <RowTitle>추가입력 사항</RowTitle>
                                <div className="inner_route">
                                    <div className="group_radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="recommend"
                                                id="recommendId"
                                                label="추천인아이디"
                                            />
                                            <span className="ico"></span>
                                            추천인 아이디
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="recommend"
                                                id="eventName"
                                                labe="참여이벤트명"
                                            />
                                            <span className="ico"></span>
                                            참여 이벤트명
                                        </label>
                                    </div>
                                    <div className="input_wrapper">
                                        <input
                                            type="text"
                                            name="recommid"
                                            class="inp"
                                            placeholder="추천인 아이디를 입력해주세요."
                                            id="recommid"
                                        />
                                        <p class="txt_guide">
                                            추천인 아이디와 참여 이벤트명 중
                                            하나만 선택 가능합니다. <br />
                                            가입 이후, 수정이 불가합니다. <br />
                                            대소문자 및 띄어쓰기에 유의해주세요.
                                        </p>
                                    </div>
                                </div>
                            </RowWrapper>
                            <tr className="reg_agree">
                                <th className="inner_reg_agree">
                                    이용약관동의
                                    <span className="ico">*</span>
                                </th>
                                <td className="inner_reg_agree_right">
                                    <div className="check">
                                        <label className="check_agree label_all_check label_block">
                                            <input
                                                type="checkbox"
                                                name="agree_allcheck"
                                                value="n"
                                                onChange={(e) => {
                                                    allAgreeHandler(
                                                        e.currentTarget.checked
                                                    );
                                                }}
                                                checked={isAllChecked}
                                            />
                                            <span className="ico"></span>
                                            전체 동의합니다
                                        </label>
                                        <p className="sub">
                                            선택항목에 동의하지 않은 경우도
                                            회원가입 및 일반적인 서비스를 이용할
                                            수 있습니다.
                                        </p>
                                    </div>
                                    <div className="check_view">
                                        <label className="check_agree label_block">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                label="이용약관"
                                                value="provision"
                                                onChange={(e) => {
                                                    agreeHandler(
                                                        e.currentTarget.checked,
                                                        e.target.value
                                                    );
                                                }}
                                                checked={
                                                    checkedItems.includes(
                                                        "provision"
                                                    )
                                                        ? true
                                                        : false
                                                }
                                            />
                                            <span className="ico"></span>
                                            이용약관 동의
                                            <span className="sub">(필수)</span>
                                        </label>
                                        <Link
                                            to="#"
                                            className="link btn_link btn_agreement"
                                        >
                                            약관보기
                                        </Link>
                                    </div>
                                    <div className="check_view">
                                        <label className="check_agree label_block">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                label="이용약관"
                                                value="privacy_required"
                                                onClick={(e) =>
                                                    agreeHandler(
                                                        e.currentTarget.checked,
                                                        e.target.value
                                                    )
                                                }
                                                checked={
                                                    checkedItems.includes(
                                                        "privacy_required"
                                                    )
                                                        ? true
                                                        : false
                                                }
                                            />
                                            <span className="ico"></span>
                                            개인정보 수집·이용 동의
                                            <span className="sub">(필수)</span>
                                        </label>
                                        <Link
                                            to="#"
                                            className="link btn_link btn_agreement"
                                        >
                                            약관보기
                                        </Link>
                                    </div>
                                    <div className="check_view">
                                        <label className="check_agree label_block">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                label="이용약관"
                                                value="privacy_optional"
                                                onClick={(e) =>
                                                    agreeHandler(
                                                        e.currentTarget.checked,
                                                        e.target.value
                                                    )
                                                }
                                                checked={
                                                    checkedItems.includes(
                                                        "privacy_optional"
                                                    )
                                                        ? true
                                                        : false
                                                }
                                            />
                                            <span className="ico"></span>
                                            개인정보 수집·이용 동의
                                            <span className="sub">(선택)</span>
                                        </label>
                                        <Link
                                            to="#"
                                            className="link btn_link btn_agreement"
                                        >
                                            약관보기
                                        </Link>
                                    </div>
                                    <div className="check_view">
                                        <label className="check_agree label_block">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                label="이용약관"
                                                value="event"
                                                onChange={(e) => {
                                                    eventAgreeHandler(
                                                        e.currentTarget.checked,
                                                        e.target.value
                                                    );
                                                    allEventAgreeHandler(
                                                        e.currentTarget.checked
                                                    );
                                                }}
                                                checked={
                                                    checkedItems.includes(
                                                        "event"
                                                    )
                                                        ? true
                                                        : false
                                                }
                                            />
                                            <span className="ico"></span>
                                            무료배송, 할인쿠폰 등 혜택/정보 수신
                                            동의
                                            <span className="sub">(선택)</span>
                                        </label>
                                        <div className="check_event email_sms">
                                            <label className="check_agree label_block">
                                                <input
                                                    type="checkbox"
                                                    name="sms"
                                                    value="sms"
                                                    onChange={(e) => {
                                                        eventItemHandler(
                                                            e.currentTarget
                                                                .checked,
                                                            e.target.value
                                                        );
                                                    }}
                                                    checked={
                                                        eventCheckedItems.includes(
                                                            "sms"
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span className="ico"></span>
                                                SMS
                                            </label>
                                            <label className="check_agree label_block">
                                                <input
                                                    type="checkbox"
                                                    name="mailling"
                                                    value="email"
                                                    onChange={(e) => {
                                                        eventItemHandler(
                                                            e.currentTarget
                                                                .checked,
                                                            e.target.value
                                                        );
                                                    }}
                                                    checked={
                                                        eventCheckedItems.includes(
                                                            "email"
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span className="ico"></span>
                                                EMAIL
                                            </label>
                                        </div>
                                        <p className="sms_info">
                                            동의 시 한 달간 [5% 적립] + [무제한
                                            무료배송]
                                            <span className="sub">
                                                (첫 주문 후 적용)
                                            </span>
                                        </p>
                                    </div>
                                    <div className="check_view">
                                        <label className="check_agree label_block">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                label="이용약관"
                                                value="age"
                                                onChange={(e) => {
                                                    agreeHandler(
                                                        e.currentTarget.checked,
                                                        e.target.value
                                                    );
                                                }}
                                                checked={
                                                    checkedItems.includes("age")
                                                        ? true
                                                        : false
                                                }
                                            />
                                            <span className="ico"></span>
                                            본인은 만 14세 이상입니다.
                                            <span className="sub">(필수)</span>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <div id="formSubmit" className="form_footer">
                                <button
                                    type="button"
                                    className="btn active btn_join"
                                >
                                    가입하기
                                </button>
                            </div>
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
    letter-spacing: 0.5px;

    .route {
        border-bottom: 1px solid black;
    }

    .form_footer {
        padding-top: 40px;
        padding-bottom: 40px;
        text-align: center;

        .btn_join {
            width: 240px;
            height: 56px;
            font-size: 16px;
            line-height: 54px;
            border-radius: 4px;
        }

        .btn.active {
            border: 1px solid #5f0081;
            background-color: #5f0080;
            color: #fff;
        }
    }

    .sms_info {
        margin-left: 60px;
        padding: 0 0 6px 16px;
        background: url(https://res.kurly.com/pc/service/common/2006/ico_sub_dot.svg)
            no-repeat 0 0;
        background-size: 16px 20px;
        font-size: 12px;
        color: #5f0080;
        line-height: 18px;
        letter-spacing: -0.5px;
    }

    .btn_link {
        position: absolute;
        right: 22px;
        top: 0;
        padding-top: 12px;
        font-size: 14px;
        color: #5f0080;
        line-height: 18px;
        letter-spacing: 0;
    }

    .btn_link:after {
        content: "";
        display: inline-block;
        margin-top: 4px;
        margin-left: 4px;
        width: 6px;
        height: 9px;
        background: url(https://res.kurly.com/pc/service/common/2006/ico_arrow_6x9.svg)
            no-repeat 50% 0;
        background-size: 6px 9px;
        vertical-align: top;
    }

    input[type="checkbox"] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    input[type="checkbox"] + .ico {
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border: 0;
        background: url(https://res.kurly.com/pc/service/common/2006/ico_checkbox.svg)
            no-repeat 50% 50%;
        background-size: 24px 24px;
        vertical-align: -7px;
    }

    input[type="checkbox"]:checked + .ico {
        background: url(https://res.kurly.com/pc/service/common/2006/ico_checkbox_checked.svg)
            no-repeat 50% 50%;
        background-size: 24px 24px;
    }

    .reg_agree {
        margin-top: 10px;

        .inner_reg_agree {
            width: 142px;
            padding: 20px 0 0 20px;
            font-weight: 700;
            font-size: 14px;
            color: #333;
            line-height: 20px;
            vertical-align: top;
            text-align: left;

            .ico {
                color: #ee6a7b;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
            }
        }

        .inner_reg_agree_right {
            padding-bottom: 19px;
            padding: 10px 0;
            font-size: 14px;
            vertical-align: top;
            text-align: left;

            .check {
                display: block;
                overflow: hidden;
                width: 100%;
                padding: 0 0 10px;

                .label_all_check {
                    padding: 12px 0 4px;
                    font-weight: 600;
                    font-size: 17px;
                    line-height: 30px;
                }

                .sub {
                    padding-left: 36px;
                    font-size: 12px;
                    color: #666;
                    line-height: 17px;
                }
            }

            .check_view {
                position: relative;
                padding: 8px 0 7px;

                .check_agree {
                    padding: 8px 0;
                }

                .sub {
                    padding-left: 5px;
                    color: #999;
                }
            }
        }
    }

    .check_event {
        overflow: hidden;
        padding: 3px 0 2px 24px;

        .check_agree {
            float: left;
            padding-right: 80px !important;
        }
    }
`;

const RowWrapper = styled.div`
    display: flex;
    padding-top: 20px;

    .txt_guide {
        display: block;
        font-weight: 500;
        color: gray;
        font-size: 12px;
        line-height: 12px;
        margin-top: 10px;
        float: left;
    }

    label {
        display: inline-block;
        padding: 10px 52px 10px 0%;
        vertical-align: top;
        input[type="radio"] {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        input[type="radio"] + .ico {
            display: inline-block;
            position: relative;
            width: 24px;
            height: 24px;
            margin-right: 12px;
            border: 1px solid #ddd;
            background-color: #fff;
            border-radius: 100%;
            vertical-align: -7px;
        }

        input[type="radio"]:checked + .ico {
            border: 1px solid #5f0081;
            background-color: #5f0080;
        }

        input[type="radio"]:checked + .ico:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 10%;
            height: 10%;
            width: 10px;
            height: 10px;
            margin: -5px 0 0 -5px;
            border-radius: 100%;
            background-color: #fff;
        }
    }

    .birth_day {
        overflow: hidden;
        width: 320px;
        padding-left: 18px;
        border: 1px solid #ccc;
        border-radius: 3px;

        input[type="text"] {
            float: left;
            width: 84px;
            height: 40px;
            border: 0;
            text-align: center;
        }

        .bar {
            float: left;
        }

        .bar:after {
            content: "/";
            float: left;
            width: 22px;
            height: 100%;
            font-size: 14px;
            color: #ccc;
            line-height: 42px;
            text-align: center;
        }
    }

    .inner_route {
        display: block;
        margin-left: 38px;
    }

    .route .group_radio {
        padding: 10px 0 20px;
    }

    .input_wrapper {
        display: block;

        input {
            width: 332px;
            height: 44px;
            padding: 0 14px;
            border: 1px solid #ccc;
            font-size: 14px;
            color: #333;
            line-height: 20px;
            background: #fff;
            outline: none;
            vertical-align: top;
        }

        .txt_guide {
            padding: 10px 0 9px;
            padding-bottom: 15px;
            line-height: 18px;
            clear: both;
        }
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
