const leftImg = document.querySelector(".dump-img");
const pList = document.querySelectorAll(".p-list li");

const changeImg = (e)=>{
  const liValue = e.target.textContent;
  // console.log(liValue)
  switch(liValue){
    case 'Podcasters':
      leftImg.src="./img/podcasters.png"
      break;
    case 'Video Creators':
      leftImg.src="./img/videocreators.png"  
      break;
    case 'Musicians':
      leftImg.src="./img/musicians.png"
    break;
    case 'Visual Artists':
      leftImg.src="./img/visualartists.png"
    break;
    case 'Communities':
      leftImg.src="./img/communities.png"
    break;
    case 'Writers & Journalists':
      leftImg.src="./img/writers.png"
    break;
    case 'Gaming Creators':
      leftImg.src="./img/gamingcreators.png"
    break;
    case 'Nonprofits':
      leftImg.src="./img/nonprofit.png"
    break;
    case 'Tutorials and Education':
      leftImg.src="./img/tutorials.png" 
    break;
    case 'Creators-of-all-kinds':
      leftImg.src="./img/creatorsofallkinds.png"  
    break;
  }
}
  pList.forEach(list=> {
    list.addEventListener("mouseover",changeImg);
  })

