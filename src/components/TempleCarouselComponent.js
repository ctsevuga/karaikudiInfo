import { Carousel } from "react-bootstrap";


const TempleCarouselComponent = () => {
 
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sri Koppudaiya Nayagi Amman Temple</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Sundareswarar Temple</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Perumal Temple Senjai</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Sri Muthumari Amman Temple</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-5.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Sekkalai Sivan Kovil</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TempleCarouselComponent;

