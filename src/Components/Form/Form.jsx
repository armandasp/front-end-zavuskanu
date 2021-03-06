import React from "react";
import * as S from "./Form.styles";

const Form = ({ handleSubmit, title, inputs, children, handleChange }) => {
  return (
    <S.Div>
      <form onSubmit={handleSubmit}>
        <S.Title>{title}</S.Title>
        <div style={{ marginBottom: "1rem" }}>
          {inputs &&
            inputs.map((input) => (
              <S.Input
                type={input.type}
                name={input.name}
                key={input.id}
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
