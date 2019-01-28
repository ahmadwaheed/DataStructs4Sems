

//DEPTH-FIRST TRAVERSAL
//In Preorder Traversal, you proces the node, then recursively call the method
//on the left subtree and the right subtree 
const preorderTraverse = (node, array) => {

	//we dont need to do other checks, if node is not actually node it will return 
	if(!node) return array;

	//process the node
	array.push(node.value);

	//process the left tree
	array = preorderTraverse(node.left, array);
	array = preorderTraverse(node.right, array);

	return array;
};

//In inorder Traversal, you first recursively call the method on the left subtree, 
//than call the method on right subtree
const inorderTraverse = (node, array) => {

	if(!node) return array;

	array = inorderTraverse(node.left, array);
	array.push(node.value);
	array = inorderTraverse(node.left, array);
	return array;
};

//In Postorder traversal, you recursively call the method on the left subtree 
//than right subtree and process the node
const postorderTraverse(node, array) => {

	if(!node) return array;

	array = postorderTraverse(node.left, array);
	array = postorderTraverse(node.right, array);
	array.push(node.value);
	return array;
};


//BREATH_FIRST TRAVERSAL
//Iterative approach to do Breath-first search
const breathFirstTraverse = (queue, array) => {
	if(!queue || !queue.length) return array; //if no queue or no length 
//while queue has length  
	while(queue.length) {
		//shift() deletes something from the beginning of the array and give us 
		const node =  queue.shift();//first member of queue is node
			array.push(node.value); //adding value to the array
		if(node.left) //since it is breath, we have to do left first
			queue.push(node.left);
		if(node.right)
			queue.push(node.right);
	}
	return array;
}


//BREATH_FIRST TRAVERSAL
//Recursive approach to do Breath-first search
const recursiveBFS = (queue, array) {
	if(!queue.length) return array; // edge case
	const node = queue.shift(); //setting node to first member of array
	array.push(node.value);
	if(node.left) 
		queue.push(node.left);
	if(node.right)
		queue.push(node.right);
	return recursiveBFS(queue, array); 
}





