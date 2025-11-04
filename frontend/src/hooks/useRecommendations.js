// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation.service';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData) => {
    const data = recommendationService.getRecommendations(formData, products);

    const normalized = Array.isArray(data)
      ? data
      : data
      ? [data]
      : [];

    setRecommendations(normalized);
    return normalized;
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
