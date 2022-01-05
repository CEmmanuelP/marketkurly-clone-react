import { Link, NavLink } from "react-router-dom";
import TopBanner from "../../TopBanner";

const Header = () => {
    return (
        <div id="header">
            <TopBanner />
            <div id="headerHeader">
                <div className="bnr_delivery">
                    <a href="#">
                        <img
                            src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png"
                            width="121"
                            height="22"
                        />
                    </a>
                </div>
                <div id="userMenu">
                    <div className="menu menu_join">
                        <NavLink to="join" className="link_menu">
                            회원가입
                        </NavLink>
                    </div>
                    <div className="menu menu_login">
                        <NavLink to="login" className="link_menu">
                            로그인
                        </NavLink>
                    </div>
                    <div className="menu menu_cs">
                        <a href="#" className="link_menu">
                            고객센터
                        </a>
                    </div>
                </div>
            </div>
            <div id="headerLogo">
                <h1 className="logo">
                    <NavLink to="/">
                        <img
                            src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                            alt="logo"
                        />
                    </NavLink>
                </h1>
            </div>
            <div id="gnb">
                <div id="inner_gnb">
                    <div className="gnb_main">
                        <ul className="gnb">
                            <li className="menu1">
                                <a href="#">
                                    <span className="ico"></span>
                                    <span className="txt">전체 카테고리</span>
                                </a>
                            </li>
                            <li className="menu2">
                                <a href="#">
                                    <span className="txt">신상품</span>
                                </a>
                            </li>
                            <li className="menu3">
                                <NavLink to="/best">
                                    <span className="txt">베스트</span>
                                </NavLink>
                            </li>
                            <li className="menu4">
                                <a href="#">
                                    <span className="txt">알뜰쇼핑</span>
                                </a>
                            </li>
                            <li>
                                <a href="menu5">
                                    <span className="txt">특가/혜택</span>
                                </a>
                            </li>
                        </ul>
                        <div className="gnb_search">
                            <form action="#">
                                <input
                                    placeholder="검색어를 입력해주세요."
                                    className="inp_search"
                                />
                                <input
                                    type="image"
                                    src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
                                    className="btn_search"
                                />
                            </form>
                        </div>
                        <div className="location_set">
                            <button
                                type="button"
                                className="btn_location"
                            ></button>
                        </div>
                        <div className="cart_count">
                            <div className="inner_cartcount">
                                <Link to="cart" className="btn_cart"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
