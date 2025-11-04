// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences)

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">Preferências:</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-gray-700">{preference}</span>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Preferences;
