import './Resumo.css'
import ResumoItem from './ResumoItem'
import{
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown, 
  FaDollarSign
} from 'react-icons/fa'

const Resumo = () => {
  return (
    <div className='container-resumo'>
        <ResumoItem  title="Entradas" Icon={FaRegArrowAltCircleUp} value={1000}/>
        <ResumoItem  title="Saídas" Icon={FaRegArrowAltCircleDown} value={100}/>
        <ResumoItem  title="Total" Icon={FaDollarSign} value={900}/>
    </div>
  )
}

export default Resumo