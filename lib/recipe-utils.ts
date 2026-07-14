export function formatQuantity(value: number): string {
  const whole = Math.floor(value);
  const fraction = value - whole;

  const fractions: Record<string, string> = {
    "0.125": "1/8",
    "0.25": "1/4",
    "0.333": "1/3",
    "0.375": "3/8",
    "0.5": "1/2",
    "0.625": "5/8",
    "0.667": "2/3",
    "0.75": "3/4",
    "0.875": "7/8",
  };

  const roundedFraction = Math.round(fraction * 1000) / 1000;

  const fractionString = fractions[roundedFraction.toString()];

  if (whole === 0 && fractionString) {
    return fractionString;
  }

  if (whole > 0 && fractionString) {
    return `${whole} ${fractionString}`;
  }

  if (fraction === 0) {
    return whole.toString();
  }

  return value.toFixed(2).replace(/\.00$/, "");
}
