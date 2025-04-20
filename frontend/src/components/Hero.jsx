import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum minima sit, fuga nobis quae laboriosam dolores? Magnam soluta cupiditate atque harum in esse ratione obcaecati inventore error. Et ipsa delectus, laboriosam modi aperiam obcaecati, quos facere consectetur, dolores iste expedita nulla! Ipsam blanditiis ipsa commodi et quia nam eaque?
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
