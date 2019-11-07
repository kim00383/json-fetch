

document.addEventListener("DOMContentLoaded", fetchImg);
function fetchImg(){

const imgUrl="https://picsum.photos/v2/list?limit=8";
fetch(imgUrl)
    .then((resp) => resp.json())
    .then(function(data){
      
      //let imgs = data; 
      return data.map(function(imgJson) { 
        let img = document.createElement('img'); 
        let imgPath=imgJson.download_url.replace(imgJson.width,'400').replace(imgJson.height,'300');
        // img.src = "https://picsum.photos/id/"+imgJson.id+"/400/300"; 
        img.src =imgPath;
         img.alt=imgJson.author;
        document.getElementById('divMain').append(img);
      });
      console.log(imgs);

    })
    .catch(err => { throw err });
}

