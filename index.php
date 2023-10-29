<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSCheatsheet</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css">
    <script src="https://cdn.jsdelivr.net/npm/prismjs/prism.js"></script>
</head>

<body>

<header>
    <h1>JavaScript Cheatsheet</h1>
    <h2>by Enri</h2>
</header>

<main>
<div class="table-container table-center">
    <?php
    $sections = [
        [
            "Array",
            [
                ["Create array", 'let myArray = ["Mr. White", "Mr. Orange", "Mr. Blonde", "Mr. Pink", "Mr. Blue", "Mr. Brown"];'],
                ["Loop", 'for (let name of myArray) { if (name === "Mr. Pink") { console.log("Encountered Mr. Pink. Breaking loop."); break; } }'],
                ["Add element", 'let newArray = [...myArray, "Nice Guy"];'],
                ["Remove element", 'let newArray2 = myArray.filter(name => name !== "Nice Guy");'],
                ["Check existence", 'newArray2.includes("Nice Guy");'],
            ],
        ],
        [
            "List",
            [
                ["Create a list", 'let myList = [1, 2, 3];'],
                ["Remove", 'myList = myList.filter(item => item !== 2);'],
                ["Loop", 'for (let item of myList) { console.log(item); }'],
                ["Check existence", 'myList.includes(3);'],
                ["Get an element", 'let index = 1; let element = myList[index];'],
            ],
        ],
        [
            "Dictionary",
            [
                ["Create a dictionary", 'const myDictionary = { key1: "value1", key2: "value2" };'],
                ["Remove a key", 'delete myDictionary.key1;'],
                ["Loop through keys and values", 'for (const key in myDictionary) { const value = myDictionary[key]; console.log(key, value); }'],
                ["Check key existence", 'const keyExists = "key2" in myDictionary;'],
                ["Get a value by key", 'const value = myDictionary.key2;'],
            ],
        ],
        [
            "Queue",
            [
                ["Create a Queue", 'const queue = [];'],
                ["Enqueue (Add) an Element", 'queue.push("element");'],
                ["Dequeue (Remove) an Element", 'const removedElement = queue.shift();'],
                ["Peek (Get First) Element", 'const firstElement = queue[0];'],
                ["Check if Queue is Empty", 'const isEmpty = queue.length === 0;'],
            ],
        ],
        [
            "Stack",
            [
                ["Create a Stack", 'const stack = [];'],
                ["Push (Add) an Element", 'stack.push("element");'],
                ["Pop (Remove) an Element", 'const removedElement = stack.pop();'],
                ["Peek (Get Top) Element", 'const topElement = stack[stack.length - 1];'],
                ["Check if Stack is Empty", 'const isEmpty = stack.length === 0;'],
            ],
        ],
    ];

    // Loop through sections and generate HTML
    foreach ($sections as $section) {
        echo '<table class="outer-border">';
        echo '<tr class="color-title"><td><h3>' . $section[0] . '</h3></td></tr>';

        foreach ($section[1] as $item) {
            echo '<tr class="color-title2"><td class="function-name">' . $item[0] . '</td></tr>';
            echo '<tr><td><pre><code class="language-javascript">' . $item[1] . '</code></pre></td></tr>';
        }

        echo '</table>';
    }
    ?>
</div>
</main>
</body>
</html>
