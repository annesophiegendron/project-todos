import React from 'react'
import styled from 'styled-components/macro'

export let DateTimeNow = () => {
  let today = new Date();

  return (
    <HeaderDate>
      {today.toDateString()}
    </HeaderDate>
  )
}

const HeaderDate = styled.section`
  font-size: 45px;
  color: #9498A6;
  font-family: 'Manrope', sans-serif;
`
