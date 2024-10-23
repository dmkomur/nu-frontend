import {
    StyledPaginationButton,
    StyledPaginationWrapper,
    StyledPageNumber,
} from "./ExpressionPagination.styled";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => onPageChange(currentPage - 1);
    const handleNext = () => onPageChange(currentPage + 1);

    const createPageArray = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show the first page
            pages.push(1);

            // Show ellipsis if needed
            if (currentPage > 3) {
                pages.push("...");
            }

            // Show current page and its neighbors
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            // Show ellipsis if needed
            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            // Always show the last page
            if (totalPages > 1) {
                pages.push(totalPages);
            }
        }
        return pages;
    };

    const pages = createPageArray();

    return (
        <StyledPaginationWrapper>
            <StyledPaginationButton
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                Prev
            </StyledPaginationButton>
            {pages.map((page, index) => {
                if (page === "...") {
                    return <span key={index}>...</span>;
                }
                return (
                    <StyledPaginationButton
                        key={`page-${page}`}
                        onClick={() => onPageChange(page)}
                        disabled={page === currentPage}
                    >
                        <StyledPageNumber data-active={page === currentPage}>
                            {page}
                        </StyledPageNumber>
                    </StyledPaginationButton>
                );
            })}
            <StyledPaginationButton
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </StyledPaginationButton>
        </StyledPaginationWrapper>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired, // текущая страница (обязательный)
    totalPages: PropTypes.number.isRequired, // общее количество страниц (обязательный)
    onPageChange: PropTypes.func.isRequired, // функция для изменения страницы (обязательный)
};

export default Pagination;
