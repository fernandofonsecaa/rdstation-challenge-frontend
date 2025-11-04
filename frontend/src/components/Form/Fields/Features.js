import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures)

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-gray-700">{feature}</span>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
