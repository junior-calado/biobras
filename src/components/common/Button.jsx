import './Button.css';

export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button 
      type={type}
      className={`standard-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 