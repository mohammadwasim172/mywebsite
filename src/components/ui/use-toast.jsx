import { useState } from 'react';

export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState({ title: '', description: '' });

  const toast = ({ title, description }) => {
    setMessage({ title, description });
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return {
    toast,
    ToastComponent: isVisible ? (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <h4 className="font-bold">{message.title}</h4>
        <p>{message.description}</p>
      </div>
    ) : null,
  };
}