var NodeGenerator = function( idVar, valueVar, childVar ){
	var Self = this;
	Self.idVar = idVar;
	Self.valueVar = valueVar;
	Self.childVar = childVar;
	Self.getNode = function( id, value, child ){
		var node = {};
		node[ Self.idVar ] = id;
		node[ Self.valueVar ] = value;
		node[ Self.childVar ] = child;
		return node;
	}
}

var IdGenerator = function(){
	var Self = this;
	Self.id = 0;
	Self.getId = function(){
		return Self.id++;
	}
}

var getRandomNumber = function(size){
	if(!size) size=10;
	return Math.floor((Math.random() * size) + 1);
}


var RandomNumberGenerator = function (size){
	var Self = this;
	Self.next = 0;	
	Self.randomNumbers = [];

	Self.initializationRandomNumbers = function(size){
		for (var i = 100; i >= 0; i--) {
			Self.randomNumbers.push(getRandomNumber(size));
		}
	}

	Self.getNumber = function(){
		return Self.randomNumbers[Self.next++];
	}

	Self.initializationRandomNumbers(size);
}

var RandNumberG = new RandomNumberGenerator(6);


var CharGenerator = function(){
	var Self = this;
	Self.ascii = "A".charCodeAt(0);
	Self.getChar = function(){
		return String.fromCharCode(Self.ascii++);
	}
}

var idG = new IdGenerator();
var charG = new CharGenerator();


var TreeGenerator = function(id, value, child){
	var Self = this;
	Self.tree = [];
	Self.depth = 0;
	Self.maxDepth = 10;
	
	Self.idVar = id;
	Self.valueVar = value;
	Self.childVar = child;
	var nodeG = new NodeGenerator(id, value, child);

	Self.buildNodes = function(){
		var tempTree = [];
		var num = RandNumberG.getNumber();
		for (var i = num; i >= 0; i--) {
			var node = nodeG.getNode(idG.getId(),charG.getChar(), []);
			tempTree.push(node);
		}
		return tempTree;
	};
	Self.setDepth = function(){
		Self.depth = RandNumberG.getRandomNumber();
	}
	Self.buildChildNodes = function(tree){
		for(var index in tree){
			Self.tree[index][Self.childVar] = Self.buildNodes();
		}
	}
	Self.getTree = function(){
		return Self.tree;
	}

	Self.tree = Self.buildNodes();
	Self.buildChildNodes(Self.tree);
	var depth = RandNumberG.getNumber();

}

var TreeG = new TreeGenerator("id", "value", "subOrg");
console.log(TreeG.getTree());