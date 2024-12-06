const compactNumberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
});

export function numberFormatter(number: number) {
  return compactNumberFormatter.format(number);
}
