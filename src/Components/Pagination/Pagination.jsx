import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({currentPage, onPageChanged, pageSize, totalPageCount}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      previousLabel='<'
      nextLabel='>'
      onPageChange={(evt) => onPageChanged(evt.selected + 1)}
      initialPage={currentPage - 1}
      pageRangeDisplayed={pageSize}
      pageCount={totalPageCount}
      disabledClassName={'hidePrevNext'}
    />
  )
}

export default Pagination
