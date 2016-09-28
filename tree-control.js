(function(){
	
	var Self = this;
	Self.TreePool = null;
	Self.idVar = null;
	Self.idVar = null;

	Self.parentNodes = [];
	Self.saveParentNode = function(parent){
		Self.parentNodes.push(parent);
	}

	Self.searchTreeByNode = function(nodes, node){
		var result = null;
		for(var index in nodes){
			if(nodes[index].value==node.value){
				result = nodes[index];
			}else{
				var temp = Self.searchTreeByNode(nodes[index].child, node);
				if(temp){
					result = temp;
					Self.saveParentNode(nodes[index])
				}
				
			}
		}
		return result;
	}

	tree = {
		setTree:function(idVar, childVar, tree){
			Self.idVar = idVar;
			Self.childVar = childVar;
			Self.TreePool = tree;
		},
		searchTreeByNode:function(node){
			var taNode = Self.searchTreeByNode(Self.TreePool, node);
			return {
				taNode:taNode,
				parentNodes:Self.parentNodes,
			};
		}

	};

})();

var treeData = [
	{
		id:0,
		value:'A',
		child:[]
	},
	{
		id:1,
		value:'B',
		child:[
			{
				id:6,
				value:'G',
				child:[]
			},
			{
				id:7,
				value:'H',
				child:[
					{
						id:15,
						value:'P',
						child:[]
					},
				]
			},
			{
				id:8,
				value:'I',
				child:[]
			},
		]	
	},
	{
		id:2,
		value:'C',
		child:[
			{
				id:9,
				value:'J',
				child:[
					{
						id:16,
						value:'Q',
						child:[
							{
								id:18,
								value:'S',
								child:[]
							},
						]
					},
				]
			},
			{
				id:10,
				value:'K',
				child:[
					{
						id:17,
						value:'R',
						child:[]
					},
				]
			},
		]
	},
	{
		id:3,
		value:'D',
		child:[
			{
				id:11,
				value:'L',
				child:[]
			},
			{
				id:12,
				value:'M',
				child:[
					{
						id:19,
						value:'T',
						child:[
							{
								id:20,
								value:'U',
								child:[
									{
										id:21,
										value:'V',
										child:[]
									},
								]
							},
						]
					},
				]
			}
		]
	},
	{
		id:4,
		value:'E',
		child:[]
	},
	{
		id:5,
		value:'F',
		child:[
			{
				id:13,
				value:'N',
				child:[]
			},
			{
				id:14,
				value:'O',
				child:[]
			}
		]
	},
];
tree.setTree('id', 'child', treeData);
var result = tree.searchTreeByNode({
										id:21,
										value:'V',
										child:[]
									});
console.log(result);