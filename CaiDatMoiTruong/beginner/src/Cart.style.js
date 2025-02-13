import styled from 'styled-components'
import { Button } from './Cart'

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`
export const StyledButtons = styled(Button)`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.blue ? 'blue' : 'red')};
`

export const ContainerExtends = styled(Container)`
  max-width: 100px;
`
