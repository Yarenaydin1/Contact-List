import {useState, useEffect } from 'react'
import './styles.css'
import List from './List'
import Form from './Form'

const Contacts = () => {
    const[contacts , setContacts] = useState([]);

useEffect(() => {

}, [contacts])

  return (
    <div id ="container">
      <h2>Contacts</h2>
        <List contacts ={contacts}/>
        <Form addContact = {setContacts} contacts={contacts}/>


    </div>
  )
}

export default Contacts