import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../stylesheets/fujipark.css'

function Nav() {
  return (
    <section id="nav">
      <div class="nav_wrap">
        <nav class="nav_style navbar navbar-expand-lg ">
          <div class="container-fluid ">
            <Link className="navbar-brand">
              Bootstrap
              <img
                src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
            </Link>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="nav_font navbar-nav ">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#scrollspyHeading1"
                  >
                    設施概要
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#scrollspyHeading2">
                    碧露台
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#scrollspyHeading3">
                    餐廳＆咖啡廳＆商店
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#scrollspyHeading4">
                    享受日本的四季
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#scrollspyHeading5">
                    交通地圖
                  </a>
                </li>
              </ul>
            </div>
            <Link to="scenery" className="navbar-brand">
              <img
                src="/imgs/ar-logo.png"
                alt=""
                class="logo_right d-none d-lg-flex "
              />
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Nav
