import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = () => {

    const sseApiTest = () => {
        axios({
          url : "http://13.124.48.122:8080/",
          method : "GET",
        }).then((res)=>{
          console.log('res :: ', res)
        }).catch((err)=>{
          console.log('err :: ', err)
        })
    }




  return (
    <div style={styles.container}>
      <h1> API TEST PAGE </h1> <br />

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

export default api;
