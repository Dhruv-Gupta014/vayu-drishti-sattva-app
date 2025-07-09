
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  Map, 
  TrendingUp, 
  Bell, 
  User,
  MapPin,
  Wind,
  Eye,
  Thermometer,
  AlertTriangle,
  Clock,
  Calendar,
  Activity
} from "lucide-react";
import HomeScreen from "@/components/screens/HomeScreen";
import HeatmapScreen from "@/components/screens/HeatmapScreen";
import ForecastScreen from "@/components/screens/ForecastScreen";
import TrendsScreen from "@/components/screens/TrendsScreen";
import AlertsScreen from "@/components/screens/AlertsScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-2">
            <Wind className="h-6 w-6" />
            <h1 className="text-xl font-bold">VayuDrishti</h1>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Mumbai, MH</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <div className="flex-1 overflow-y-auto pb-20">
            <TabsContent value="home" className="mt-0">
              <HomeScreen />
            </TabsContent>
            <TabsContent value="map" className="mt-0">
              <HeatmapScreen />
            </TabsContent>
            <TabsContent value="forecast" className="mt-0">
              <ForecastScreen />
            </TabsContent>
            <TabsContent value="trends" className="mt-0">
              <TrendsScreen />
            </TabsContent>
            <TabsContent value="alerts" className="mt-0">
              <AlertsScreen />
            </TabsContent>
          </div>

          {/* Bottom Navigation */}
          <TabsList className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t h-16 rounded-none grid grid-cols-5">
            <TabsTrigger value="home" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500">
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500">
              <Map className="h-5 w-5" />
              <span className="text-xs">Map</span>
            </TabsTrigger>
            <TabsTrigger value="forecast" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">Forecast</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500">
              <Activity className="h-5 w-5" />
              <span className="text-xs">Trends</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500">
              <Bell className="h-5 w-5" />
              <span className="text-xs">Alerts</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
