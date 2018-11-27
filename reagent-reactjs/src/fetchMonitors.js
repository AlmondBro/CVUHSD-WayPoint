let monitors = [];
  let port = 3002;
  const proxy_URL =  isDev ? "https://cors-anywhere.herokuapp.com/" : `https://localhost:${port}/`;

  let initObject = {
      method: "GET", 
      headers : { 
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Zoho-authtoken 400ff2f59afedd60b29e0ecec31f7c26",
          "Cache-Control": "no-cache"
      },
   };

  let fetchURL = isDev ? (proxy_URL + API_URL) : API_URL;

  let request = new Request(fetchURL, initObject);
  
  fetch(request) //or use window.fetch(fetchURL, initObject)
      .then( (response) => {
          console.log(response);
          return response.json();
      })
      .then( (myJson) => {
         // console.log("JSON:\t" + JSON.stringify(myJson));
         
          monitors = myJson["data"]["monitors"];
          // console.log(`Monitors: ${JSON.stringify(monitors)}`);

          return monitors;
      })
      .then( (monitors) => {
          checkMonitorStatus(monitors);
      })
      .catch( (error) => {
          console.log('There has been a problem with your fetch operation: ', error.message);
      }); 
}; 
