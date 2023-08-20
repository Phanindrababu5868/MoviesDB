
import './index.css';
import {useState } from 'react';

function Pagination({currentPage,totalPages,changePage}) {
  const[inputNum,setInputNum]=useState(null)

  const onClickNextBtn=()=>{
    changePage(currentPage+1)
  }

  const onClickPrevsBtn=()=>{
    changePage(currentPage-1)
  }
  
  const onChangeInput=(even)=>{
    setInputNum(parseInt(even.target.value))
  }

  const gotoThisPage=()=>{
    if(parseInt(inputNum)!== NaN ){
          changePage(inputNum)

    }
    setInputNum("")
  }


  return (
    <div className='pagination-container'>
      <div className='input-constiner'>
        <p>Total Pages : {totalPages}</p>
        <input value={inputNum} type="number" onChange={onChangeInput} placeholder='Go to Page '/>
        <button onClick={gotoThisPage} className='goto-button'>Go to</button>
      </div>
      <div className='pagination-btn-container'>
        <button onClick={onClickPrevsBtn} disabled={currentPage===1}>Prev Page</button>
            <button className='pages-numbers-container'>{currentPage}</button>
        <button onClick={onClickNextBtn} disabled={currentPage===totalPages}>Next Page</button>
      </div>
    </div>
  );
}

export default Pagination;
