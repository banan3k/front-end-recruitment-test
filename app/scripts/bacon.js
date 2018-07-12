moreBacon = () => {
  let baconSection = document.getElementById('overview').children[1];
  let sliceOfBacon = baconSection.children[0];
  let tempSlice = sliceOfBacon.cloneNode(true);
  baconSection.appendChild(tempSlice);
};
