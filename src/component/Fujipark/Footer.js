import React from 'react'

function Footer() {
  return (
    <>
      <section id="footer">
        <div class="footer_wrap d-flex flex-column">
          <div class="footer_content d-none d-md-flex justify-content-center align-self-center">
            <ul class="footer_ul">
              <span class="d-flex flex-row">
                <img
                  class="footer_icon"
                  src="./imgs/icon/footer-icon01.png"
                  alt=""
                />
                <div class="ul_title"> パークガイド</div>
              </span>
              <li class="li_font">パノラマパークとは</li>
              <li class="li_font">山頂エリア</li>
              <li class="li_font">山麓エリア</li>
              <li class="li_font">おすすめの過ごし方</li>
              <li class="li_font">ライブカメラ</li>
            </ul>
            <ul class="footer_ul">
              <span class="d-flex flex-row">
                <img
                  class="footer_icon"
                  src="./imgs/icon/footer-icon02.png"
                  alt=""
                />
                <div class="ul_title"> パークガイド</div>
              </span>
              <li class="li_font">パノラマパークとは</li>
              <li class="li_font">山頂エリア</li>
              <li class="li_font">山麓エリア</li>
              <li class="li_font">おすすめの過ごし方</li>
              <li class="li_font">ライブカメラ</li>
            </ul>
            <ul class="footer_ul">
              <span class="d-flex flex-row">
                <img
                  class="footer_icon"
                  src="./imgs/icon/footer-icon03.png"
                  alt=""
                />
                <div class="ul_title"> パークガイド</div>
              </span>
              <li class="li_font">パノラマパークとは</li>
              <li class="li_font">山頂エリア</li>
              <li class="li_font">山麓エリア</li>
              <li class="li_font">おすすめの過ごし方</li>
              <li class="li_font">ライブカメラ</li>
            </ul>
            <ul class="footer_ul">
              <span class="d-flex flex-row">
                <img
                  class="footer_icon"
                  src="./imgs/icon/footer-icon04.png"
                  alt=""
                />
                <div class="ul_title"> パークガイド</div>
              </span>
              <li class="li_font">パノラマパークとは</li>
              <li class="li_font">山頂エリア</li>
              <li class="li_font">山麓エリア</li>
              <li class="li_font">おすすめの過ごし方</li>
              <li class="li_font">ライブカメラ</li>
            </ul>
          </div>

          <ul class="ul_content d-none d-md-flex align-self-center">
            <li class="li_row"> FAQ</li>
            <li class="li_row"> お問合せ</li>
          </ul>
          <div class="bottom_content d-flex flex-column ">
            <img
              class="footer_logo align-self-center"
              src="./imgs/icon/footer-logo.png"
              alt=""
            />
            <div class="d-flex flex-row align-self-center">
              <img
                class="footer_icon"
                src="./imgs/icon/footer-map-icon.png"
                alt=""
              />
              <p class="footer_p">静岡県伊豆の国市長岡260-1</p>
            </div>
            <div class="d-flex flex-row align-self-center">
              <img
                class="footer_icon"
                src="./imgs/icon/footer-tel-icon.png"
                alt=""
              />
              <p class="footer_p">055-948-1525</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
