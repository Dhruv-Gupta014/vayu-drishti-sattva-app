
import { cn } from "@/lib/utils";

interface AQIIndicatorProps {
  value: number;
  className?: string;
}

const AQIIndicator = ({ value, className }: AQIIndicatorProps) => {
  const getAQIInfo = (aqi: number) => {
    if (aqi <= 50) {
      return {
        level: "Good",
        color: "bg-green-500",
        textColor: "text-green-700",
        description: "Air quality is satisfactory"
      };
    } else if (aqi <= 100) {
      return {
        level: "Moderate",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
        description: "Air quality is acceptable"
      };
    } else if (aqi <= 150) {
      return {
        level: "Unhealthy for Sensitive Groups",
        color: "bg-orange-500",
        textColor: "text-orange-700",
        description: "Sensitive people may experience symptoms"
      };
    } else if (aqi <= 200) {
      return {
        level: "Unhealthy",
        color: "bg-red-500",
        textColor: "text-red-700",
        description: "Everyone may experience health effects"
      };
    } else if (aqi <= 300) {
      return {
        level: "Very Unhealthy",
        color: "bg-purple-500",
        textColor: "text-purple-700",
        description: "Health warning: severe conditions"
      };
    } else {
      return {
        level: "Hazardous",
        color: "bg-red-800",
        textColor: "text-red-900",
        description: "Emergency conditions"
      };
    }
  };

  const aqiInfo = getAQIInfo(value);
  const percentage = Math.min((value / 300) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${aqiInfo.color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>0-50</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>51-100</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>101-150</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>151+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQIIndicator;
