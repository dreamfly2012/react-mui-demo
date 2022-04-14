import { Routes, Route } from 'react-router-dom'
import { Index, About, Detail } from '../containers'

export function Nav(){
    return (
     
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
    
    )
}


