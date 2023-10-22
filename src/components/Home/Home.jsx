import React, { useState } from "react";
import "./Home.css";
import "./MobileHome.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Connection from "../Connections/Connection";
import HomeNav from "../HomeNav/HomeNav";
import Product from "../Product/Product";
import HomeChat from "./HomeChat/HomeChat";

function Home() {
  const [loading, setLoading] = useState("loader");
  function onloading() {
    {
      setLoading("loader hidden");
    }
  }

  return (
    <div className="Home" onLoad={onloading}>
      <div className={loading}></div>
      <HomeNav></HomeNav>
      {/* main section */}
      <div className="home-main ">
        <div className="BGcolor">
          <img className="main-img" src="http://assistantgpt4.com/GPT.png" alt="main-img" />
          <img
            className="main-img maingptlogo"
            src="http://assistantgpt4.com/GPTlogo.png"
            alt="main-img"
          />
          <img className="main-img" src="http://assistantgpt4.com/assistant.png" alt="main-img" />
          <div className="clip-path">
            <div className="mainTitle">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
                نسل بعدی چت بات AI
              </span>
              <h2>دستیار جی پی تی،دسترسی به فراتر از ChatGPT.</h2>
              <p>
                دستیار جی پی تی با ارتقاع قابلیت های ChatGPT امکان تجربه کاربری
                بی نظیری را فراهم آورده.
              </p>
              <a
                href="#explaneContaner"
                className="buyingBtn"
                style={{ borderRadius: "30px" }}
              >
                خدمات
              </a>
            </div>
          </div>
        </div>
        {/* Chat section */}
        <HomeChat></HomeChat>
        {/*  services section */}
        <div id="servicesContaner">
          <div className="servClip">
            <div className="innerServClip"></div>
          </div>
          <div className="expImage">
            <img
              src="https://rockstheme.com/rocks/live-roboart/img/feature/ft.png"
              className="servisesImg"
              alt="servises"
            />
          </div>
          <div className="servicesContent">
            <h4 className="contentTitle">
              دستیار هوشمند شما در دنیای دیجیتال...
            </h4>
            <p className="servicesTextContent">
              به دنیای مملو از امکانات ما که به براساس تکنولوژی ChatGPT طراحی
              شده است خوش آمدید.
            </p>
            <p className="servicesTextContent">
              این چت‌بات دوستی فوق‌العاده قدرتمند برای شماست که می‌تواند با درک
              عمیق متن‌ها، پاسخ‌های هوشمندانه و دقیق به سوالات شما بدهد با
              توانایی های خیره کننده دستیار جی پی تی از نوشتن متون خلاقانه گرفته
              تا پیش بینی نیاز های شما همه و همه در دسترس هستند.
            </p>
            <p className="servicesTextContent">
              به کمک این دوست هوشمند، شما می‌توانید اطلاعات مورد نیازتان را به
              سرعت از اینترنت بیابید و در هر زمانی که خواستید با دنیای دیجیتال
              ارتباط برقرار کنید.
            </p>
            <p className="servicesTextContent" style={{ marginBottom: "2rem" }}>
              بگذارید چت‌بات جدید ما به شما نشان دهد که چگونه می‌توان با یک دوست
              هوشمند، دنیای دیجیتال را تجربه کرد!
            </p>
            <Link
              to={"/Registration"}
              className="buyingBtn"
              style={{ borderRadius: "30px", marginRight: "0.5rem" }}
            >
              ثبت نام
            </Link>
          </div>
        </div>
        {/* explane section */}
        <div id="explaneContaner">
          <div className="expClip"></div>
          <div className="expImage">
            <img
              src="https://rockstheme.com/rocks/live-roboart/img/about/ab.png"
              className="explaneRobote"
              alt="explaneRobote"
            />
            <img
              src="https://rockstheme.com/rocks/live-roboart/img/about/circle.png"
              className="rotatenCercal"
              alt="rutenCercal"
            />
          </div>
          <div className="axplaneContent">
            <div className="axplanText">
              <p className="axplanTextContent">
                <span className="axplanTitletContent">دستیار وب جی پی تی:</span>{" "}
                یک همکار هوش مصنوعی پیشرفته دستیار وب جی پی تی یک ابزار قدرتمند
                در دنیای وب است که با قابلیت‌ها و ویژگی‌های منحصربه‌فرد خود،
                تجربه کاربری شما را بهبود می‌بخشد. این دستیار هوش مصنوعی، به شما
                اجازه می‌دهد تا تعاملی فراتر از ساده‌ترین مراجعه به وب را تجربه
                کنید. برخی از قابلیت‌ها و ویژگی‌های برجسته دستیار وب جی پی تی به
                شرح زیر است:
              </p>
              <p className="axplanTextContent">
                <span className="axplanTitletContent">شخصی‌سازی: </span>دستیار
                وب جی پی تی به شما این امکان را می‌دهد تا تجربه خود را شخصی‌سازی
                کنید. با توجه به نیازها و ترجیحات شما، می‌توانید ویژگی‌ها و
                تنظیمات را تغییر دهید تا به شما خدمت بهتری ارائه دهد.
              </p>
              <p className="axplanTextContent">
                <span className="axplanTitletContent">رابط کاربری محبوب:</span>{" "}
                رابط کاربری دستیار وب جی پی تی بسیار ساده و محبوب است. به شما
                امکان می‌دهد با سهولت به تمامی امکانات و ویژگی‌ها دسترسی پیدا
                کنید و به راحتی با آن تعامل کنید.
              </p>
              <p className="axplanTextContent">
                <span className="axplanTitletContent">
                  توانایی درک و استنتاج بالا:
                </span>{" "}
                این دستیار با بهره‌گیری از هوش مصنوعی پیشرفته، توانایی درک
                نیازهای شما را دارد و می‌تواند استنتاجات منطقی بگیرد تا به شما
                پاسخ‌های دقیق‌تری ارائه دهد.
              </p>
              <p className="axplanTextContent">
                <span className="axplanTitletContent">جستجوی بهینه:</span>{" "}
                دستیار وب جی پی تی از هوش مصنوعی برای انجام جستجوی سریع و بهینه
                در وب استفاده می‌کند. این به شما امکان می‌دهد تا به راحتی به
                اطلاعات مورد نیاز دسترسی پیدا کنید.
              </p>
              <p className="axplanTextContent">
                <span className="axplanTitletContent">ذخیره و انالیز داده:</span> دستیار وب جی پی تی از قابلیت ذخیره و انالیز
                داده‌های شما پشتیبانی می‌کند. این به شما کمک می‌کند تا اطلاعات
                خود را به صورت ایمن ذخیره کرده و تحلیل‌های دقیق‌تری از آنها
                انجام دهید.
              </p>
            </div>
            <div className="explaneBtn">
              <Link
                to={"/products"}
                className="buyingBtn"
                style={{ borderRadius: "30px", marginRight: "0.5rem" }}
              >
                محصولات
              </Link>
            </div>
          </div>
        </div>
        {/* pricing plan section */}
        <div className="homeArticlePlan">
        <div className="homeArticlePlanTitle">
            تازه ترین مقاله ها
        </div>
        <div className="pricingPlans">

          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>

        </div>
        {/* news section */}
        <div className="news">
          <div className="newsOver">
            <br />
            <br /> .قسمت اخبار هنوز در دسترس نیست
          </div>
        </div>
        {/* connections */}
        <Connection></Connection>
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
