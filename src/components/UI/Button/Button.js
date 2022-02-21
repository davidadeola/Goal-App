import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #00a3a8;
  color: white;
  background: #00a3a8;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #00d7df;
  border-color: #01E5F5;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;


export default Button;
