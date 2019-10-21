import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Lists = ({ match, location }) => {
  const { props } = location;
  const {
    params: { id }
  } = match;
  return (
    <>
      <Link to={{ pathname: `/` }}>На главную</Link>
      <p>{`Вы выбрали список с id = ${id}`}</p>
      <p>{`Пришли пропсы с customProp = ${
        props ? props.customProp : "не пришел"
      }`}</p>
    </>
  );
};

export default Lists;
