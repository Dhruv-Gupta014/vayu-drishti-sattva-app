
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Calendar, Clock, AlertTriangle } from "lucide-react";

const ForecastScreen = () => {
  const forecastData = [
    { time: "Now", aqi: 156, level: "Unhealthy", trend: "stable" },
    { time: "6 PM", aqi: 168, level: "Unhealthy", trend: "up" },
    { time: "12 AM", aqi: 145, level: "Unhealthy", trend: "down" },
    { time: "6 AM", aqi: 132, level: "Unhealthy for Sensitive", trend: "down" },
    { time: "12 PM", aqi: 124, level: "Unhealthy for Sensitive", trend: "down" },
    { time: "6 PM", aqi: 118, level: "Unhealthy for Sensitive", trend: "down" },
    { time: "Tomorrow", aqi: 98, level: "Moderate", trend: "down" },
    { time: "Day 3", aqi: 89, level: "Moderate", trend: "down" },
  ];

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-yellow-500";
    if (aqi <= 150) return "text-orange-500";
    return "text-red-500";
  };

  const getAQIBadgeVariant = (level: string) => {
    if (level === "Good") return "default";
    if (level === "Moderate") return "secondary";
    if (level === "Unhealthy for Sensitive") return "destructive";
    return "destructive";
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">72-Hour Forecast</h2>
          <p className="text-sm opacity-90">Bandra West, Mumbai</p>
        </CardContent>
      </Card>

      {/* Summary Alert */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-800">Forecast Summary</h3>
              <p className="text-sm text-orange-700 mt-1">
                Air quality will worsen this evening due to calm winds and increased vehicular emissions. 
                Expect gradual improvement over the next 2 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hourly Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <span>Hourly Forecast</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {forecastData.slice(0, 6).map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-sm font-medium w-16">{item.time}</div>
                <div className="flex items-center space-x-2">
                  <div className={`text-xl font-bold ${getAQIColor(item.aqi)}`}>
                    {item.aqi}
                  </div>
                  {item.trend === "up" && <TrendingUp className="h-4 w-4 text-red-500" />}
                  {item.trend === "down" && <TrendingDown className="h-4 w-4 text-green-500" />}
                </div>
              </div>
              <Badge variant={getAQIBadgeVariant(item.level)} className="text-xs">
                {item.level}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Daily Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-green-500" />
            <span>3-Day Outlook</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">Today</div>
              <div className="text-sm text-gray-600">Peak: 168 AQI at 6 PM</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-red-500">156</div>
              <Badge variant="destructive" className="text-xs">Unhealthy</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">Tomorrow</div>
              <div className="text-sm text-gray-600">Improving conditions</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-yellow-500">98</div>
              <Badge variant="secondary" className="text-xs">Moderate</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">Day 3</div>
              <div className="text-sm text-gray-600">Continued improvement</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-yellow-500">89</div>
              <Badge variant="secondary" className="text-xs">Moderate</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Factors Affecting Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Forecast Factors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Wind Speed</div>
              <div className="font-semibold">8 km/h ↑</div>
            </div>
            <div>
              <div className="text-gray-600">Humidity</div>
              <div className="font-semibold">65% ↓</div>
            </div>
            <div>
              <div className="text-gray-600">Temperature</div>
              <div className="font-semibold">28°C ↑</div>
            </div>
            <div>
              <div className="text-gray-600">Pressure</div>
              <div className="font-semibold">1013 hPa</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastScreen;
