
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, Satellite, Layers, Wind, Droplets, Eye, Thermometer } from "lucide-react";

const HeatmapScreen = () => {
  const [selectedPollutant, setSelectedPollutant] = useState("pm25");
  const [viewMode, setViewMode] = useState("map");

  return (
    <div className="h-full">
      {/* Controls */}
      <div className="p-4 bg-white border-b space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Air Quality Map</h2>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
            >
              <Map className="h-4 w-4 mr-1" />
              Map
            </Button>
            <Button
              variant={viewMode === "satellite" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("satellite")}
            >
              <Satellite className="h-4 w-4 mr-1" />
              Satellite
            </Button>
          </div>
        </div>

        {/* Pollutant Selection */}
        <Tabs value={selectedPollutant} onValueChange={setSelectedPollutant}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pm25" className="text-xs">
              <Droplets className="h-3 w-3 mr-1" />
              PM2.5
            </TabsTrigger>
            <TabsTrigger value="pm10" className="text-xs">
              <Wind className="h-3 w-3 mr-1" />
              PM10
            </TabsTrigger>
            <TabsTrigger value="no2" className="text-xs">
              <Eye className="h-3 w-3 mr-1" />
              NO₂
            </TabsTrigger>
            <TabsTrigger value="o3" className="text-xs">
              <Thermometer className="h-3 w-3 mr-1" />
              O₃
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Map Placeholder */}
      <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 m-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-200/60 via-yellow-200/60 to-green-200/60"></div>
        
        {/* City Markers */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-xs font-bold relative animate-pulse">
            156
            <div className="absolute -top-8 -left-4 bg-white rounded px-2 py-1 text-black text-xs shadow-lg">
              Mumbai
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/3">
          <div className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
            78
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/4">
          <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
            45
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4">
          <div className="bg-orange-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-bold">
            112
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
          <div className="text-xs font-semibold mb-2">AQI Scale</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-xs">Good (0-50)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-xs">Moderate (51-100)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span className="text-xs">Unhealthy for Sensitive (101-150)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-xs">Unhealthy (151-200)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="p-4 space-y-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Selected Area: Bandra West</h3>
              <Badge variant="destructive">Unhealthy</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">PM2.5</p>
                <p className="font-semibold">89 μg/m³</p>
              </div>
              <div>
                <p className="text-gray-600">PM10</p>
                <p className="font-semibold">124 μg/m³</p>
              </div>
              <div>
                <p className="text-gray-600">NO₂</p>
                <p className="font-semibold">45 ppb</p>
              </div>
              <div>
                <p className="text-gray-600">O₃</p>
                <p className="font-semibold">68 ppb</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeatmapScreen;
