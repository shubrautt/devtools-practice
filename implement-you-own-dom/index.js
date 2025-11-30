const INDENT_SIZE = 4;
const getSpaces = length => new Array(length).fill(" ").join("");

class Node {
    constructor(nodeName) {
        this.name = nodeName;
        this.innerHTML = '';
        this.children = [];
    }

    appendChild(node) {
        this.children.push(node);
    }
}

class Vdocument extends Node {
    constructor() {
        super('html');
    }

    createElement(nodeName) {
        return new Node(nodeName);
    }

    render() {
        function printTree(currentNode, currentLevel) {
            const spaces = getSpaces(currentLevel * INDENT_SIZE);

            let output = "";

            output += `${spaces}<${currentNode.name}>\n`;

            if(currentNode.innerHTML) {
                output += `${spaces}${getSpaces(INDENT_SIZE)}${currentNode.innerHTML}\n`
            } 

            for(let i = 0; i < currentNode.children.length; i++) {
                output += printTree(currentNode.children[i], currentLevel + 1);
            }
            
            output += `${spaces}</${currentNode.name}>\n`;

            return output;
        }

        console.log(printTree(this, 0));
    }
}

var vdocument = new Vdocument();
var body = vdocument.createElement('body');
var div = vdocument.createElement('div');

div.innerHTML = 'this is div tag';

body.appendChild(div);
vdocument.appendChild(body);

vdocument.render();

console.log(vdocument, body, div);
