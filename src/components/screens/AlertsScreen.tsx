
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  AlertTriangle, 
  Shield, 
  Heart, 
  Mask,
  Wind,
  Clock,
  CheckCircle,
  Home,
  Car,
  Trees
} from "lucide-react";

const AlertsScreen = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "High Pollution Alert",
      message: "AQI reached 156 (Unhealthy level). Avoid outdoor activities.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Weather Update",
      message: "Wind speed increasing tomorrow - air quality may improve.",
      time: "5 hours ago",
      read: false
    },
    {
      id: 3,
      type: "success",
      title: "Improvement Forecast",
      message: "Air quality expected to reach moderate levels by weekend.",
      time: "1 day ago",
      read: true
    }
  ];

  const healthTips = [
    {
      icon: <Mask className="h-5 w-5 text-blue-500" />,
      title: "Wear N95 Masks",
      description: "Use N95 or equivalent masks when outdoors during high pollution days.",
      category: "Protection"
    },
    {
      icon: <Home className="h-5 w-5 text-green-500" />,
      title: "Stay Indoors",
      description: "Limit outdoor activities during peak pollution hours (6-10 AM, 6-9 PM).",
      category: "Activity"
    },
    {
      icon: <Wind className="h-5 w-5 text-purple-500" />,
      title: "Use Air Purifiers",
      description: "Keep indoor air clean with HEPA filter air purifiers.",
      category: "Indoor"
    },
    {
      icon: <Heart className="h-5 w-5 text-red-500" />,
      title: "Monitor Health",
      description: "Watch for symptoms like cough, breathing difficulty, or eye irritation.",
      category: "Health"
    },
    {
      icon: <Car className="h-5 w-5 text-orange-500" />,
      title: "Reduce Vehicle Use",
      description: "Use public transport or carpool to reduce emissions.",
      category: "Transport"
    },
    {
      icon: <Trees className="h-5 w-5 text-green-600" />,
      title: "Plant Trees",
      description: "Support local tree planting initiatives to improve air quality.",
      category: "Environment"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "info":
        return <Bell className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getAlertBorder = (type: string) => {
    switch (type) {
      case "warning":
        return "border-orange-200 bg-orange-50";
      case "info":
        return "border-blue-200 bg-blue-50";
      case "success":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Alerts & Tips</h2>
              <p className="text-sm opacity-90">Stay informed and healthy</p>
            </div>
            <Bell className="h-8 w-8" />
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>Recent Alerts</span>
            </span>
            <Badge variant="secondary">{alerts.filter(a => !a.read).length} New</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border ${getAlertBorder(alert.type)} ${
                !alert.read ? "border-l-4" : ""
              }`}
            >
              <div className="flex items-start space-x-3">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{alert.title}</h3>
                    {!alert.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Current Recommendations */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Current Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Mask className="h-4 w-4 text-red-600" />
              <span className="text-red-700">Wear protective masks outdoors</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Home className="h-4 w-4 text-red-600" />
              <span className="text-red-700">Limit outdoor physical activities</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Wind className="h-4 w-4 text-red-600" />
              <span className="text-red-700">Keep windows closed and use air purifiers</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Health Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {healthTips.map((tip, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                {tip.icon}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{tip.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Alert Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">High pollution alerts</span>
            <div className="w-10 h-6 bg-blue-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Daily health tips</span>
            <div className="w-10 h-6 bg-blue-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Weather impact notifications</span>
            <div className="w-10 h-6 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsScreen;
