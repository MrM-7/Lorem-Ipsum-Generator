
var text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia vel quam a consequat. Etiam eu egestas tellus. Nulla molestie massa nulla, sed tincidunt eros venenatis et. Fusce euismod, felis vitae blandit viverra, ipsum nisl tempor lorem, vel tincidunt tellus urna porta sapien. Mauris ac diam auctor, aliquet tortor sit amet, ultricies ex. Mauris ac dui a metus pellentesque semper id ac nisl. Suspendisse potenti. Nam tempor magna a rutrum condimentum. Suspendisse mauris ex, porta sed venenatis in, tincidunt non sem.",
"Morbi aliquam ante ut finibus euismod. Sed ante nibh, ultricies nec tellus nec, blandit accumsan dolor. Donec accumsan, turpis eu malesuada placerat, turpis risus lobortis nisi, sed facilisis leo orci eu ligula. Duis non velit lobortis, dictum orci et, varius nunc. Praesent feugiat vehicula diam at congue. Proin lobortis, ipsum sit amet blandit accumsan, nisl urna faucibus libero, vel dapibus magna leo ullamcorper elit. Phasellus sapien dui, tempor id aliquam ac, placerat et tortor.",
"Aliquam rutrum, lorem ut tristique ultricies, erat ante finibus magna, nec consectetur purus risus pellentesque velit. Nullam non massa massa. Donec consequat metus vitae lorem varius congue. Sed eleifend tortor sit amet erat egestas consectetur. Aliquam erat volutpat. Duis tempor felis vel felis placerat porta. Donec pretium ac libero eu condimentum.",
"Nam varius tortor vel turpis rhoncus, molestie aliquet dolor venenatis. Donec cursus eleifend laoreet. Donec et tristique leo. Vivamus ligula magna, egestas eget ultrices a, malesuada faucibus urna. Suspendisse augue nibh, blandit et elit id, scelerisque suscipit purus Vestibulum ac commodo arcu. Maecenas accumsan semper nunc, vel vehicula velit sagittis sed.",
"Etiam pellentesque urna ut magna volutpat cursus. In pellentesque, quam sit amet pellentesque lobortis, ante dolor ultrices turpis, ornare aliquam neque odio a justo. Morbi a rhoncus diam. Pellentesque eu pellentesque dolor. Sed arcu est, aliquam sit amet tellus eu, malesuada sagittis libero.Vestibulum a mollis metus. Mauris tincidunt accumsan felis, eu ullamcorper ligula bibendum a. Curabitur accumsan luctus nisi, non vulputate ligula gravida non.",
"Pellentesque imperdiet ultrices dui, malesuada placerat orci bibendum eget.  Praesent feugiat, risus vitae mattis faucibus, justo odio facilisis erat, id imperdiet massa ante ut enim. Nunc vitae maximus dolor. Nulla venenatis velit nec odio rhoncus, eget venenatis mi aliquet. Sed auctor interdum elit sed molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dictum orci eget ligula iaculis, non iaculis eros ornare.",
"Sed cras ornare arcu dui vivamus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla aliquet enim tortor at auctor. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ut venenatis tellus in metus. Urna nunc id cursus metus aliquam eleifend.",
"Ornare arcu odio ut sem. Lacus sed turpis tincidunt id aliquet risus feugiat. Imperdiet proin fermentum leo vel orci porta non. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Massa tincidunt dui ut ornare lectus. Amet facilisis magna etiam tempor orci eu lobortis elementum. Auctor elit sed vulputate mi sit amet mauris commodo quis. Rhoncus aenean vel elit scelerisque mauris pellentesque.",
"Non tellus orci ac auctor augue mauris augue neque gravida. Est ullamcorper eget nulla facilisi etiam. Tortor condimentum lacinia quis vel eros donec. In ornare quam viverra orci. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Condimentum id venenatis a condimentum vitae sapien. Lacus vel facilisis volutpat est velit egestas dui. Non consectetur a erat nam.",
"Mauris ultrices eros in cursus turpis. Interdum velit laoreet id donec. Cursus vitae congue mauris rhoncus aenean vel. At augue eget arcu dictum varius duis. Viverra orci sagittis eu volutpat. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Diam quam nulla porttitor massa id. Faucibus ornare suspendisse sed nisi lacus sed."];

function numberFinder() {
    var number = document.getElementById("amount").value;
    
    if(number == 0 || number < 0)
       document.getElementById("lorem-text").innerHTML = "Input number greater than 0.";
     
    else{
        document.getElementById("lorem-text").innerHTML = " ";
        generator(number);
        document.getElementsByClassName("sub-container")[0].style.visibility= "visible";
    }
}

function generator(number){

    for(var i=0; i<number; i++){

        var random = Math.floor(Math.random()*10);
        document.getElementById("lorem-text").innerHTML += text[random]+"<br><br><br>";

    }
}
