export function checkSelected(selected, id) {
    if(selected === id) {
        console.log(selected);
        return "folder--selected";
    } else {
        return "folder";
    }
}

export function getImageUrl(text, url) {
    var Icon = new Image();
    var Img = new Image();
    var el = document.createElement( 'html' );
    el.innerHTML = text;
    let nodeList = el.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if(((nodeList[i].getAttribute("rel") === "apple-touch-icon-precomposed") || (nodeList[i].getAttribute("rel") === "apple-touch-icon")
            || (nodeList[i].getAttribute("rel") === "icon")))
        {   
            Img.src = nodeList[i].getAttribute("href");
            if(Icon.src === "") {
                Icon.src = Img.src
            }
            
            var isBigger = bigger(Img, Icon);

            if(true){
                Icon.src = Img.src
                console.log(Icon.src)
            }
        }
    }
    if(!Icon.src.includes("https")) {
        return (Icon.src)
    }
    return (Icon.src);
}

/* export function htmlToCanvas(text) {
    var el = document.createElement( 'html' );
    el.innerHTML = text;
    html2canvas(el).then(function(canvas) {
        // Export the canvas to its data URI representation
        return base64image = canvas.toDataURL("image/png")
    }
} */

function bigger(img1, img2) {
    let size1 = load(img1)
    let size2 = load(img2)
    return (size1 >= size2)
}
function load(theImage) {
    theImage.onload = function() {
        return theImage.naturalHeight
    }
}