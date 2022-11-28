let WebCss = {
fontSize:'30px',
color:'yellow',
listStyle:'number inline'
};


export let SimplePage = () => {
  return (
    <>
      <div>
        <h1> Popular Web Series on Netflix</h1>
        <h4>Top 10</h4>
        <ul style={WebCss}>
          <li>Money Heist</li>
          <li>The Haunting (2018–2020)</li>
          <li>Never Have I Ever (2020)</li>
          <li> The Witcher (2019)</li>
          <li>Ozark (2017–2022)</li>
          <li>When They See Us (2019</li>
          <li>The Queen's Gambit (2020)</li>
          <li> Unbelievable(2019) </li>
          <li>Money Heist (2017–2021) </li>
          <li>Dark (2017–2020)</li>
        </ul>
      </div>
    </>
  );
};
