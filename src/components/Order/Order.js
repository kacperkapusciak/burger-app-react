import React from 'react';
import styled from 'styled-components';

const order = props => (
  <StyledOrder>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>USD 5.45</strong></p>
  </StyledOrder>
);

const StyledOrder = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;
export default order;