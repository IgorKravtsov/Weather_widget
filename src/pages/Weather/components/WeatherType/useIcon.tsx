import { ReactComponent as CloudIcon } from 'assets/images/weather/cloudy.svg';
import { ReactComponent as RainIcon } from 'assets/images/weather/rainy.svg';
import { ReactComponent as SunIcon } from 'assets/images/weather/sunny.svg';

export const useIcon = (weatherType: 'Rain' | 'Clouds' | 'Clear') => {
  const getIcon = () => {
    switch (weatherType) {
      case 'Clear':
        return <SunIcon height={165} width={165} />;

      case 'Rain':
        return <RainIcon height={165} width={165} />;

      case 'Clouds':
        return <CloudIcon height={165} width={165} />;

      default:
        return <SunIcon height={165} width={165} />;
    }
  };

  return { icon: getIcon() };
};
