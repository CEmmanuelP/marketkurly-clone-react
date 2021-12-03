const Footer = () => {
    return (
        <div id="footer">
            <div className="inner_footer">
                <div className="footer_cc">
                    <h2 className="tit_cc">고객행복센터</h2>
                    <div className="cc_view cc_call">
                        <h3>
                            <span className="tit">1644-1107</span>
                        </h3>
                        <dl className="list">
                            <dt>365고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_kakao">
                        <h3>
                            <a className="tit" href="#">
                                카카오톡 문의
                            </a>
                        </h3>
                        <dl className="list">
                            <dt>365고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_qna">
                        <h3>
                            <a className="tit" href="#">
                                1:1 문의
                            </a>
                        </h3>
                        <dl className="list">
                            <dt>24시간 접수 가능</dt>
                            <dd>
                                고객센터 운영시간에 순차적으로
                                답변해드리겠습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_bulkorder">
                        <h3>
                            <a className="tit" href="#">
                                대량주문 문의
                            </a>
                        </h3>
                        <dl className="list">
                            <p className="txt">
                                비회원의 경우 메일로 문의 바랍니다.
                            </p>
                        </dl>
                    </div>
                </div>
                <div className="company">
                    <ul className="list">
                        <li>컬리소개</li>
                        <li>컬리소개영상</li>
                        <li>인재채용</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>이용안내</li>
                    </ul>
                    법인명 (상호) : 주식회사 컬리
                    <span className="bar">I</span>
                    사업자등록번호 : 261-81-23567
                    <a href="#" className="link">
                        사업자정보 확인
                    </a>
                    <br />
                    통신판매업 : 제 2018-서울강남-01646 호
                    <span className="bar">I</span>
                    개인정보보호책임자 : 이원준
                    <br />
                    주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                    <span className="bar">I</span>
                    대표이사 : 김슬아
                    <br />
                    입점문의 :
                    <a href="#" className="link">
                        입점문의하기
                    </a>
                    <span className="bar">I</span>
                    제휴문의 :
                    <a href="#" className="link">
                        business@kurlycorp.com
                    </a>
                    <br />
                    채용문의 :
                    <a href="#" className="link">
                        recruit@kurlycorp.com
                    </a>
                    <br />
                    팩스 : 070 - 7500 - 6098
                    <span className="bar">I</span>
                    이메일 :
                    <a href="#" className="link">
                        help@kurlycorp.com
                    </a>
                    <br />
                    대량주문 문의 :
                    <a href="#" className="link">
                        kurlygift@kurlycorp.com
                    </a>
                    <em className="copy">© KURLY CORP. ALL RIGHTS RESERVED</em>
                    <ul className="list_sns">
                        <li>
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                                className="link_sns"
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_fb.png
                "
                                className="link_sns"
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                                className="link_sns"
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                                className="link_sns"
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                                className="link_sns"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_link">
                <div className="authentication">
                    <a href="#" className="mark">
                        <img
                            src="https://res.kurly.com/pc/ico/2001/logo_isms.png"
                            className="logo"
                        />
                        <p className="txt">
                            [인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영
                            <br />
                            [유효기간] 2019.04.01 ~ 2022.03.31
                        </p>
                    </a>
                    <a href="#" className="mark">
                        <img
                            src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
                            className="logo"
                        />
                        <p className="txt">
                            개인정보보호 우수 웹사이트 ·
                            <br />
                            개인정보처리시스템 인증 (ePRIVACY PLUS)
                        </p>
                    </a>
                    <a href="#" className="mark payments">
                        <img
                            src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"
                            className="logo"
                        />
                        <p className="txt">
                            고객님의 안전거래를 위해 현금 등으로 결제 시 저희
                            쇼핑몰에서 가입한
                            <br />
                            토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실
                            수 있습니다.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
