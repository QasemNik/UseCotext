import React, { useContext } from 'react';
import ProductsContext from '../../contexts/ProductsContext';

function Toast() {
  const contextData = useContext(ProductsContext);

  return (
    <div className='toast-container position-fixed bottom-0 me-0 end-0 mb-4'>
      <div className={`${contextData.isShowToast ? 'show' : ''} toast align-items-center text-white bg-primary`}>

        <div className="d-flex justify-content-between align-items-center">
          <button
            type='button'
            className='btn-close btn-close-white ms-3'
            onClick={() => contextData.setIsShowToast(false)}
          >
            X
          </button>
          <div className="toast-body">Added successfully</div>
        </div>
      </div>
    </div>
  );
}

export default Toast;