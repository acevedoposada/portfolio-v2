export const DOTS_SPAN = "...";

export function usePagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    if (currentPage <= halfVisible + 1) {
      for (let i = 1; i < maxVisiblePages; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(DOTS_SPAN);
      pageNumbers.push(totalPages);

      return pageNumbers;
    }

    if (currentPage >= totalPages - halfVisible) {
      pageNumbers.push(1);
      pageNumbers.push(DOTS_SPAN);
      for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    pageNumbers.push(1);
    pageNumbers.push(DOTS_SPAN);
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push(DOTS_SPAN);
    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  const pages = getPageNumbers();

  return {
    pages,
  };
}
