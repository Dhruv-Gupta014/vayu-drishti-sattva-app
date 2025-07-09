
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, AlertTriangle, Shield, Mask, Home, Wind } from "lucide-react";

interface HealthAdvisoryCardProps {
  aqiLevel: string;
}

const HealthAdvisoryCard = ({ aqiLevel }: HealthAdvisoryCardProps) => {
  const getHealthAdvice = (level: string) => {
    switch (level) {
      case "Good":
        return {
          icon: <Heart className="h-5 w-5 text-green-500" />,
          title: "Enjoy outdoor activities",
          recommendations: [
            "Perfect day for jogging and outdoor exercises",
            "Great air quality for children and elderly",
            "Open windows for natural ventilation"
          ],
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800"
        };
      case "Moderate":
        return {
          icon: <Shield className="h-5 w-5 text-yellow-500" />,
          title: "Generally acceptable",
          recommendations: [
            "Outdoor activities are fine for most people",
            "Sensitive individuals should limit prolonged outdoor exposure",
            "Consider wearing masks during peak hours"
          ],
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          textColor: "text-yellow-800"
        };
      case "Unhealthy for Sensitive":
        return {
          icon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
          title: "Sensitive groups should be cautious",
          recommendations: [
            "Children, elderly, and people with respiratory conditions should limit outdoor activities",
            "Consider wearing N95 masks when outdoors",
            "Keep windows closed and use air purifiers"
          ],
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          textColor: "text-orange-800"
        };
      case "Unhealthy":
      default:
        return {
          icon: <Mask className="h-5 w-5 text-red-500" />,
          title: "Avoid outdoor activities",
          recommendations: [
            "Everyone should avoid prolonged outdoor exposure",
            "Wear N95 or equivalent masks when going outside",
            "Keep indoor air clean with purifiers",
            "Postpone outdoor exercises and sports"
          ],
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-800"
        };
    }
  };

  const advice = getHealthAdvice(aqiLevel);

  return (
    <Card className={`${advice.bgColor} ${advice.borderColor} border-2`}>
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center space-x-2 ${advice.textColor}`}>
          {advice.icon}
          <span>Health Advisory</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold ${advice.textColor}`}>{advice.title}</h3>
          <Badge variant="outline" className={advice.textColor}>
            {aqiLevel}
          </Badge>
        </div>
        
        <div className="space-y-2">
          {advice.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className={`w-1.5 h-1.5 rounded-full ${advice.textColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
              <p className={`text-sm ${advice.textColor}`}>{rec}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 pt-2 text-xs">
          <div className="flex items-center space-x-1">
            <Home className="h-3 w-3" />
            <span>Stay indoors when possible</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wind className="h-3 w-3" />
            <span>Use air purifiers</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthAdvisoryCard;
