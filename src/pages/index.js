import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../components/Card"
import Header from "../components/Header"

import "../styles/index.css"

export default function Home() {
  const [billValue, setBillValue] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [selectTip, setSelectTip] = useState("")
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  const handleBillValueChange = e => {
    setBillValue(parseFloat(e.target.value))
  }

  const handleNumPeopleChange = e => {
    setNumPeople(parseInt(e.target.value))
  }

  const handleSelectTip = e => {
    setSelectTip(parseFloat(e.target.innerHTML.replace(/[^0-9]/g, "")))
  }

  const calculateTipAmount = () => {
    setTipAmount((billValue * (selectTip / 100)) / numPeople)
  }

  const calculateTotal = () => {
    setTotal(billValue / numPeople + tipAmount)
  }

  useEffect(() => {
    calculateTipAmount()
    calculateTotal()
  })

  return (
    <div>
      <Main>
        <Header />
        <Card
          billValue={billValue}
          handleBillValueChange={handleBillValueChange}
          numPeople={numPeople}
          handleNumPeopleChange={handleNumPeopleChange}
          handleSelectTip={handleSelectTip}
          tipAmount={tipAmount}
          total={total}
        />
      </Main>
    </div>
  )
}

const Main = styled.div`
  display: grid;
  justify-items: center;
`
