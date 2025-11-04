import React from 'react';

function SubmitButton({ text, loading }) {
  return (
    <button 
      type="submit"
      disabled={loading}
      className={`w-full py-3 rounded-lg text-white font-medium transition
        ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
    >
      {loading ? 'Gerando recomendação...' : text}
    </button>
  )
}

export default SubmitButton;