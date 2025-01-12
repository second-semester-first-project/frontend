import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1> second-semester-first-project </h1> <br />
        <h2> AIoT Team Page </h2>

        <img src="%PUBLIC_URL%/favicon.ico" alt="chicken_image" />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
};

export default Home;
