

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

export default function Test() {
  return (
    <>
    {
        allItems.map((item, index) => <div key={index}>Name: {item.name}, Price: {item.price} </div>)
    }
    </>
  )
}