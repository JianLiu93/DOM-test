window.dom = {
	// ---------------------操作节点node--------------------
	// ---------------------find--------------------
	find(selector) {
		let index = 0;
		let index0 = 0;
		let arr = [];
		index = selector.indexOf('>');
		if (index === -1) {
			return document.querySelectorAll(selector);
		} else {
			while (index !== -1) {
				arr.push(selector.substring(index0, index));
				index0 = index + 1;
				index = selector.indexOf('>', index + 1);
			}
			arr.push(selector.substring(index0));
			console.log(arr);
			let selects = 'document';
			for (let i = 0; i < arr.length; i++) {
				if (i === arr.length - 1) {
					selects += '.querySelectorAll("' + arr[i] + '")';
				} else {
					selects += '.querySelector("' + arr[i] + '")';
				}
			}
			selects = 'return ' + selects;
			console.log(selects);
			return Function(selects)();
		}
	},
	// ---------------------------------------------
	// ----------------改写或查询style-----------------
	style(node1, name, value) {
		if (arguments.length === 3) {
			node1.style[name] = value;
		} else if (arguments.length === 2) {
			return node1.style[name];
		} else {
			throw 'error';
		}
	},
	// ---------------------------------------------
	// ----------------each遍历nodeList-----------------
	each(nodeList, fn) {
		for (let i = 0; i < nodeList.length; i++) {
			fn.call(null, nodeList[i]);
		}
	}
};
