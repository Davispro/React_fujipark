import React from 'react'
import styles from '../../stylesheets/fujipark.css'

function LocationMap() {
  return (
    <>
      <section id="location_map">
        <div class="map_wrap mb-60">
          <h2 id="scrollspyHeading5" class="h2-font mb-60">
            交通地圖
          </h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3885.4047111169!2d138.9272936767117!3d35.02615508360441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601993b0490b9d4f%3A0x1379d6c17cb9191a!2z5LyK6LGG5YWo5pmv5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1681464381101!5m2!1szh-TW!2stw"
            class="map_size mb-30"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <span class="map_context_w d-flex justify-content-center">
            <span class="map_content">
              <div class="top_content">
                <p class="p-font">
                  位於伊豆半島的中央部，不管是乘坐電車或是自行開車都可以抵達的交通便利之處。
                </p>
                <br />
                <p class="p-font-bolder">開車前來的旅客：</p>
                <p class="p-font">
                  從東名高速公路沼津IC或新東名高速公路長泉沼津IC，走東駿河灣環狀道路，經過伊豆中央道路後，在長岡IC下車約1分鐘抵達。
                  從下田、修善寺方向前來，經過修善寺道路後，在長岡IC下車約1分鐘抵達。
                </p>
                <br />
                <p class="p-font-bolder">搭乘電車前來的旅客：</p>
                <p class="p-font ">
                  從東海道新幹線或是JR東海道的三島站換乘伊豆箱根鐵道駿豆線後，在伊豆長岡站下車。
                  換乘伊豆箱根巴士，坐上往「長剛溫泉循環」或「伊豆三津海洋樂園」方向的車次，並在「伊豆之國市役所前」下車。步行約1~2分鐘抵達。
                </p>
              </div>
              <div class="d-flex flex-column">
                <div class="d-md-flex flex-md-row mb-30">
                  <p class="p_mb p-font-bolder col-md-8 ">伊豆之國市觀光協會</p>
                  <button class="web_link">
                    官方網站
                    <svg
                      class="right_svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                  </button>
                </div>

                <div class="d-md-flex flex-md-row mb-30">
                  <p class="p_mb p-font-bolder col-md-8 ">“Guidoor”</p>
                  <button class="web_link">
                    官方網站
                    <svg
                      class="right_svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                  </button>
                </div>
              </div>
            </span>
          </span>
        </div>
      </section>
    </>
  )
}

export default LocationMap
