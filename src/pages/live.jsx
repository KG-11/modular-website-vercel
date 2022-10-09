import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/header";

import bgVideo from "../assets/videos/home.mp4";
import fullImage from "../assets/images/render1.webp";
import Gallery1 from "../assets/images/render3.webp";

const Live = () => {
  return (
    <>
      <Header />
      <video className="bg-video" src={bgVideo} autoPlay muted loop></video>
      <main>
        <section className="landing">
          <h2 className="title">Back to the future.</h2>
          <h3 className="title">
            Change the way you live life, closer to nature.
          </h3>
        </section>
        <section className="categories">
          <div className="category">
            <p className="desc-number">No.1</p>
            <p className="desc-title">Live in modular</p>
            <p className="desc">Learn more about module to live in.</p>
          </div>
          <div className="category">
            <p className="desc-number">No.2</p>
            <p className="desc-title">Work from modular</p>
            <p className="desc">Learn more about module to work from.</p>
          </div>
          <div className="category">
            <p className="desc-number">No.3</p>
            <p className="desc-title">Relax at modular</p>
            <p className="desc">Learn more about module to relax at.</p>
          </div>
        </section>
        <section className="category-one">
          <div className="category-heading-row">
            <p>No.1</p>
            <p>Our philosophy</p>
            <p>Back to nature</p>
          </div>
          <div className="category-qa">
            <p className="q">What's Modular ?</p>
            <p className="a">
              Modular are prefabricated, fully finished, modular units. By a
              lake, deep in a forest, at the edge of a field, a steep mountain
              hill or your city rooftop! Make your dream come true, installed in
              one day, no extra on-site work.
            </p>
          </div>
          <div className="category-description">
            <p>
              The shelters are built in one piece, which gives the incredible
              mobility to reach your dream location. Modularity ensures that
              over time you can grow your Ark to your needs. The units are
              created by craftsmen in our factory.
            </p>
            <p>
              We have ideal conditions and are able to reach the highest details
              and reduce production time. Which allows us to keep control of the
              price, remove any onsite construction constraints and make your
              dream home, on time, on budget, at the highest quality possible.
            </p>
          </div>
          <div className="category-options">
            <p className="heading">Choose your purpose.</p>
            <a href="" className="link">
              Module to live in.
            </a>
            <a href="" className="link">
              Module as an office.
            </a>
            <a href="" className="link">
              Module to relax in.
            </a>
          </div>
        </section>
        <section className="preview">
          <img src={fullImage} alt="360 preview" />
          <button className="btn-white rounded">Take a look around</button>
        </section>
        {/* \\\\\\\\\\\\\\\ */}

        <section className="category-two">
          <div className="category-heading-row">
            <p>No.2</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="category-qa">
            <p className="q">
              <h2>Find a space to unwind</h2>
              <h4>
                Ark-Shelter shows the beauty of natural light and allows you to
                reconnect with nature. The large single pane windows seamlessly
                integrate the natural environment within your Ark. Enjoy a
                moment for yourself and take time to unwind.
              </h4>

              <h2>Connect with nature</h2>
              <h4>
                Due to Ark-Shelter’s self-sufficient system and ecological
                materials, you’ll live with zero-impact. Become as productive as
                nature itself, and grow and bloom within your own Ark.
              </h4>
            </p>

            <p className="a">
              <img src={Gallery1} alt="360 preview" />
            </p>
          </div>
        </section>
        <section className="slider">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            centeredSlides={true}
            parallax={true}
            scrollbar={true}
            loop
            uniqueNavElements
            slideToClickedSlide
          >
            <SwiperSlide>
              <img className="slider-image" src={Gallery1} alt="360 preview" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider-image" src={Gallery1} alt="360 preview" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider-image" src={Gallery1} alt="360 preview" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="slider-image" src={Gallery1} alt="360 preview" />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="category-three">
          <div className="category-heading-row">
            <p>No.2</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="category-qa">
            <p className="q">
              <h2>Find a space to unwind</h2>
              <h4>
                Ark-Shelter shows the beauty of natural light and allows you to
                reconnect with nature. The large single pane windows seamlessly
                integrate the natural environment within your Ark. Enjoy a
                moment for yourself and take time to unwind.
              </h4>

              <h2>Connect with nature</h2>
              <h4>
                Due to Ark-Shelter’s self-sufficient system and ecological
                materials, you’ll live with zero-impact. Become as productive as
                nature itself, and grow and bloom within your own Ark.
              </h4>
            </p>

            <p className="a">
              <img src={Gallery1} alt="360 preview" />
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Live;
