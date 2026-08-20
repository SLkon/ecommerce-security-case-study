/**
 * Exemplo recriado para portfólio.
 * O preço final continua sendo confirmado pelo backend no checkout.
 */
export function getPromotion(originalPriceInCents: number | null, priceInCents: number) {
  const hasPromotion = Boolean(
    originalPriceInCents && originalPriceInCents > priceInCents,
  );

  return {
    hasPromotion,
    discountPercentage: hasPromotion
      ? Math.round(
          ((originalPriceInCents! - priceInCents) / originalPriceInCents!) * 100,
        )
      : null,
  };
}
