import { useCallback } from 'react';
import { notification } from 'antd';

// Custom hook for toast notifications
const useToastNotification = () => {
  const openNotification = useCallback(
    (type: 'success' | 'info' | 'warning' | 'error', message: string, description: string) => {
      notification[type]({
        message,
        description,
        duration: 3, // You can adjust the duration
        placement: 'topRight', // Position of the notification
      });
    },
    []
  );

  return { openNotification };
};

export default useToastNotification;
