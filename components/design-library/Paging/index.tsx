import ReactPaginate from 'react-paginate';

interface Props {
  totalPages: number;
  handleChangePage: (pageNumber: number) => void;
}

export default function Paging({ totalPages, handleChangePage }: Props) {
  function handlePageClick(event: any) {
    console.log("Page num", event.selected);
    handleChangePage(event.selected + 1);
  }

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="Previous"
      />
    </div>
  )
}