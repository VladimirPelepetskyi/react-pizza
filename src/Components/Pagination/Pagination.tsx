import {FC} from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination: FC<TPaginationProps> = ({currentPage, onPageChanged, pageSize, totalPageCount}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      previousLabel='<'
      nextLabel='>'
      onPageChange={(evt) => onPageChanged(evt.selected + 1)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={pageSize}
      pageCount={totalPageCount}
      disabledClassName={'hidePrevNext'}
    />
  )
}

export default Pagination

//types

type TPaginationProps = {
  currentPage: number
  onPageChanged: (selectedPage: number) => void
  pageSize: number
  totalPageCount: number
}
