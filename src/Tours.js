import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2 className="title-two">dominican tours</h2>
        <h2>
          <img className="flag" src="https://cdn.pixabay.com/photo/2013/07/13/14/15/dominican-republic-162281_960_720.png" width={"100px"} height={"auto"} alt="Dominican Flag" />
        </h2>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
