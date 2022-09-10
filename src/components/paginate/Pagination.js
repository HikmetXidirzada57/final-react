import React from 'react'
import ReactPaginate from "react-paginate";
import './pagination.scss'
const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {

let pages = [];

for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
}

  return (
    <div className='pagination'>

   {pages.map((page, index) => {    
                return (

                   <>
                     <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                   </>
       
                );
            })}
               {/* <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={5}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onClick={() => setCurrentPage(pages.i)}
                  containerClassName={"pagination justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                /> */}
    </div>
  )
}

export default Pagination
