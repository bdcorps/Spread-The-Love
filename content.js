var elements = document.getElementsByTagName('*');

var find = ["worst", "hate", "dota 2", "console"];
var replace = ["best", "love", "league of legends", "pc"];


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            for (var k = 0; k < find.length; k++) {
                var regex = new RegExp(find[k], "gi");
                replacedText = text.replace(regex, replace[k]);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
