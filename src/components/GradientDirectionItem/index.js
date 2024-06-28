import {Directionli, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onChangeDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onClickChangeDirectionButton = () => {
    onChangeDirection(value)
  }

  return (
    <Directionli>
      <Button
        type="button"
        onClick={onClickChangeDirectionButton}
        isActive={isActive}
      >
        {displayText}
      </Button>
    </Directionli>
  )
}

export default GradientDirectionItem
