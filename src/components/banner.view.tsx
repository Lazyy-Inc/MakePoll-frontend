import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import type { BannerItem } from '../core/banner.manager';

interface Props {
  banner: BannerItem;
}

export const BannerView = observer(({ banner }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    setIsVisible(true);
    
    // Animation de sortie après 2.7s (pour laisser le temps à l'animation)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2700);

    return () => clearTimeout(hideTimer);
  }, [banner]);

  const getBannerStyles = () => {
    switch (banner.type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 p-standard text-center text-body-medium transition-transform duration-300 ease-in-out ${getBannerStyles()} ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      {banner.text}
    </div>
  );
});