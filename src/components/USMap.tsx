import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import alabama from "@/assets/licenses/alabama.jpg";
import arkansas from "@/assets/licenses/arkansas.jpg";
import colorado from "@/assets/licenses/colorado.jpg";
import florida from "@/assets/licenses/florida.jpg";
import georgia from "@/assets/licenses/georgia.jpg";
import illinois from "@/assets/licenses/illinois.jpg";
import indiana from "@/assets/licenses/indiana.jpg";
import iowa from "@/assets/licenses/iowa.jpg";
import kansas from "@/assets/licenses/kansas.jpg";
import kentucky from "@/assets/licenses/kentucky.jpg";
import louisiana from "@/assets/licenses/louisiana.jpg";
import maryland from "@/assets/licenses/maryland.jpg";
import michigan from "@/assets/licenses/michigan.jpg";
import mississippi from "@/assets/licenses/mississippi.jpg";
import missouri from "@/assets/licenses/missouri.jpg";
import montana from "@/assets/licenses/montana.jpg";
import nebraska from "@/assets/licenses/nebraska.jpg";
import nevada from "@/assets/licenses/nevada.jpg";
import north_carolina from "@/assets/licenses/north_carolina.jpg";
import ohio from "@/assets/licenses/ohio.jpg";
import oklahoma from "@/assets/licenses/oklahoma.jpg";
import south_carolina from "@/assets/licenses/south_carolina.jpg";
import tennessee from "@/assets/licenses/tennessee.jpg";
import texas from "@/assets/licenses/texas.jpg";
import utah from "@/assets/licenses/utah.jpg";
import virginia from "@/assets/licenses/virginia.jpg";
import west_virginia from "@/assets/licenses/west_virginia.jpg";
import wisconsin from "@/assets/licenses/wisconsin.jpg";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const POSTAL_TO_FIPS: Record<string, string> = {
  AL:"01",AK:"02",AZ:"04",AR:"05",CA:"06",CO:"08",CT:"09",DE:"10",FL:"12",GA:"13",
  HI:"15",ID:"16",IL:"17",IN:"18",IA:"19",KS:"20",KY:"21",LA:"22",ME:"23",MD:"24",
  MA:"25",MI:"26",MN:"27",MS:"28",MO:"29",MT:"30",NE:"31",NV:"32",NH:"33",NJ:"34",
  NM:"35",NY:"36",NC:"37",ND:"38",OH:"39",OK:"40",OR:"41",PA:"42",RI:"44",SC:"45",
  SD:"46",TN:"47",TX:"48",UT:"49",VT:"50",VA:"51",WA:"53",WV:"54",WI:"55",WY:"56",
};

const LICENSE_BY_NAME: Record<string, string> = {
  Alabama: alabama, Arkansas: arkansas, Colorado: colorado, Florida: florida,
  Georgia: georgia, Illinois: illinois, Indiana: indiana, Iowa: iowa,
  Kansas: kansas, Kentucky: kentucky, Louisiana: louisiana, Maryland: maryland,
  Michigan: michigan, Mississippi: mississippi, Missouri: missouri, Montana: montana,
  Nebraska: nebraska, Nevada: nevada, "North Carolina": north_carolina, Ohio: ohio,
  Oklahoma: oklahoma, "South Carolina": south_carolina, Tennessee: tennessee,
  Texas: texas, Utah: utah, Virginia: virginia, "West Virginia": west_virginia,
  Wisconsin: wisconsin,
};

export function USMap({ licensed }: { licensed: string[] }) {
  const licensedFips = new Set(licensed.map((s) => POSTAL_TO_FIPS[s]).filter(Boolean));
  const [hovered, setHovered] = useState<{ name: string; isLicensed: boolean; license?: string } | null>(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = geo.id as string;
              const isLicensed = licensedFips.has(fips);
              const name = geo.properties.name as string;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHovered({ name, isLicensed, license: LICENSE_BY_NAME[name] })}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    default: {
                      fill: isLicensed ? "color-mix(in oklab, var(--primary) 85%, transparent)" : "var(--card)",
                      stroke: "var(--background)",
                      strokeWidth: 0.75,
                      outline: "none",
                      transition: "all 200ms",
                    },
                    hover: {
                      fill: isLicensed ? "var(--primary)" : "var(--muted)",
                      stroke: "var(--primary)",
                      strokeWidth: 1.2,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: { fill: "var(--primary)", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip / status pill */}
      <div className="absolute top-4 left-4 px-4 py-2 rounded-xl card-glass text-sm min-w-[180px] max-w-[260px]">
        {hovered ? (
          <>
            <div className="font-display text-base text-foreground">{hovered.name}</div>
            <div className={`text-xs uppercase tracking-wider mt-1 ${hovered.isLicensed ? "text-primary" : "text-muted-foreground"}`}>
              {hovered.isLicensed ? "✓ Licensed" : "Not yet licensed"}
            </div>
            {hovered.license && (
              <img
                src={hovered.license}
                alt={`${hovered.name} insurance license`}
                className="mt-3 w-full rounded-md border border-border"
              />
            )}
          </>
        ) : (
          <div className="text-muted-foreground text-xs uppercase tracking-wider">Hover any state</div>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 px-4 py-2 rounded-xl card-glass text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-muted-foreground">Licensed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-card border border-border" />
          <span className="text-muted-foreground">Not yet</span>
        </div>
      </div>
    </div>
  );
}
