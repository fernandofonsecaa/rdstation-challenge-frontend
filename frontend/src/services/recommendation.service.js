
// função para normalizar strings
function normalize(str) {
  return String(str || '').trim().toLowerCase();
}

// função para contar qts produtos coincidem
function countMatches(source = [], target = []) {
  const targetSet = new Set(target.map(normalize));
  return source.reduce((count, item) => {
    return count + (targetSet.has(normalize(item)) ? 1 : 0);
  }, 0);
}

function getRecommendations(formData, products) {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = 'MultipleProducts',
  } = formData || {};

  // Se não há produtos disponíveis
  if (!products || products.length === 0) {
    return selectedRecommendationType === 'SingleProduct' ? null : [];
  }

  // calcula score
  const scored = products.map((product, index) => {
    const prefScore = countMatches(selectedPreferences, product.preferences);
    const featScore = countMatches(selectedFeatures, product.features);
    return {
      product,
      score: prefScore + featScore,
      index,
    };
  });

  // filtrando product sem correspondencia
  const matched = scored.filter((s) => s.score > 0);
  if (matched.length === 0) {
    return selectedRecommendationType === 'SingleProduct' ? null : [];
  }

  // singleproduct
  if (selectedRecommendationType === 'SingleProduct') {
    const maxScore = Math.max(...matched.map((m) => m.score));
    const topProducts = matched.filter((m) => m.score === maxScore);

    // Retorna ultimo produto valido caso empate
    const lastTop = topProducts.reduce(
      (acc, cur) => (cur.index > acc.index ? cur : acc),
      topProducts[0]
    );

    return [lastTop.product];
  }

  // multiproducts
  return matched
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((m) => m.product);
}

export default { getRecommendations };
