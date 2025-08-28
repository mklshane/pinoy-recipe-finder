import React, {useEffect} from 'react'
import { Heart, X, Check } from "lucide-react";

const Toast = ({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 2000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    const baseStyles =
      "fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out min-w-80 max-w-96";

    switch (type) {
      case "success":
        return `${baseStyles} bg-green-50 border border-green-200 text-green-800`;
      case "removed":
        return `${baseStyles} bg-red-50 border border-red-200 text-red-800`;
      default:
        return `${baseStyles} bg-blue-50 border border-blue-200 text-blue-800`;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <Check className="w-5 h-5 text-green-600 flex-shrink-0" />;
      case "removed":
        return <Heart className="w-5 h-5 text-red-600 flex-shrink-0" />;
      default:
        return <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />;
    }
  };

  return (
    <div className={getToastStyles()}>
      {getIcon()}
      <div className="flex-1">
        <p className="text-sm font-medium leading-tight">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 rounded-full hover:bg-black/5 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast