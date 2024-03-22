import './ResumoItem.css'


const ResumoItem = ({title, Icon,value}) =>
{
  return (
    <div className='container-item'>
      <div className="header-item">
        <div className="titulo">
          {title}
        </div>
          <Icon size={25}/>  
      </div>  
      <span className="total">
        R$ {value}
      </span>    
    </div>
  )
}

export default ResumoItem