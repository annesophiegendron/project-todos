import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { TodoList } from '../components/TodoList.js'
import { Header } from '../lib/Header.js'
import { Footer } from '../lib/Footer.js'
import { todos } from '../reducers/todos.js'
import styled from 'styled-components/macro'

const reducer = combineReducers({ todos: todos.reducer })

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
    <Provider store={store}>
      <MainBackground>
        <TodoWrapper>
          <Header />
          <TodoList />
        </TodoWrapper>
        <Footer />
      </MainBackground>
    </Provider>
  )
}

const MainBackground = styled.section`
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
`

const TodoWrapper = styled.section`
  margin-top: 20px;
  padding: 50px;
  width: 50%;
  justify-content: center;
  background-color: white;
  border-radius: 2px;
  @media(max-width:768px){
    width: 70%;
  }
`