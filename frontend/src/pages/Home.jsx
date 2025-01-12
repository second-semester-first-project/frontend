import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1> second-semester-first-project </h1> <br />
        <h2> AIoT Team Page </h2>

        <img width={"500px"} height={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJp3jJn3aVsp7AsUymC5zGlR7dVNY5AMOxCw&s" alt="chicken_image" />
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
