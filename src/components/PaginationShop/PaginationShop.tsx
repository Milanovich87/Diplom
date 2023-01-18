

interface PaginationType {
    booksPerPage: number,
    totalBooks: number
    paginate: any

}

export const PaginationShop = ({ booksPerPage, totalBooks, paginate }: PaginationType) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil((totalBooks / booksPerPage)); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a href="#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}