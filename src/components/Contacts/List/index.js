import {useState} from 'react'

const List = ({contacts}) => {
const [filterText, setFilterText] = useState('');
//keys -> fullname , phonenum
const filtered = contacts.filter((item) => {
  return Object.keys(item).some((key) => 
    item[key] 
    .toString()
    .toLowerCase()
    .includes(filterText.toLowerCase())
  )
})
console.log("filtered", filtered)
  return (
    <div>
      <input
      placeholder = "Filter"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key ={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>

        </li>))}
      </ul>
      <p>Total contacts : {filtered.length}</p>
    </div>
  )
}

export default List