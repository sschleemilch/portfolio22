import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="Munich"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.25272719725!2d11.401757274947787!3d48.155054692700936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2zTcO8bmNoZW4!5e0!3m2!1sde!2sde!4v1655935311404!5m2!1sde!2sde"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
