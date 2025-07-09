
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface PollutantCardProps {
  name: string;
  value: string;
  unit: string;
  level: string;
  color: string;
  icon: ReactNode;
}

const PollutantCard = ({ name, value, unit, level, color, icon }: PollutantCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Good":
        return "bg-green-100 text-green-800";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800";
      case "Unhealthy for Sensitive":
        return "bg-orange-100 text-orange-800";
      case "Unhealthy":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className={color}>{icon}</div>
        <div>
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-gray-600">{level}</div>
        </div>
      </div>
      <div className="text-right">
        <div className={`text-lg font-bold ${color}`}>
          {value}
        </div>
        <div className="text-xs text-gray-600">{unit}</div>
      </div>
    </div>
  );
};

export default PollutantCard;
