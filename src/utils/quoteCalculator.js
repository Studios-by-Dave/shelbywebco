export function calculateQuote({
  budget,
  pages,
  forms,
  blog,
  ecommerce,
  timeline,
  design
}) {
  const baseByBudget = {
    starter: 1800,
    growth: 3200,
    scale: 4800
  };

  const pageCost = 225;
  const formCost = 175;
  const blogCost = 450;
  const ecommerceCost = 1400;
  const timelineMultiplier = {
    standard: 1,
    rush: 1.2
  };
  const designMultiplier = {
    template: 1,
    custom: 1.18
  };

  const subtotal = baseByBudget[budget] + (pages - 1) * pageCost + forms * formCost + (blog ? blogCost : 0) + (ecommerce ? ecommerceCost : 0);
  const adjusted = subtotal * timelineMultiplier[timeline] * designMultiplier[design];
  const total = Math.round(adjusted / 50) * 50;

  const rangeLow = Math.round(total * 0.9 / 50) * 50;
  const rangeHigh = Math.round(total * 1.15 / 50) * 50;

  let tier = 'Starter';
  if (budget === 'growth' || ecommerce || blog) {
    tier = 'Growth';
  }
  if (budget === 'scale' || pages > 8 || ecommerce) {
    tier = 'Scale';
  }

  return {
    total,
    rangeLow,
    rangeHigh,
    tier,
    breakdown: {
      base: baseByBudget[budget],
      pages: (pages - 1) * pageCost,
      forms: forms * formCost,
      blog: blog ? blogCost : 0,
      ecommerce: ecommerce ? ecommerceCost : 0,
      timeline: timelineMultiplier[timeline],
      design: designMultiplier[design]
    }
  };
}
