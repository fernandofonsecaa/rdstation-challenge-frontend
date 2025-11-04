// Form.js

import React, { useState } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ setRecommendations: setGlobalRecommendations }) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const {
    getRecommendations,
    recommendations,
    setRecommendations,
  } = useRecommendations(products);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const dataRecommendations = getRecommendations(formData);
    setLoading(false);

    console.log('Recomendações geradas:', dataRecommendations);

    // Atualiza o estado interno do hook
    setRecommendations(dataRecommendations);

    // E também atualiza o estado global do App
    if (setGlobalRecommendations) {
      setGlobalRecommendations(dataRecommendations);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" loading={loading} />
    </form>
  );
}

export default Form;
