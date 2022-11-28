import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  fetchActivites,
  getActivities,
} from "../../features/activity/activityActions";
import Button from "../Button/Button";
import cl from "./Actives.module.scss";

const Activites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivites());
  }, [dispatch]);
  const submitForm = () => {
    dispatch(fetchActivites(state)).then(() => dispatch(getActivities()));
  };
  const [state, setState] = useState({
    activites_add: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { handleSubmit } = useForm();

  return (
    <form
      className={cl.companies__category}
      onSubmit={handleSubmit(submitForm)}
    >
      <h2 className={cl.companies__title}>Добавить источник дохода:</h2>
      <input
        className={cl.companies__input}
        type="text"
        onChange={handleInput}
        name="activites_add"
        required
      />
      <Button>Submit</Button>
    </form>
  );
};

export default Activites;
