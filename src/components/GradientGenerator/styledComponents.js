import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientDirection});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export const MainHeading = styled.h1`
  font-family: roboto;
  font-size: 26px;
  color: #ffffff;
  text-align: center;
`
export const ChooseHeading = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  font-weight: 400;
`
export const ButtonsUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
`
export const HexcodeText = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  font-weight: 500;
`

export const HexcodeColor = styled.input`
  width: 100px;
  height: 35px;
  border-width: 0;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  margin-top: 20px;
  height: 35px;
  width: 110px;
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 5px;
  border-width: 0;
  font-weight: 500;
  cursor: pointer;
`
