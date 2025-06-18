class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
    return child;
  }
}

function buildFruitTree() {
  const root = new Tree('fruits');
  const fruits = [
    'apple','banana','orange','pear','grape','cherry','mango','pineapple','kiwi','lemon','lime','plum','apricot','avocado','blueberry','strawberry','raspberry','blackberry','watermelon','cantaloupe','papaya','peach','nectarine','pomegranate','passionfruit','grapefruit','tangerine','coconut','fig','date'
  ];
  const groups = 10;
  const perGroup = 20;
  let index = 0;
  for (let i = 0; i < groups; i++) {
    const group = root.addChild(`group-${i}`);
    for (let j = 0; j < perGroup; j++) {
      group.addChild(fruits[index % fruits.length]);
      index++;
    }
  }
  return root;
}

function findFruit(root, target) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.value === target) {
      return node;
    }
    for (const child of node.children) {
      stack.push(child);
    }
  }
  return null;
}

if (require.main === module) {
  const fruit = process.argv[2] || 'mango';
  const tree = buildFruitTree();
  const found = findFruit(tree, fruit);
  if (found) {
    console.log(`Found ${fruit}`);
  } else {
    console.log(`${fruit} not found`);
  }
}

module.exports = { Tree, buildFruitTree, findFruit };
