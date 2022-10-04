Webcam.set({
    width: 400,
    height: 300,
    image_format:"png",
    png_quality: 90,
})

camera= document.getElementById("camera")

Webcam.attach("#camera")

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("Result").innerHTML= '<img id= "my_img" src= "'+ data_uri +'" />'
    })
}

console.log("ml version", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vdonx7LAo/model.json", modelLoaded);

function modelLoaded()  {
   console.log("modelLoaded");
}

function Check() {
   img= document.getElementById("my_img");
   classifier.classify(img, gotResult)
}

function gotResult(error,results) {
   if (error) {
    console.error(error)
   }
   else {
    console.log(results)
    document.getElementById("Result_name_object").innerHTML= results[0].label
    document.getElementById("Precision_object").innerHTML= results[0].confidence.toFixed(3)
   }
}



