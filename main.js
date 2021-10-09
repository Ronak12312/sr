function s(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundlassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json",mr);
}
function mr(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("r_l").innerHTML="I can hear"+results[0].label;
        document.getElementById("r_c").innerHTML="Accuracy"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("r_l").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("r_c").style.color="rgb("+r+","+g+","+b+")";
        i1=document.getElementById("a1");
        i2=document.getElementById("a2");
        i3=document.getElementById("a3");
        i4=document.getElementById("a4");
        if(results[0].label =="background"){
            i1.src="aliens-01.gif";
            i2.src="aliens-02.png";
            i3.src="aliens-03.png";
            i4.src="aliens-04.png";
        }
        if(results[0].label =="clap"){
            i1.src="aliens-01.png";
            i2.src="aliens-02.gif";
            i3.src="aliens-03.png";
            i4.src="aliens-04.png";
        }
        if(results[0].label =="mouse click"){
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.gif";
            i4.src="aliens-04.png";
        }
        if(results[0].label =="paper tearing"){
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.png";
            i4.src="aliens-04.gif";
        }
    }
}
