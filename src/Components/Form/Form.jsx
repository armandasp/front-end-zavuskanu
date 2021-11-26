import React from "react";
import * as S from "./Form.styles";

const Form = ({ handleSubmit, title, inputs, children, handleChange }) => {
  return (
    <S.Div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div>
          {inputs &&
            inputs.map((input) => (
              <S.Input
                type={input.type}
                key={input.type}
                placeholder={input.placeholder}
                onChange={input.handleChange}
                required
              />
            ))}
        </div>
        {children}
      </form>
    </S.Div>
  );
};

export default Form;
