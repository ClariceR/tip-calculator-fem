import React, { useState } from "react"
import styled from "styled-components"
import Card from '../components/Card'
import Header from "../components/Header"

import "../styles/index.css"

export default function Home() {
  const [billValue, setBillValue] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [selectTip, setSelectTip] = useState("")

  const handleBillValueChange = e => {
    console.log(e.target.value)
    setBillValue(e.target.value)
  }

  const handlenumPeopleChange = e => {
    console.log(e.target.value)
    setNumPeople(e.target.value)
  }

  const handleSelectTip = e => {
    console.log(e.target.innerHTML.replace(/[^0-9]/g, ""))
    setSelectTip(e.target.innerHTML.replace(/[^0-9]/g, ""))
    console.log({selectTip})
  }
  return (
    <div>
      <Main>
        <Header />
        <Card
          billValue={billValue}
          handleBillValueChange={handleBillValueChange}
          numPeople={numPeople}
          handlenumPeopleChange={handlenumPeopleChange}
          handleSelectTip={handleSelectTip}
        />
      </Main>
    </div>
  )
}

const Main = styled.div`
  display: grid;
  justify-items: center;
`
