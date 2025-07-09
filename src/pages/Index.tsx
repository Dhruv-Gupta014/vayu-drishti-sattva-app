
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
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Wind className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">VayuDrishti</h1>
                <p className="text-sm opacity-90">Air Quality Monitoring & Health Advisory</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-5 w-5" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Change Location
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent h-16">
              <TabsTrigger 
                value="home" 
                className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50"
              >
                <Home className="h-5 w-5" />
                <span className="text-sm">Home</span>
              </TabsTrigger>
              <TabsTrigger 
                value="map" 
                className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50"
              >
                <Map className="h-5 w-5" />
                <span className="text-sm">Heatmap</span>
              </TabsTrigger>
              <TabsTrigger 
                value="forecast" 
                className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50"
              >
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Forecast</span>
              </TabsTrigger>
              <TabsTrigger 
                value="trends" 
                className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50"
              >
                <Activity className="h-5 w-5" />
                <span className="text-sm">Trends</span>
              </TabsTrigger>
              <TabsTrigger 
                value="alerts" 
                className="flex flex-col items-center justify-center space-y-1 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-50"
              >
                <Bell className="h-5 w-5" />
                <span className="text-sm">Alerts</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wind className="h-6 w-6" />
                <span className="text-lg font-semibold">VayuDrishti</span>
              </div>
              <p className="text-gray-400 text-sm">
                Real-time air quality monitoring and health advisory platform for India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Real-time AQI Monitoring</li>
                <li>Health Advisories</li>
                <li>Pollution Forecasting</li>
                <li>Location-based Alerts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Understanding AQI</li>
                <li>Health Guidelines</li>
                <li>API Documentation</li>
                <li>Data Sources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@vayudrishti.com</li>
                <li>+91 98765 43210</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 VayuDrishti. All rights reserved. | Data provided by Central Pollution Control Board (CPCB)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
