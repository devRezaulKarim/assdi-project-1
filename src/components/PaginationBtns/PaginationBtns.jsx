/* eslint-disable react/prop-types */
export default function PaginationBtns({
  page,
  index,
  setIndex,
  active: { activePage, setActivePage },
}) {
  const active = page == activePage;
  const handleActivePage = () => {
    setIndex(index);
    setActivePage(page);
  };
  return (
    <div className={`pagesBtn ${active}`} onClick={handleActivePage}>
      {page + 1}
    </div>
  );
}
