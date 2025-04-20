import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt architecto culpa eaque exercitationem omnis tempora quibusdam! Sapiente porro alias doloremque iste delectus omnis, tempora in cumque commodi, atque aliquam, magni veniam pariatur! Commodi minus quibusdam fuga adipisci deserunt nostrum ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam saepe fugiat! Esse ex veritatis voluptatibus ab libero, quo est? Pariatur vitae, recusandae corrupti mollitia amet quod rem quis delectus nobis tenetur ratione deleniti illo quisquam, aspernatur unde consequuntur neque?
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
