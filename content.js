//gets all element in document
var elements = document.getElementsByTagName('*');

//iterates through all elements
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {

	    //text of variable
            var text = node.nodeValue;
	    var replacedText = text;
	   
	    //insert code here to replace replacedText with new text

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

//to load chrome extension
//go to extensions section
//select developer mode
//and load unpacked extension!