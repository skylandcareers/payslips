import networkBgImage from '@/assets/network-bg-static.png';

interface StaticNetworkBackgroundProps {
  className?: string;
  density?: number;
}

const StaticNetworkBackground = ({ 
  className = '',
}: StaticNetworkBackgroundProps) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        backgroundImage: `url(${networkBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
      }}
    />
  );
};

export default StaticNetworkBackground;