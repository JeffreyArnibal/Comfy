import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
   const { meta } = useLoaderData()
   const { page, pageCount } = meta.pagination

   const { search, pathname } = useLocation()
   const navigate = useNavigate()

   const handlePageChange = (pageNumber) => {
   const searchParams = new URLSearchParams(search)
   searchParams.set('page', pageNumber)
   navigate(`${pathname}?${searchParams.toString()}`)
   }

   const addPageButton = ({pageNumber, activeClass}) => {
      return (
         <button 
            key={pageNumber} 
            onClick={()=>handlePageChange(pageNumber)} 
            className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ? 'bg-base-300 border-base-300' : ''}`}
         >
            {pageNumber}
         </button>
      )
   }

   const renderPageButton = () => {
      const pageButton = []
      //first button
      pageButton.push(addPageButton({pageNumber: 1, activeClass: page===1}))
      //dots
      if(page > 2) {
         pageButton.push(<button className="join-item btn btn-xs sm:btn-md" key='dots-1'>...</button>
      )
      }
      
      //active page
      if(page !== 1 && page !== pageCount){
         pageButton.push(addPageButton({pageNumber:page,activeClass:page===true}))
      }
      //dots
      if(page < pageCount - 1){
         pageButton.push(<button className="join-item btn btn-xs sm:btn-md" key='dots-2'>...</button>)
      }
      

      //last button
      pageButton.push(addPageButton({pageNumber:pageCount,activeClass:page===pageCount}))
      return pageButton
   }

   if (pageCount < 2) return null

   return (
      <div className='mt-16 flex justify-end'>
         <div className="join">
            <button 
               className="btn btn-xs sm:btn-md join-item" 
               onClick={()=>{
                  let prevPage = page - 1
                  if(prevPage < 1) prevPage = pageCount
                  handlePageChange(prevPage)
               }}
            >
               Prev
            </button>
            {renderPageButton()}
            <button 
               className="btn btn-xs sm:btn-md join-item" 
               onClick={()=>{
                  let nextPage = page + 1
                  if(nextPage > pageCount) nextPage = 1
                  handlePageChange(nextPage)
               }}
            >
               Next
            </button>
         </div>
      </div>
   )
}

export default PaginationContainer
