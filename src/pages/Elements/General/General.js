import { useState } from "react";
import{Accordion,Badge,Carousel,ProgressBar,Spinner,Stack,Container,Form,Row,Button} from '../../../components/bootstrapComponent'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import PageWrapper from "../../../components/PageWrapper";
import GeneralCard from "../../../components/CardComponent";

import '../Elements.scss'
export default function GeneralElements() {
  /////// range //////////////////
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getBackgroundColor = () => {
    if (value < 33) return "#FF5733"; // Red for low values
    if (value < 66) return "#FFC300"; // Yellow for medium values
    return "#4CAF50"; // Green for high values
  };
  ///////////// badges ///////////////
  const colors = [
    "secondary",
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ];
  ////////// sliders ////////////////
  const items = ["Slide 1 Content", "Slide 2 Content", "Slide 3 Content"];

  return (
    <PageWrapper title="General Elements">
      <div className="p-lg-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>General Elements</h3>
          </div>
          <Row className="g-3 my-lg-3">
            <GeneralCard title="Range">
              <div className="custom-range">
                <Form.Label>Range:</Form.Label>
                <Form.Range />
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  margin: "20px 0",
                }}
              >
                <h5>Custom Range:</h5>
                <div
                  style={{
                    position: "absolute",
                    left: `calc(${value}% - 15px)`, // Adjusting position dynamically
                    top: "5px",
                    backgroundColor: getBackgroundColor(),
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    transform: "translateX(-50%)",
                  }}
                >
                  {value}
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "5px",
                    /* backgroundColor: getBackgroundColor(), */
                    background: `linear-gradient(to right, ${getBackgroundColor()} ${value}%, ${getBackgroundColor()} ${value}%)`,
                    outline: "none",
                    transition: "background 0.3s",
                    appearance: "none",
                  }}
                />
                <p>Value: {value}</p>
              </div>
            </GeneralCard>
            <GeneralCard title="Progress">
              <div className="mb-3">
                <h5>Basic Progress</h5>
                <ProgressBar now={60} />
              </div>

              <div className="mb-3">
                <h5>Progress with label</h5>
                <ProgressBar now={60} label={`60%`} />
              </div>

              <div className="mb-3">
                <h5>Striped progress</h5>
                <ProgressBar striped variant="danger" now={60} label={`60%`} />
              </div>

              <div className="mb-3">
                <h5>Animated progress</h5>
                <ProgressBar
                  animated
                  variant="success"
                  now={60}
                  label={`60%`}
                />
              </div>
            </GeneralCard>
          </Row>

          <Row className="g-3 my-3">
            <GeneralCard title="Badges">
              <div className="mb-3">
                <h5>Basic Badge</h5>
                <div className=" w-75 d-flex justify-content-between">
                  {["secondary", "primary", "danger", "success", "warning"].map(
                    (bg, index) => (
                      <Badge key={index} bg={bg}>
                        New
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <div className="mb-3">
                <h5>Button Badge</h5>
                <Button variant="primary">
                  Profile <Badge bg="secondary">9</Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button>
              </div>

              <div className="mb-3">
                <h5>Pills Badge</h5>
                <Stack className="flex-wrap" direction="horizontal" gap={2}>
                  {colors.map((bg, index) => (
                    <Badge
                      key={index}
                      bg={bg}
                      text={bg === "light" ? "dark" : "white"}
                    >
                      Primary
                    </Badge>
                  ))}
                </Stack>
              </div>
            </GeneralCard>
            <GeneralCard title="Spinners">
              <div className="d-flex justify-content-around mb-3">
                <div>
                  <h5>Basic Spinner</h5>
                  <Spinner animation="border" />
                </div>

                <div>
                  <h5>Grow Spinner</h5>
                  <Spinner animation="grow" />
                </div>
              </div>
              <div className="d-flex justify-content-around mb-3">
                <div>
                  <h5>Basic Spinner</h5>
                  <Spinner variant="danger" size="sm" animation="border" />
                </div>

                <div>
                  <h5>Grow Spinner</h5>
                  <Spinner variant="warning" size="sm" animation="grow" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              </div>
            </GeneralCard>
          </Row>

          <Row className="g-3 my-3">
            <GeneralCard title="Accordion">
              <div className="mb-3">
                <h5>Basic Accordion</h5>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="mb-3">
                <h5>Flush Accordion</h5>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </GeneralCard>
            <GeneralCard title="Carousel">
              <div className="mb-3">
                <h5>Basic Carousel</h5>
                <Carousel data-bs-theme="dark" fade>
                  {items.map((item, index) => (
                    <Carousel.Item key={index}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "200px" }}
                      >
                        <h3>{item}</h3>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <h5>Advanced Carousel</h5>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={true}
                  modules={[Pagination]}
                >
                  {items.map((item, index) => (
                    <SwiperSlide key={index}>
                      <h3 style={{ textAlign: "center", padding: "50px" }}>
                        {item}
                      </h3>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <a href="https://swiperjs.com/demos">for more example</a>
              </div>
            </GeneralCard>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
