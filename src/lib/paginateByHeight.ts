/**
 * Greedy height-based pagination for statement tables.
 *
 * `rowBottoms[i]` is the bottom edge of row i measured from the top of the
 * first row in one continuous table (so collapsed borders are accounted for).
 * Rows are packed onto a page while the page's rows fit in its capacity; a row
 * is never split, and a row taller than a whole page gets a page of its own.
 *
 * Returns the row indices for each page.
 */
export function paginateByHeight(
  rowBottoms: number[],
  firstPageCapacity: number,
  otherPageCapacity: number,
  tolerance = 0.5
): number[][] {
  const pages: number[][] = [];
  let current: number[] = [];
  let pageTop = 0;

  for (let i = 0; i < rowBottoms.length; i++) {
    const capacity = pages.length === 0 ? firstPageCapacity : otherPageCapacity;
    if (current.length > 0 && rowBottoms[i] - pageTop > capacity + tolerance) {
      pages.push(current);
      current = [];
      pageTop = rowBottoms[i - 1];
    }
    current.push(i);
  }

  if (current.length > 0) pages.push(current);
  return pages;
}
