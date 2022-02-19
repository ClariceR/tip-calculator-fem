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
    console.log(e.target.value)
    setBillValue(parseFloat(e.target.value))
  }

  const handleNumPeopleChange = e => {
    console.log(e.target.value)
    setNumPeople(parseInt(e.target.value))
    console.log(numPeople)
  }

  const handleSelectTip = e => {
    console.log(e.target.innerHTML.replace(/[^0-9]/g, ""))
    setSelectTip(parseFloat(e.target.innerHTML.replace(/[^0-9]/g, "")))
    console.log({ selectTip })
  }

  const calculateTipAmount = () => {
    setTipAmount((billValue * (selectTip / 100)) / numPeople)
  }

  const calculateTotal = () => {
    console.log("calculating total...")
    setTotal(billValue / numPeople + tipAmount)
    console.log("total", total)
  }

  useEffect(() => {
    calculateTipAmount()
    calculateTotal()
    console.log("useEffecting tip amount")
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
