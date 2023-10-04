const renderList = (navItems, liClass, navClass, toggleMenu) => {
  return navItems.map((ref) => (
    <li key={`ref-name-${navItems.indexOf(ref)}`} className={liClass}>
      <a href={ref.refer} className={navClass} onClick={() => toggleMenu()}>
        {ref.name}
      </a>
    </li>
  ));
};

export { renderList };
