
import { useState } from "react";

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "success", duration = 1000) => {
    const id = Date.now();
    const newToast = { id, message, type, duration };
    setToasts([newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const clearAllToasts = () => {
    setToasts([]);
  };

  const showFavoriteAdded = (recipeName) => {
    showToast(`${recipeName} added to favorites!`, "success");
  };

  const showFavoriteRemoved = (recipeName) => {
    showToast(`${recipeName} removed from favorites`, "removed");
  };

  return {
    toasts,
    showToast,
    removeToast,
    clearAllToasts,
    showFavoriteAdded,
    showFavoriteRemoved,
  };
};
