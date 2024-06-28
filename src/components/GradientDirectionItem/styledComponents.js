import styled from 'styled-components'

export const Directionli = styled.li``

export const Button = styled.button`
  height: 35px;
  width: 110px;
  color: #334155;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  margin: 4px;
  border-radius: 5px;
  border-width: 0;
  cursor: pointer;
`
