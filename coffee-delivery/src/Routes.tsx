import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { CompleteOrderPage } from './pages/CompleteOrder/index';
export function Router(){
    return(
        <Routes>
            <Route path='/' element ={<HomePage/>}/>
            <Route path='/completeOrder' element={<CompleteOrderPage/>}/>

          
        </Routes>
    )
}