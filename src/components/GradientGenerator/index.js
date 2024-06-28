import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  MainHeading,
  ChooseHeading,
  ButtonsUl,
  ColorPickerContainer,
  ColorPicker,
  HexcodeText,
  HexcodeColor,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    inputDirectionValue: gradientDirectionsList[0].value,
    inputHexcode1: '#8ae323',
    inputHexcode2: '#014f7b',
    gradientDirection: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeDirection = value => {
    this.setState({inputDirectionValue: value})
  }

  onChangeHexcode1 = event => {
    this.setState({inputHexcode1: event.target.value})
  }

  onChangeHexcode2 = event => {
    this.setState({inputHexcode2: event.target.value})
  }

  onGenerateGradientDirection = () => {
    const {inputDirectionValue, inputHexcode1, inputHexcode2} = this.state
    this.setState({
      gradientDirection: `to ${inputDirectionValue}, ${inputHexcode1}, ${inputHexcode2}`,
    })
  }

  render() {
    const {
      inputDirectionValue,
      inputHexcode1,
      inputHexcode2,
      gradientDirection,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientDirection}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ChooseHeading>Choose Direction</ChooseHeading>
        <ButtonsUl>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              onChangeDirection={this.onChangeDirection}
              isActive={eachDirection.value === inputDirectionValue}
            />
          ))}
        </ButtonsUl>
        <ChooseHeading>Pick the Colors</ChooseHeading>
        <ColorPickerContainer>
          <ColorPicker>
            <HexcodeText>{inputHexcode1}</HexcodeText>
            <HexcodeColor
              value={inputHexcode1}
              type="color"
              onChange={this.onChangeHexcode1}
            />
          </ColorPicker>
          <ColorPicker>
            <HexcodeText>{inputHexcode2}</HexcodeText>
            <HexcodeColor
              value={inputHexcode2}
              type="color"
              onChange={this.onChangeHexcode2}
            />
          </ColorPicker>
        </ColorPickerContainer>
        <GenerateButton
          type="button"
          onClick={this.onGenerateGradientDirection}
        >
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
