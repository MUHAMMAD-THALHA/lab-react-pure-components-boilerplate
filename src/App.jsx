import React from 'react'
import Concept from './Components/Concept'
import SimpleCounterComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'
const App = () => {
  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </>
  )
}

export default App