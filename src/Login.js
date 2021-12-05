const Login = () => {
  return (
    <>
      <div id="main">
        <div className="section_login">
          <h3 className="tit_login">로그인</h3>
          <div className="write_form">
            <form>
              <input type="text" placeholder="아이디를 입력해주세요" />
              <input
                type="password"
                className="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <div className="checkbox_save">
                <label className="label_checkbox">
                  <input type="checkbox" id="chk_security" />
                  보안접속
                </label>
                <div className="login_search">
                  <a href="#" className="link">
                    아이디 찾기
                  </a>
                  <span className="bar"></span>
                  <a href="#" className="link">
                    비밀번호 찾기
                  </a>
                </div>
              </div>
              <button className="btn_type1" type="submit">
                <span className="txt_type">로그인</span>
              </button>
            </form>
            <a className="btn_type2 btn_member">
              <span className="txt_type">회원가입</span>
            </a>
          </div>
        </div>
      </div>
      v
    </>
  );
};

export default Login;
