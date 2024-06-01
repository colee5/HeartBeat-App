import "./Hero.css";

function Cta() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A Healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a href="#" className="btn btn-full margin-right-sm">
              Start eating well
            </a>
            <a href="#" className="btn btn--outline">
              Learn more &darr;
            </a>
          </div>
          <div className="hero-img-box">
            <img
              className="hero-img"
              alt="Woman Enjoing food, meals in storage container, and food bowls on a table"
              src="https://omnifood.dev/img/hero.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;