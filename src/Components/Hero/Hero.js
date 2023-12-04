import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "./ishtaahero.png";

import "./Hero.css";

const HeroSection = () => {
  return (
    <Container
      id="home"
      // style={{ backgroundImage: `url(${img1})`, backgroundAttachment: "fixed" }}
    >
      <Wraper>
        {/* <LeftContent>
          <Title>
            Radiant
            <br />
            Collection
          </Title>
          <Description>
            Discover the Beauty of Our Thoughtfully Designed Jewelry Collection
          </Description>
          <Buttons>
            <Link to="/Services">
              {" "}
              <button className="hero-btn">
                <span className="hero-btn-text">Shop Now ➞</span>
              </button>
            </Link>{" "}
            &nbsp;
          </Buttons>
        </LeftContent>
        <RightContent></RightContent> */}
        <img src={img1} alt="" className="m-auto w-[70%]" />
      </Wraper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 6rem 8rem 7rem;
  background: #f1feef;
  @media (min-width: 1900px) {
    padding: 100px 18.5rem;
    padding-bottom: 50px;
  }

  @media (max-width: 1200px) {
    padding: 80px;

    padding-top: 88px;
  }
  @media (max-width: 900px) {
    padding: 80px;
    flex-direction: column;

    padding-top: 88px;
  }
  @media (max-width: 800px) {
    padding: 80px;
    flex-direction: column;

    padding-top: 88px;
  }
  @media (max-width: 700px) {
    padding: 80px;
    padding-top: 120px;
  }
`;
const LeftContent = styled.div`
  width: 50%;
  padding: 5rem 0rem;
  @media (max-width: 900px) {
    width: 90%;
    padding: 4rem 0rem;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  color: var(--font-title);

  font-size: 60px;
  line-height: 67px;
  text-transform: uppercase;

  font-family: "Philosopher";

  @media (max-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 700px) {
    font-size: 50px;
    line-height: 45px;
    padding: 1rem 0rem;
  }
`;
export const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  color: var(--font-description);
  width: 90%;
  margin: 30px 0px;

  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    margin: 15px 0px;
  }
`;
const Buttons = styled.div`
  margin-top: 30px;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  @media (max-width: 900px) {
    width: 90%;
    margin-top: 30px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-top: -25px;
  }

  img {
    width: 100%;
    border-radius: 50px;

    @media (max-width: 900px) {
      width: 100%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
