import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => {
            let bgColor = 'bg-green-500';
            let icon = <CheckCircle size={20} className="text-white" />;
            if (toast.type === 'error') {
              bgColor = 'bg-red-500';
              icon = <AlertCircle size={20} className="text-white" />;
            } else if (toast.type === 'info') {
              bgColor = 'bg-blue-500';
              icon = <Info size={20} className="text-white" />;
            }

            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 50, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                className={`${bgColor} text-white p-4 rounded-2xl shadow-xl flex items-center justify-between pointer-events-auto border border-white/10 backdrop-blur-md`}
              >
                <div className="flex items-center space-x-3">
                  {icon}
                  <span className="text-sm font-semibold">{toast.message}</span>
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-white/70 hover:text-white ml-4 focus:outline-none transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
