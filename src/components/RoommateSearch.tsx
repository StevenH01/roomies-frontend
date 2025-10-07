"use client";
import { useState } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";

const cities = ["Sacramento, CA", "San Jose, CA", "Los Angeles, CA", "Davis, CA", "San Francisco, CA"];

export default function RoommateSearch() {
  const [city, setCity] = useState<string | null>("Sacramento, CA");
  const [budget, setBudget] = useState<string>("1200");
  const [prefs, setPrefs] = useState<string>("student");

  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 md:p-6">
      <div className="grid gap-3 md:grid-cols-3">
        <Autocomplete
          disablePortal
          options={cities}
          value={city}
          onChange={(_, v) => setCity(v)}
          renderInput={(params) => <TextField {...params} label="City" />}
        />
        <TextField label="Budget (USD / mo)" value={budget} onChange={(e) => setBudget(e.target.value)} />
        <TextField label="Preference (e.g., student, non-smoker)" value={prefs} onChange={(e) => setPrefs(e.target.value)} />
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="contained" size="large" onClick={() => alert(`Search: ${city} • $${budget} • ${prefs}`)}>
          Search Roommates
        </Button>
      </div>
    </div>
  );
}
