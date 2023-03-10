import ReactPaginate from 'react-paginate';

interface Props {
  totalPages: number;
  handleChangePage: (pageNumber: number) => void;
  currentPage: number;
}

export default function Paging({ totalPages, handleChangePage, currentPage }: Props) {
  function handlePageClick(event: any) {
    handleChangePage(event.selected + 1);
  }

  return (
    <div data-component="paging" className="p-4 border-t border-tableBorder">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        pageClassName="page"
        previousLabel="Previous"
        forcePage={currentPage}
      />
    </div>
  )
}