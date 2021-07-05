import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Pagination.css"



function Pagination({prodsPerPage, totalProducts, paginate}) {

    const pageNumbers = []

    for (let i=1; i<=Math.ceil(totalProducts/prodsPerPage); i++)
    {
        pageNumbers.push(i);
    }
    return (
        <div className="paginationComponent">
            <ul className="pagination">
                {pageNumbers.map(number => 
                    (
                        <li key={number} className = "page-item">
                            <p style={{cursor: "pointer"}} onClick={()=>paginate(number)} className = "page-link">
                                {number}
                            </p>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Pagination;