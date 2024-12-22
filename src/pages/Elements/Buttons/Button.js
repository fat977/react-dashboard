import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  ToggleButton,
} from '../../../components/bootstrapComponent';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "../../../components/PageWrapper";
import ButtonDiv from "./ButtonDiv";

export default function Buttons() {
  ///////////// Button Loading///////////
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  const handleClick = () => setLoading(true);


  /////////////// radio buttons /////////////
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  return (
    <PageWrapper title="Buttons">
      <div className="p-lg-4">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between my-3">
            <h3>Buttons</h3>
          </div>
          <Row className="g-3 my-lg-3">
            <ButtonDiv>
              <h5>Basic Buttons</h5>
              <div className="d-flex flex-wrap">
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark",
                  "link",
                ].map((variant, index) => (
                  <Button key={index} variant={variant} className="m-2">
                    {variant}
                  </Button>
                ))}
              </div>
            </ButtonDiv>

            <ButtonDiv>
              <h5>Outline Buttons</h5>
              <div className="d-flex flex-wrap">
                {[
                  "primary",
                  "secondary",
                  "success",
                  "danger",
                  "warning",
                  "info",
                  "light",
                  "dark",
                  "link",
                ].map((variant, index) => (
                  <Button
                    key={index}
                    variant={`outline-${variant}`}
                    className=" m-2"
                  >
                    {variant}
                  </Button>
                ))}
              </div>
            </ButtonDiv>
          </Row>

          <Row className="g-3 my-3">
            <ButtonDiv>
              <h5>Sizing</h5>
              <div className="d-flex flex-wrap">
                <Button href="#" className="m-2" size="sm">
                  Link
                </Button>
                <Button type="submit" className="m-2">
                  Button
                </Button>
                <Button
                  as="input"
                  className="m-2"
                  type="button"
                  value="Input"
                />
              </div>
              <div className="d-flex flex-wrap">
                <Button
                  as="input"
                  className="m-2"
                  size="lg"
                  type="submit"
                  value="Submit"
                />
                <Button as="input" className="m-2" type="reset" value="Reset" />
              </div>
            </ButtonDiv>

            <ButtonDiv>
              <h5>Block Buttons</h5>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Block level button
                </Button>
                <Button variant="secondary" size="lg">
                  Block level button
                </Button>
              </div>
            </ButtonDiv>
          </Row>

          <Row className="g-3 my-3">
            <ButtonDiv>
              <h5>Button Loading State</h5>
              <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Click to load"}
              </Button>
            </ButtonDiv>

            <ButtonDiv>
              <h5>Radio Button Group</h5>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={"outline-success"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </ButtonDiv>
          </Row>

          <Row className="g-3 my-3">
            <ButtonDiv>
              <h5>Button Group</h5>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </ButtonDiv>

            <ButtonDiv>
              <h5>Button Toolbar</h5>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </ButtonDiv>
          </Row>

          <Row className="g-3 my-3">
            <ButtonDiv>
              <h5>Vertical Button Group</h5>
              <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-vertical-dropdown-1"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </ButtonDiv>
            <ButtonDiv>
              <h5>Button with icon</h5>
              <div className="d-flex flex-column">
                <Button variant="primary" className="m-2 p-2 w-50">
                  Right Icon
                  <FontAwesomeIcon className="ms-2" icon={faHouse} />
                </Button>
                <Button variant="primary" className="m-2 p-2 w-50">
                  <FontAwesomeIcon className="me-2" icon={faBell} />
                  Left Icon
                </Button>
              </div>
            </ButtonDiv>
          </Row>
        </Container>
      </div>
    </PageWrapper>
  );
}
