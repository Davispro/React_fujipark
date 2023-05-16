import React from 'react'
import styles from '../../stylesheets/fujipark.css'

function Information() {
  return (
    <>
      <section id="information">
        <div class="info_container">
          <div class="one_wrap">
            <div class="info_one d-flex flex-column justify-content-center">
              <h2 id="scrollspyHeading1" class="h2-font ">
                設施概要
              </h2>
              <p class="p-font p-margin-one">
                乘坐纜車前往葛城山山頂的絕景勝地！
                <br />
                在能夠遠眺雄偉富士山的開放式露台，您可以享受到別處無法體驗到的非凡日常。
              </p>
              <img
                src="../imgs/info_one_pic.jpg"
                class="info_one_pic d-flex align-self-center"
                alt=""
              />
              <p class="p-font p-margin-one">
                「伊豆全景公園」是由絕景綿延至葛城山山頂的天空露台山頂區，以及聚集了許多商家與餐廳的山腳區所組成的一座一日遊度假設施。在這裡，您可以透過搭乘纜車前往各區。
              </p>
            </div>
          </div>
          <hr class="hr-font" />

          <div class="two_wrap">
            <div class="info_two">
              <h2 id="scrollspyHeading2" class="h2-font mb-110">
                碧露台
              </h2>
              <span class="d-flex flex-row">
                <img
                  src="../imgs/info_two_pic.jpg"
                  class="info_two_pic"
                  alt=""
                />
                <p class="p-font info_two_p p-margin-two">
                  「碧露台」是一處展望廣場。上面有使用水盤而做成的觀景台，並且配有沙發和長椅，讓旅客能夠自由地放鬆坐著。在凝視著一望無際的壯麗景色中，您也會跟著沈浸於只有在山頂上才能體驗到的開闊感，這絕對是最幸福的時刻！您還可以用一手拿著咖啡或啤酒等喜歡的飲品，盡情享受交織在天空、陽光、大海、富士山美景中的「碧露台」！
                  <br />
                  與碧露台相鄰的葛城神社，以可追朔至平安時代的歷史為豪，而這也正是葛城山名稱的由來。
                </p>
              </span>
            </div>
          </div>
          <hr class="hr_three_top" />

          <div class="three_wrap">
            <div class="info_three">
              <h2 id="scrollspyHeading3" class="h2-font mb-60">
                餐廳＆咖啡廳＆商店
              </h2>

              <div class="shop">
                <span class="shop_span d-md-flex flex-md-row d-sm-flex flex-sm-column  ">
                  <img
                    src="../imgs/info_three_pic_1.jpg"
                    class="col-md-5 shop_img"
                    alt=""
                  />

                  <span class="content_bg d-flex flex-column justify-content-center">
                    <h4 class="h4_font_padding h4-font mb-md-30">
                      TRATTORIA IZU PARADISO
                    </h4>
                    <p class="p-font p_font_padding">
                      山腳下的義大利餐廳「Trattoria Izu
                      Paradiso」擁有寬敞的室內空間，您可以在這裡享用使用當地食材烹製的道地義大利美食，以及手工麵糰下去製作的披薩。另外，您還可以在露台座位與寵物共度美好的時光。
                      【営業時間】11:00～15:00（最終點餐時間為14:00）
                    </p>
                  </span>
                </span>
              </div>
              <div class="shop">
                <span class="shop_span d-md-flex flex-md-row d-sm-flex flex-sm-column  ">
                  <img
                    src="../imgs/info_three_pic_2.jpg"
                    class="col-md-5 shop_img"
                    alt=""
                  />

                  <span class="content_bg d-flex flex-column justify-content-center">
                    <h4 class="h4_font_padding h4-font mb-md-30">葛城茶寮</h4>
                    <p class="p-font p_font_padding">
                      位在山頂區碧露台的「葛城茶寮」，擁有日式現代裝潢以及觀景席，讓您可以一邊眺望風景一邊享用日本特有的抹茶料理及日式點心。
                      【営業時間】9:00～17:30（冬季到17:00）
                    </p>
                  </span>
                </span>
              </div>
              <div class="shop">
                <span class="shop_span d-md-flex flex-md-row d-sm-flex flex-sm-column  ">
                  <img
                    src="../imgs/info_three_pic_3.jpg"
                    class="col-md-5 shop_img"
                    alt=""
                  />

                  <span class="content_bg d-flex flex-column justify-content-center">
                    <h4 class="h4_font_padding h4-font mb-md-30">葛城珈琲</h4>
                    <p class="p-font p_font_padding">
                      同樣位在山頂區碧露台的「葛城珈琲」，提供滴濾咖啡、咖啡拿鐵和原創無酒精雞尾酒等等，講究又特別的飲品菜單。
                      【営業時間】9:00～17:30（冬季到17:00）
                    </p>
                  </span>
                </span>
              </div>
              <div class="shop">
                <span class="shop_span d-md-flex flex-md-row d-sm-flex flex-sm-column  ">
                  <img
                    src="../imgs/info_three_pic_4.jpg"
                    class="col-md-5 shop_img"
                    alt=""
                  />

                  <span class="content_bg d-flex flex-column justify-content-center">
                    <h4 class="h4_font_padding h4-font mb-md-30">
                      伊豆的旬彩市場
                    </h4>
                    <p class="p-font p_font_padding">
                      在山腳下的伊豆旬彩市場裡，除了可以購入伊豆的著名點心和人氣的當地特產外，每個角落都擺滿了與伊豆相關的商品。擁有富士山特產、抹茶商品、充滿當地特色的原創商品等等，是一處樣式非常豐富的購物空間。
                      【営業時間】9:00～18:00（冬季到17:30）
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <hr class="hr-font" />
        </div>
      </section>
    </>
  )
}

export default Information
