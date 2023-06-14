import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { render } from 'react-dom'

const allItems = [
    {
        name: 'apple', price: '1$'
    },
    {
        name: 'pineapple', price: '5$'
    },

    {
        name: 'orange', price: '5$'
    }
]

export default function Home() {
  return (
    <>
    {
        allItems.map((item, index) => <div key={index}>Name: {item.name}, Price: {item.price} </div>)
    }
    </>
  )
}