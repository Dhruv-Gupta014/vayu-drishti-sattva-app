
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wind, Eye, Thermometer, Droplets, Calendar, Clock } from "lucide-react";
import AQIIndicator from "@/components/AQIIndicator";
import HealthAdvisoryCard from "@/components/HealthAdvisoryCard";
import PollutantCard from "@/components/PollutantCard";

const HomeScreen = () => {
  const currentAQI = 156;
  const aqiLevel = "Unhealthy";
  const lastUpdated = "2 minutes ago";

  return (
    <div className="p-4 space-y-4">
      {/* Current Location & Time */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <div>
                <p className="font-semibold">Bandra West, Mumbai</p>
                <p className="text-sm opacity-90">Maharashtra, India</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Today</p>
              <p className="font-semibold">2:30 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main AQI Display */}
      <Card className="bg-gradient-to-br from-white to-gray-50">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <div className="text-6xl font-bold text-red-500 mb-2">{currentAQI}</div>
            <Badge variant="destructive" className="text-lg px-4 py-1">
              {aqiLevel}
            </Badge>
          </div>
          <AQIIndicator value={currentAQI} />
          <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>Updated {lastUpdated}</span>
          </div>
        </CardContent>
      </Card>

      {/* Health Advisory */}
      <HealthAdvisoryCard aqiLevel={aqiLevel} />

      {/* Pollutant Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <span>Pollutant Levels</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <PollutantCard 
            name="PM2.5" 
            value="89" 
            unit="μg/m³" 
            level="Unhealthy" 
            color="text-red-500"
            icon={<Droplets className="h-4 w-4" />}
          />
          <PollutantCard 
            name="PM10" 
            value="124" 
            unit="μg/m³" 
            level="Moderate" 
            color="text-yellow-500"
            icon={<Wind className="h-4 w-4" />}
          />
          <PollutantCard 
            name="NO₂" 
            value="45" 
            unit="ppb" 
            level="Good" 
            color="text-green-500"
            icon={<Eye className="h-4 w-4" />}
          />
          <PollutantCard 
            name="O₃" 
            value="68" 
            unit="ppb" 
            level="Moderate" 
            color="text-yellow-500"
            icon={<Thermometer className="h-4 w-4" />}
          />
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">7</div>
            <p className="text-sm text-green-700">Good Days This Month</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">23°C</div>
            <p className="text-sm text-orange-700">Temperature</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;
