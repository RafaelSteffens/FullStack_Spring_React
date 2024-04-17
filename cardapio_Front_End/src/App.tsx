
import './App.css'

import {Card} from './components/cards/card.tsx'
import { CreateModal } from './components/create-modal/create-modal.tsx'
import {useFoodData} from './hooks/useFoodData'
import {FoodData} from '.interface/FoodData'
import { useState } from 'react'

function App() {
  const{data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev =>!prev)
  }
  return (
    
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            />
            )}
            
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo </button>
      </div>
      
    
  )
}

export default App
