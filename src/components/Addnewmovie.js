import React, { useState } from 'react'
import Modal from 'react-modal'
import Starrating from './Starrating';

function Addnewmovie( {handleadd}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState(1)
    const [date, setDate] = useState('')
    const handlerating=(x)=> setRating(x)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const newone={id:Math.random,name,image,rating,date}
        handleadd(newone)
        setName('')
        setImage('')
        
        closeModal()
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
      
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      
    
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div>
          <button onClick={openModal}>Add new Movie</button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Movie name</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <label htmlFor="">Movie Poster</label>
            <input type="text" value={image} onChange={e=>setImage(e.target.value)}/>
            <Starrating rating={rating}  handlerating ={handlerating}/>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
            <div>
                <button className='btn' type='submit'>Add</button><button onClick={openModal}>cancel</button>
            </div>
        </form>




      </Modal>
      
    </div>
  )
}

export default Addnewmovie

