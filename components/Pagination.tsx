import Link from "next/link"

type Props = {
  paginationData: {
    page: number
    pageCount: number
  }
}
const Pagination = ({ paginationData }: Props) => {
  const firstPage = 1
  const currentPage = paginationData.page
  const totalPage = paginationData.pageCount

  const pathname = "/blog"

  return (
    <div className="flex left-0 content-start justify-center flex-wrap max-w-lg">
      <div>
        <h2 className="ml-6 text-left text-red-500 no-underline pb-1 max-w-md rounded-md font-bold text-2xl">
          <span className="text-black text-base font-semibold ">
            {totalPage > 1 && (
              <div>
                {firstPage === currentPage && (
                  <div className="hover:underline ">
                    <Link
                      href={{
                        pathname: pathname,
                        query: { page: `${currentPage + 1}` },
                      }}
                      passHref
                    >
                      {" "}
                      next page{" "}
                    </Link>
                  </div>
                )}

                {currentPage > firstPage && totalPage > currentPage && (
                  <div>
                    <Link
                      className="hover:underline"
                      href={{
                        pathname: pathname,
                        query: { page: `${currentPage - 1}` },
                      }}
                      passHref
                    >
                      {" "}
                      previous page |
                    </Link>

                    <Link
                      className="hover:underline"
                      href={{
                        pathname: pathname,
                        query: { page: `${currentPage + 1}` },
                      }}
                      passHref
                    >
                      {" "}
                      next page{" "}
                    </Link>
                  </div>
                )}

                {currentPage === totalPage && (
                  <div>
                    <Link
                      className="hover:underline"
                      href={{
                        pathname: pathname,
                        query: { page: `${currentPage - 1}` },
                      }}
                      passHref
                    >
                      {" "}
                      previous page{" "}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </span>
        </h2>
      </div>
    </div>
  )
}

export default Pagination
