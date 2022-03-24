var resultValue;
window.addEventListener("load", function () {
  let selectedDeviceId;
  const codeReader = new ZXing.BrowserBarcodeReader();
  console.log("ZXing code reader initialized");
  codeReader
    .getVideoInputDevices()
    .then((videoInputDevices) => {
     
      selectedDeviceId = videoInputDevices[0].deviceId;

      document.getElementById("startButton").addEventListener("click", () => {
        codeReader
          .decodeOnceFromVideoDevice(selectedDeviceId, "video")
          .then((result) => {
            console.log("result",result);
            document.getElementById("result").textContent = result.text;
           
            resultValue = result;
            //window.location.href = '../ProductDetail/product.html?result=' + encodeURIComponent(resultValue); 
           
          })
          .catch((err) => {
            console.error(err);
            document.getElementById("result").textContent = err;
          });       
      }); 
      document.getElementById("resetButton").addEventListener("click", () => {
        document.getElementById("result").textContent = "";
        codeReader.reset();
        console.log("Reset.");
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

  function onClickBack() {
    window.location.href = "../Login/index.html"
  }

  function onClickNext(){
   var finalresult =  resultValue;
    window.location.href = '../ProductDetail/product.html?result=' + encodeURIComponent(resultValue); 
  }






