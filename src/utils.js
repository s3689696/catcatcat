export function checkSelected(selected, id) {
    if(selected === id) {
        console.log(selected);
        return "folder--selected";
    } else {
        return "folder";
    }
}

export function getImageUrl(text) {
    var Icon = new Image();
    var Img = new Image();
    var el = document.createElement( 'html' );
    el.innerHTML = text;
    let nodeList = el.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") === "apple-touch-icon-precomposed") || (nodeList[i].getAttribute("rel") === "apple-touch-icon")
            || (nodeList[i].getAttribute("rel") === "shortcut icon") || (nodeList[i].getAttribute("rel") === "icon"))
        {   
            Img.src = nodeList[i].getAttribute("href");
                console.log(Img.src)

            if(Icon.src === "") {
                Icon.src = nodeList[i].getAttribute("href");
                console.log(Icon.src)
            }
        }
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

function load(theImage) {
    theImage.onload = function() {
        return theImage.naturalHeight
    }
}