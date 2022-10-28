import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { fetchProperties } from "../../features/property/propertySlice";
import cl from "./MortgagedProperty.module.scss";

const MortgagedPropertyContent = () => {
  const [state, setState] = useState({
    type: "",
    address: "",
    files: null,
    images: null,
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchProperties(state));
    console.log(state);
  };
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className={cl.mortgagedProperty}>
      <div className={cl.mortgagedProperty__category}>
        <h2 className={cl.mortgagedProperty__title}>Залоговое имущество</h2>
        <input
          type="text"
          className={cl.mortgagedProperty__input}
          name="type"
          onChange={handleInput}
        />
      </div>
      <div className={cl.mortgagedProperty__category}>
        <h2 className={cl.mortgagedProperty__title}>Местонахождение залога</h2>
        <input
          type="text"
          className={cl.mortgagedProperty__input}
          name="address"
          onChange={handleInput}
        />
      </div>
      <div className={cl.mortgagedProperty__category}>
        <h2 className={cl.mortgagedProperty__title}>
          Документы на залоговое имущество
        </h2>
        <input
          type="file"
          onChange={(e) =>
            setState({
              ...state,
              files: e.target.files[0],
            })
          }
        />
      </div>
      <div className={cl.mortgagedProperty__category}>
        <h2 className={cl.mortgagedProperty__title}>
          Фотографии залогового имущество
        </h2>
        <input
          type="file"
          onChange={(e) =>
            setState({
              ...state,
              images: e.target.files[0],
            })
          }
        />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default MortgagedPropertyContent;
