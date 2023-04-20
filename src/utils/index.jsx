const renderList = (navItems, liClass, navClass) => {
  return navItems.map((ref) => (
    <li key={ref.name} className={liClass}>
      <a href={ref.refer} className={navClass}>
        {ref.name}
      </a>
    </li>
  ));
};

export { renderList };
