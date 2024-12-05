import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";

export interface PaginationData {
    currentPage?: number;
    nextPage?: number | null;
    previousPage?: number | null;
    totalPages?: number;
}

const Paginations = ({
    currentPage = 1, // Memberikan nilai default
    nextPage,
    previousPage,
    totalPages,
    onPageChange,
}: PaginationData & { onPageChange: (page: number) => void }) => {

    const handlePageClick = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    if (!totalPages || totalPages < 1) {
        return <p className="text-gray-500 text-sm">Tidak ada data yang tersedia.</p>;
    }

    const renderPageNumbers = () => {
        const elements = [];
        
        for (let page = 1; page <= totalPages; page++) {
            if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                elements.push(
                    <PaginationItem key={page}>
                        <PaginationLink
                            onClick={() => handlePageClick(page)}
                            isActive={page === currentPage}
                            className="cursor-pointer"
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                );
            } else if (elements[elements.length - 1]?.key !== 'ellipsis') {
                elements.push(
                    <PaginationEllipsis key="ellipsis" />
                );
            }
        }

        return elements;
    };

    return (
        <Pagination className="xl:py-2 xl:mb-0 mb-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePageClick(previousPage || 1)}
                        aria-disabled={!previousPage}
                        className={!previousPage ? "cursor-pointer opacity-50 pointer-events-none" : ""}
                    />
                </PaginationItem>
                {renderPageNumbers()}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => handlePageClick(nextPage || (totalPages || 1))}
                        aria-disabled={!nextPage}
                        className={!nextPage ? "cursor-pointer opacity-50 pointer-events-none" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default Paginations;