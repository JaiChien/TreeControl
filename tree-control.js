(function(){
	
	var Self = this;
	Self.TreePool = null;
	Self.idVar = null;
	Self.idVar = null;
	Self.taVar = null;

	Self.parentNodes = [];
	Self.saveParentNode = function(parent){
		Self.parentNodes.push(parent);
	}

	Self.searchTreeByVar = function(nodes, node){
		var result = null;
		for(var index in nodes){
			if(nodes[index][Self.taVar]==node[Self.taVar]){
				result = nodes[index];
			}else{
				if(nodes[index].child.length>0){
					var temp = Self.searchTreeByVar(nodes[index].child, node);
					if(temp){
						result = temp;
						Self.saveParentNode(nodes[index])
					}
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
		searchTreeByVar:function(taVar, value){
			Self.taVar = taVar;
			var node = {};
			node[taVar] = value;
			var taNode = Self.searchTreeByVar(Self.TreePool, node);
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
		name:'A',
		child:[]
	},
	{
		id:1,
		name:'B',
		child:[
			{
				id:6,
				name:'G',
				child:[]
			},
			{
				id:7,
				name:'H',
				child:[
					{
						id:15,
						name:'P',
						child:[]
					},
				]
			},
			{
				id:8,
				name:'I',
				child:[]
			},
		]	
	},
	{
		id:2,
		name:'C',
		child:[
			{
				id:9,
				name:'J',
				child:[
					{
						id:16,
						name:'Q',
						child:[
							{
								id:18,
								name:'S',
								child:[]
							},
						]
					},
				]
			},
			{
				id:10,
				name:'K',
				child:[
					{
						id:17,
						name:'R',
						child:[]
					},
				]
			},
		]
	},
	{
		id:3,
		name:'D',
		child:[
			{
				id:11,
				name:'L',
				child:[]
			},
			{
				id:12,
				name:'M',
				child:[
					{
						id:19,
						name:'T',
						child:[
							{
								id:20,
								name:'U',
								child:[
									{
										id:21,
										name:'V',
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
		name:'E',
		child:[]
	},
	{
		id:5,
		name:'F',
		child:[
			{
				id:13,
				name:'N',
				child:[]
			},
			{
				id:14,
				name:'O',
				child:[]
			}
		]
	},
];
tree.setTree('id', 'child', treeData);
var result = tree.searchTreeByVar('id', 21);
console.log(result);