import React from 'react'

function Carousel() {
  return (
    <>
      <section id="carousel">
        <div class="carousel_wrap">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="imgs/carousel1.jpg"
                  class="d-block w-100 carousel_pic"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="imgs/carousel2.jpg"
                  class="d-block w-100 carousel_pic"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="imgs/carousel3.jpg"
                  class="d-block w-100 carousel_pic"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="imgs/carousel4.jpg"
                  class="d-block w-100 carousel_pic"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="imgs/carousel5.jpg"
                  class="d-block w-100 carousel_pic"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span aria-hidden="true">
                <img class="carousel_btn" src="./imgs/prev-btn.png" alt="" />
              </span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span aria-hidden="true">
                <img class="carousel_btn" src="./imgs/next-btn.png" alt="" />
              </span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr class="hr-font" />
      </section>
    </>
  )
}

export default Carousel
