const Detail = () => {
  return (
    <>
      <div id="main">
        <div className="section_view">
          <img
            src="https://img-cf.kurly.com/shop/data/goods/1614162914169y0.jpg"
            className="thumb"
          />
          <div style={{ float: "right" }}>
            <p className="goods_name">
              <span className="btn_share">
                <button id="btnShare"></button>
              </span>
              <strong className="name">
                [선물세트] 루치펠로 치약 & 마우스 워시 6종 세트
              </strong>
              <span className="short_desc">
                청결과 향기를 더하는 구강 케어 세트
              </span>
            </p>
            <p className="goods_price">
              <span className="dcinfo">회원할인가</span>
              <span className="dc">
                <span className="dc_price">32,780원</span>
                <span className="dc_percent">28%</span>
              </span>
              <span className="original_price">
                <span className="price">45,900원</span>
                <img
                  src="https://res.kurly.com/kurly/ico/2021/question_24_24_c999.svg"
                  className="ico_q"
                />
              </span>
              <span className="not_login">
                로그인 후, 회원할인가와 적립혜택이 제공됩니다.
              </span>
            </p>
            <div className="goods_info">
              <dl className="list fst">
                <dt className="tit">판매단위</dt>
                <dd className="description">1개</dd>
              </dl>
              <dl className="list">
                <dt className="tit">배송구분</dt>
                <dd className="description">샛별배송/택배배송</dd>
              </dl>
              <dl className="list">
                <dt className="tit">포장타입</dt>
                <dd className="description">
                  기타
                  <strong className="emph">
                    택배배송은 에코포장이 스티로폼으로 대체됩니다.
                  </strong>
                </dd>
              </dl>
            </div>
            <div id="cartPut">
              <div className="list_goods">
                <span className="tit_item">구매수량</span>
                <span className="count">
                  <button type="button" className="btn down on"></button>
                  <input
                    type="number"
                    readOnly="readonly"
                    className="inp"
                    placeholder="1"
                  />
                  <button type="button" className="btn up on"></button>
                </span>
              </div>
              <div className="total">
                <div className="price">
                  <strong className="tit">총 상품금액 :</strong>
                  <span className="sum">
                    <span className="num">45,900</span>
                    <span className="won">원</span>
                  </span>
                </div>
                <p className="txt_point">
                  <span className="ico_r">적립</span>
                  <span className="no_login">
                    <span>로그인 후, 회원할인가와 적립혜택 제공</span>
                  </span>
                </p>
              </div>
              <div className="group_btn">
                <button type="button" className="btn btn_alarm">
                  재입고 알림
                </button>
                <button type="button" className="btn btn_bag">
                  장바구니 담기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-wrapper goods-view-area">
          <div className="goods-add-product">
            <h3 className="goods-add-product-title">RELATED PRODUCT</h3>
            <div className="goods-add-product-wrapper">
              <button className="goods-add-product-move goods-add-product-move-left"></button>
              <button className="goods-add-product-move goods-add-product-move-right"></button>
              <div className="goods-add-product-list-wrapper">
                <div className="goods-add-product-item">
                  <div className="goods-add-product-item-figure">
                    <img
                      src="https://img-cf.kurly.com/shop/data/goods/162916677180m0.jpg"
                      className="goods-add-product-item-image"
                    />
                  </div>
                  <div className="goods-add-product-item-content">
                    <div className="goods-add-product-item-content-wrapper">
                      <p className="goods-add-product-item-name">
                        [루치펠로] 휴대용 세트 (치약25g & 칫솔 세트) 4종
                      </p>
                      <p className="goods-add-product-item-price">6,900원</p>
                    </div>
                  </div>
                </div>
                <div className="goods-add-product-item">
                  <div className="goods-add-product-item-figure">
                    <img
                      src="https://img-cf.kurly.com/shop/data/goods/1591319949308m0.jpg"
                      className="goods-add-product-item-image"
                    />
                  </div>
                  <div className="goods-add-product-item-content">
                    <div className="goods-add-product-item-content-wrapper">
                      <p className="goods-add-product-item-name">
                        [루치펠로] 어린이 칫솔 3종
                      </p>
                      <p className="goods-add-product-item-price">4,300원</p>
                    </div>
                  </div>
                </div>
                <div className="goods-add-product-item">
                  <div className="goods-add-product-item-figure">
                    <img
                      src="https://img-cf.kurly.com/shop/data/goods/1637925071542m0.jpg"
                      className="goods-add-product-item-image"
                    />
                  </div>
                  <div className="goods-add-product-item-content">
                    <div className="goods-add-product-item-content-wrapper">
                      <p className="goods-add-product-item-name">
                        [루치펠로] 프리미엄 치약&칫솔 퍼플에디션
                      </p>
                      <p className="goods-add-product-item-price">15,900원</p>
                    </div>
                  </div>
                </div>
                <div className="goods-add-product-item">
                  <div className="goods-add-product-item-figure">
                    <img
                      src="https://img-cf.kurly.com/shop/data/goods/1503649918888m0.jpg"
                      className="goods-add-product-item-image"
                    />
                  </div>
                  <div className="goods-add-product-item-content">
                    <div className="goods-add-product-item-content-wrapper">
                      <p className="goods-add-product-item-name">
                        [루치펠로] 마우스워시 3종
                      </p>
                      <p className="goods-add-product-item-price">15,000원</p>
                    </div>
                  </div>
                </div>
                <div className="goods-add-product-item">
                  <div className="goods-add-product-item-figure">
                    <img
                      src="https://img-cf.kurly.com/shop/data/goods/15780408435m0.jpg"
                      className="goods-add-product-item-image"
                    />
                  </div>
                  <div className="goods-add-product-item-content">
                    <div className="goods-add-product-item-content-wrapper">
                      <p className="goods-add-product-item-name">
                        [선물세트] 루치펠로 치약 6입 선물세트
                      </p>
                      <p className="goods-add-product-item-price">58,000원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="goods-view-information">
          <div className="goods-view-tab">
            <ul className="goods-view-information-tab-group">
              <li className="goods-view-information-tab">
                <a href="#" className="goods-view-information-tab-anchor">
                  상품설명
                </a>
              </li>
              <li className="goods-view-information-tab">
                <a href="#" className="goods-view-information-tab-anchor">
                  상세정보
                </a>
              </li>
              <li className="goods-view-information-tab goods-view-review-tab">
                <a href="#" className="goods-view-information-tab-anchor">
                  후기
                  <span className="count_review">(216)</span>
                </a>
              </li>
              <li className="goods-view-information-tab">
                <a href="#" className="goods-view-information-tab-anchor">
                  문의
                </a>
              </li>
            </ul>
          </div>

          <div
            className="goods-view-information-content"
            id="goods-description"
          >
            <div className="goods_wrap">
              <div className="goods_intro">
                <div className="pic">
                  <img src="https://img-cf.kurly.com/shop/data/goodsview/20210224/gv00000160899_1.jpg" />
                </div>
                <div className="context last">
                  <h3>
                    <small>청결과 향기를 더하는 구강 케어 세트</small>
                    [루치펠로]
                    <br />
                    치약 & 마우스 워시 6종 세트
                  </h3>
                  <p className="words">
                    루치펠로 치약과 마우스워시는 전 세계 바다를 돌며 영감을 받은
                    전문 조향사의 섬세한 감각으로 디자인되었는데요. 이색적인
                    향은 물론, 고급스러운 패키지 덕에 트렌드에 민감한 셀럽들과
                    젊은 층에서도 주목받아왔답니다. 제주도 청정 지역에서 정수해
                    온 해양 추출물과 자연에서 추출한 깨끗한 성분으로
                    만들어졌기에 더욱 믿을만해요. 집들이나 생일 등 각종 축하의
                    상황에서 루치펠로 선물세트는 실용적이면서도 멋을 더한 센스
                    만점 선물이 되어 줄 거예요.
                  </p>
                </div>
              </div>
              <div className="goods_point">
                <h3>
                  <span>Kurly's Check Point</span>
                </h3>
                <div className="context last">
                  <div className="pic">
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20210224/gv00000161040_1.jpg" />
                  </div>
                </div>
              </div>
              <div className="goods_pick">
                <h3>
                  <span>Kurly's Pick</span>
                </h3>
                <div className="context last">
                  <p className="words">
                    <strong className="sub_tit">
                      치약 & 마우스 워시 6종 세트
                    </strong>
                    <b>구성</b>
                    : ①미스틱포레스트 치약 1개, ②민티오션솔트 치약 1개,
                    ③트로피칼오션 치약 1개, ④미스틱포레스트 마우스 워시 1개,
                    ⑤민티오션솔트 마우스 워시 1개, ⑥트로피칼오션 마우스 워시 1개
                    <br />
                    <br />
                    <b>①미스틱포레스트 치약</b>
                    <br />
                    <b>중량</b>
                    : 100g X 1개입
                    <br />
                    <b>불소 함량</b>
                    : 불소 528ppm을 함유하고 있어요.
                    <br />
                    <b>특징</b>
                    : 유칼립투스향과 민트 향이 어우러져 시원한 바다를 연상케하는
                    구취 케어 치약입니다.
                    <br />
                    <br />
                    <b>②민티오션솔트 치약</b>
                    <br />
                    <b>・중량</b>
                    : 100g X 1개입
                    <br />
                    <b>・불소 함량</b>
                    : 불소 594ppm을 함유하고 있어요.
                    <br />
                    <b>・특징</b>
                    : 시원한 민트 향과 바다의 짭조름한 맛이 동시에 느껴지는
                    안티프라그 치약입니다.
                    <br />
                    <br />
                    <b>③트로피칼오션 치약</b>
                    <br />
                    <b>・중량</b>
                    : 100g X 1개입
                    <br />
                    <b>・불소 함량</b>
                    : 불소 90ppm을 함유하고 있어요.
                    <br />
                    <b>・특징</b>
                    : 부드러우면서도 시원한 스피아민트 향에 향긋한 시트러스 향이
                    더해진 잇몸 케어 치약입니다.
                    <br />
                    <br />
                    <b>④미스틱포레스트 마우스 워시</b>
                    <br />
                    <b>・중량</b>
                    : 100mL X 1개입
                    <br />
                    <b>・불소 함량</b>
                    : 불소 90ppm을 함유하고 있어요.
                    <br />
                    <b>・특징</b>
                    : 텁텁하고 마른 입을 청량하고 산뜻하게 만들어 주는
                    가글입니다.
                    <br />
                    <br />
                    <b>⑤민티오션솔트 마우스 워시</b>
                    <br />
                    <b>・중량</b>
                    : 100mL X 1개입
                    <br />
                    <b>・불소 함량</b>
                    : 불소 90ppm을 함유하고 있어요.
                    <br />
                    <b>・특징</b>
                    : 짭짤한 민트 향이 색다른 개운함을 선사하는 가글입니다.
                    <br />
                    <br />
                    <b>⑥트로피칼오션 마우스 워시</b>
                    <br />
                    <b>・중량</b>
                    : 100mL X 1개입
                    <br />
                    <b>・불소 함량</b>
                    : 불소 528ppm을 함유하고 있어요.
                    <br />
                    <b>・특징</b>: 산뜻한 시트러스 향과 청량한 페퍼민트 향이
                    어우러진 가글입니다.
                  </p>
                </div>
              </div>
              <div className="goods_tip">
                <h3>
                  <span>Kurly’s Tip</span>
                </h3>
                <div className="tip_box">
                  <div className="context">
                    <p className="words">
                      <strong>구입 전 확인 사항</strong>
                      <b>・</b>
                      선물세트를 넣을 수 있는 전용 쇼핑백을 함께 보내드립니다.
                    </p>
                    <p className="words">
                      <strong>마우스 워시 사용법</strong>
                      <b>・</b>
                      약 15~30mL를 입에 머금고 30초 정도 가글한 후 뱉어내주세요.
                      <br />
                    </p>
                    <p className="words">
                      <strong>주의 사항</strong>
                      <b>・</b>
                      루치펠로 치약과 가글은 모두 불소를 함유하고 있으니
                      어린이나 민감하신 분은 구매 전 참고하세요.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="goods_note">
                <h3>
                  <span>Kurly’s Note</span>
                </h3>
                <div className="context">
                  <div className="pic">
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20210224/gv00000161049_1.jpg" />
                  </div>
                </div>
                <div className="context">
                  <p className="words">
                    <strong className="sub_tit"> EWG에 대한 컬리의 생각</strong>
                    컬리는 화장품, 샴푸, 치약, 세제 등 우리의 인체에 닿는 리빙
                    제품의 전성분을 공개하고 성분의 위험 정도를 EWG 기준에 따라
                    1~10 숫자로 안내하고 있습니다. EWG가 세계적으로 널리
                    사용되는 신뢰할 수 있는 척도인 것은 맞지만, 상품의 안전성을
                    증명하는 절대적인 기준은 아니에요. EWG로부터 좋지 못한
                    평가를 받은 성분에 대해 전문가와 유관기관은 '권고 기준치를
                    지켜 사용할 경우 무해하다'고 평가하기도 합니다. 이에 컬리는
                    EWG 등급과 인터넷에 떠도는 단편적인 정보에만 의존하지 않고
                    식품의약품안전처, 에코서트(ECOCERT), 미국식품의약국(FDA),
                    미국화장품원료검토위원회(CIR)등 공신력 있는 인증기관의
                    의견을 참고하여 유해성 여부를 꼼꼼하게 따져 보고 있습니다.
                    <br />
                    <br />
                    <b>[EWG 성분 체크하기]</b>
                    <br />
                    컬리는 EWG로부터 보통, 위험 등급을 받은 성분이라 하더라도
                    숨기지 않고 정직하게 공개합니다. 더불어 우려되는 성분에 대한
                    정보를 함께 제공해 드리오니 구입 전 반드시 확인해 주세요.
                    <br />
                    <br />
                    <b>・산화티탄</b>
                    : 백색을 내는 착색제의 일종입니다.
                    <br />
                    <b>・폴리에틸렌글리콜1500</b>
                    : 치약용으로 사용하는 의약품 첨가제입니다.
                    <br />
                    <b>・알란토인클로로하이드록시알루미늄</b>
                    : 잇몸 염증, 붓기를 예방하기 위한 목적으로 사용하는
                    성분입니다.
                    <br />
                    <b>・라우로일사르코신나트륨</b>
                    : 세정제의 목적으로 사용되는 계면활성제입니다.
                    <br />
                    <b>・폴리옥시에틸렌경화피마자유</b>
                    : 성분들이 잘 섞이도록 하는 계면활성제 성분입니다.
                    <br />
                    <b>・토코페롤아세테이트</b>
                    : 의약품 첨가물로 사용하는 성분으로 산소와의 반응을 억제해
                    화장품의 품질, 보존 및 안정성을 유지하는 데 중요한 역할을
                    합니다.
                    <br />
                    <b>・플루오르화나트륨</b>: 충치 발생을 억제하는데 도움을
                    주는 불소 성분입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="goods-view-information-content"
            id="goods-information"
          >
            <div id="goods-image">
              <img src="https://img-cf.kurly.com/shop/data/goodsview/20210224/gv20000161042_1.jpg" />
            </div>
            <table
              border="0"
              className="extra-information"
              width="100%"
              cellPadding="0"
              cellSpacing="1"
            >
              <tbody>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    용량 또는 중량
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                  <th scope="row" className="goods-view-form-table-heading">
                    제조국
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                </tr>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    제품 주요 사양 (피부타입, 색상(호, 번) 등)
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                  <th scope="row" className="goods-view-form-table-heading">
                    화장품법에 따라 기재·표시하여야 하는 모든 성분
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                </tr>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    사용기한 또는 개봉 후 사용기간(개봉 후 사용기간을 기재할
                    경우에는 제조연월일을 병행표기)
                  </th>
                  <td>제품 별도 라벨 표기 참조</td>
                  <th scope="row" className="goods-view-form-table-heading">
                    기능성 화장품의 경우 화장품법에 따른 식품의약품안전처 심사
                    필 유무 (미백, 주름개선, 자외선차단,태닝오일, 염색약,
                    탈모샴푸 등)
                  </th>
                  <td>해당사항 없음</td>
                </tr>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    사용방법
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                  <th scope="row" className="goods-view-form-table-heading">
                    사용할 때 주의사항
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                </tr>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    화장품제조업자 및 화장품책임판매업자
                  </th>
                  <td>상품설명 및 상품이미지참조</td>
                  <th scope="row" className="goods-view-form-table-heading">
                    품질보증기준
                  </th>
                  <td>
                    본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자
                    분쟁해결 기준에 의해 보상해드립니다.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="goods-view-form-table-heading">
                    소비자상담 관련 전화번호
                  </th>
                  <td>마켓컬리 고객행복센터 (1644-1107)</td>
                  <th
                    scope="row"
                    className="goods-view-form-table-heading"
                  ></th>
                  <td></td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <div className="whykurly_area">
              <div className="row">
                <strong className="tit_whykurly">WHY KURLY</strong>
                <div id="why_kurly" className="txt_area">
                  <div className="why_kurly">
                    <div className="col">
                      <div className="icon">
                        <img src="https://res.kurly.com/pc/ico/1910/01_check.svg" />
                      </div>
                      <div className="info">
                        <div className="title">깐깐한 상품위원회</div>
                        <div className="desc">
                          <p>
                            나와 내 가족이 먹고 쓸 상품을 고르는
                            <br />
                            마음으로 매주 상품을 직접 먹어보고,
                            <br />
                            경험해보고 성분, 맛, 안정성 등 다각도의
                            <br />
                            기준을 통과한 상품만을 판매합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon">
                        <img src="	https://res.kurly.com/pc/ico/1910/02_only.svg" />
                      </div>
                      <div className="info">
                        <div className="title">차별화된 Kurly Only 상품</div>
                        <div className="desc">
                          <p>
                            전국 각지와 해외의 훌륭한 생산자가
                            <br />
                            믿고 선택하는 파트너, 마켓컬리.
                            <br />
                            3천여 개가 넘는 컬리 단독 브랜드, 스펙의
                            <br />
                            Kurly Only 상품을 믿고 만나보세요.
                          </p>
                          <span className="etc">
                            (온라인 기준 / 자사몰, 직구 제외)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon">
                        <img src="https://res.kurly.com/pc/ico/1910/03_cold.svg" />
                      </div>
                      <div className="info">
                        <div className="title">신선한 풀콜드체인 배송</div>
                        <div className="desc">
                          <p>
                            온라인 업계 최초로 산지에서 문 앞까지
                            <br />
                            상온, 냉장, 냉동 상품을 분리 포장 후
                            <br />
                            최적의 온도를 유지하는 냉장 배송 시스템,
                            <br />
                            풀콜드체인으로 상품을 신선하게 전해드립니다.
                          </p>
                          <span className="etc">(샛별배송에 한함)</span>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="icon">
                        <img src="https://res.kurly.com/pc/ico/1910/01_check.svg" />
                      </div>
                      <div className="info">
                        <div className="title">깐깐한 상품위원회</div>
                        <div className="desc">
                          <p>
                            나와 내 가족이 먹고 쓸 상품을 고르는
                            <br />
                            마음으로 매주 상품을 직접 먹어보고,
                            <br />
                            경험해보고 성분, 맛, 안정성 등 다각도의
                            <br />
                            기준을 통과한 상품만을 판매합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="icon">
                        <img src="https://res.kurly.com/pc/ico/1910/01_check.svg" />
                      </div>
                      <div className="info">
                        <div className="title">깐깐한 상품위원회</div>
                        <div className="desc">
                          <p>
                            나와 내 가족이 먹고 쓸 상품을 고르는
                            <br />
                            마음으로 매주 상품을 직접 먹어보고,
                            <br />
                            경험해보고 성분, 맛, 안정성 등 다각도의
                            <br />
                            기준을 통과한 상품만을 판매합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="happy_center fst">
              <div className="happy">
                <h4 className="tit">고객행복센터</h4>
                <p className="sub">
                  <span className="emph">
                    궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?
                  </span>
                  <span className="txt">
                    문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로
                    접수해 주시면 빠르게 도와드리겠습니다.
                  </span>
                </p>
              </div>
            </div>
            <div className="happy_center on"></div>
            <div className="happy_center on"></div>
            <div className="happy_center lst"></div>
          </div>
          <div
            className="goods-view-information-content"
            id="goods-review"
          ></div>
          <div className="goods-view-information-content" id="goods-qna"></div>
        </div>
      </div>
    </>
  );
};

export default Detail;
