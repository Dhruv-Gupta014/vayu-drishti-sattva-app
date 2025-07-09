
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Calendar, BarChart3, Activity } from "lucide-react";

const TrendsScreen = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [location, setLocation] = useState("current");

  const weeklyData = [
    { day: "Mon", aqi: 142, level: "Unhealthy for Sensitive" },
    { day: "Tue", aqi: 156, level: "Unhealthy" },
    { day: "Wed", aqi: 134, level: "Unhealthy for Sensitive" },
    { day: "Thu", aqi: 167, level: "Unhealthy" },
    { day: "Fri", aqi: 145, level: "Unhealthy for Sensitive" },
    { day: "Sat", aqi: 123, level: "Unhealthy for Sensitive" },
    { day: "Today", aqi: 156, level: "Unhealthy" },
  ];

  const monthlyAverage = [
    { week: "Week 1", aqi: 98, trend: "down" },
    { week: "Week 2", aqi: 112, trend: "up" },
    { week: "Week 3", aqi: 145, trend: "up" },
    { week: "Week 4", aqi: 156, trend: "up" },
  ];

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-500";
    if (aqi <= 150) return "bg-orange-500";
    return "bg-red-500";
  };

  const getTextColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-yellow-500";
    if (aqi <= 150) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Air Quality Trends</h2>
            <Activity className="h-5 w-5 text-blue-500" />
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Time Range</label>
              <div className="flex space-x-2">
                <Button
                  variant={timeRange === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("week")}
                >
                  Week
                </Button>
                <Button
                  variant={timeRange === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("month")}
                >
                  Month
                </Button>
                <Button
                  variant={timeRange === "year" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("year")}
                >
                  Year
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Chart */}
      {timeRange === "week" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <span>This Week's AQI</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end justify-between h-32 px-2">
                {weeklyData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="text-xs font-semibold">{item.aqi}</div>
                    <div
                      className={`w-8 ${getAQIColor(item.aqi)} rounded-t`}
                      style={{ height: `${(item.aqi / 200) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 text-center">{item.day}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Week Average</div>
                  <div className="text-xl font-bold text-orange-500">145</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Trend</div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm font-semibold text-red-500">+8%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Monthly Trends */}
      {timeRange === "month" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-500" />
              <span>Monthly Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {monthlyAverage.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">{item.week}</div>
                  <div className={`text-lg font-bold ${getTextColor(item.aqi)}`}>
                    {item.aqi}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {item.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-red-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">7</div>
            <p className="text-sm text-green-700">Good Days</p>
            <p className="text-xs text-green-600">This Month</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-sm text-red-700">Unhealthy Days</p>
            <p className="text-xs text-red-600">This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Best & Worst Days */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Notable Days</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <div className="font-semibold text-green-800">Best Day</div>
              <div className="text-sm text-green-600">March 15, 2024</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-green-600">42 AQI</div>
              <Badge className="bg-green-100 text-green-800 text-xs">Good</Badge>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div>
              <div className="font-semibold text-red-800">Worst Day</div>
              <div className="text-sm text-red-600">March 8, 2024</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-red-600">187 AQI</div>
              <Badge variant="destructive" className="text-xs">Unhealthy</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pollutant Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pollutant Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">PM2.5</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <span className="text-sm font-semibold">78%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">PM10</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <span className="text-sm font-semibold">65%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">NO₂</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "34%" }}></div>
                </div>
                <span className="text-sm font-semibold">34%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendsScreen;
