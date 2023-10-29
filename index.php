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
    <h1>JavaScript Cheatsheet </h1>
    <h2>by Enri</h2>
</header>

<main>
<div class="table-container table-center">
    <table class="outer-border">
        <tr class="color-title"><td><h3>Array</h3></td></tr>
        <tr class="color-title2"><td class="function-name">Create array</td></tr>
        
        <tr>
            <td>
            <pre><code class="language-javascript">
let myArray = ["Mr. White", "Mr. Orange", "Mr. Blonde", 
    "Mr. Pink", "Mr. Blue", "Mr. Brown"];
            </code></pre>
            </td>
        </tr>
        <tr class="color-title2"><td class="function-name">Loop</td></tr>
        
        <tr>
            <td>
            <pre><code class="language-javascript">
for (let name of myArray) {
    if (name === "Mr. Pink") {
        console.log("Encountered Mr. Pink. Breaking loop.");
        break; // Exit the loop when "Mr. Pink" is found
    }  
}
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Add element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
let newArray = [...myArray, "Nice Guy"];
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Remove element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
let newArray2 = myArray.filter(name => name !== "Nice Guy");
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Check existence</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
newArray2.includes("Nice Guy");
            </code></pre>
            </td>
        </tr>
    </table>

    <table class="outer-border">
        <tr class="color-title"><td><h3>List</h3></td></tr>
        <tr class="color-title2"><td class="function-name">Create a list</td></tr>
        
        <tr>
            <td>
            <pre><code class="language-javascript">
let myList = [1, 2, 3];
            </code></pre>
            </td>
        </tr>
        <tr class="color-title2"><td class="function-name">Remove</td></tr>
        
        <tr>
            <td>
            <pre><code class="language-javascript">
myList = myList.filter(item => item !== 2);
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Loop</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
for (let item of myList) {
    console.log(item);
}
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Check existence</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
myList.includes(3);
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Get an element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
let index = 1; // Index of element to get
let element = myList[index];
            </code></pre>
            </td>
        </tr>
    </table>

    <table class="outer-border">
        <tr class="color-title"><td><h3>Dictionary</h3></td></tr>
        <tr class="color-title2"><td class="function-name">Create a dictionary</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    const myDictionary = {
        key1: 'value1',
        key2: 'value2',
    };
            </code></pre>
            </td>
        </tr>
        <tr class="color-title2"><td class="function-name">Remove a key</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    delete myDictionary.key1;
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Loop through keys and values</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    for (const key in myDictionary) {
        const value = myDictionary[key];
        console.log(key, value);
    }
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Check key existence</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const keyExists = 'key2' in myDictionary;
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Get a value by key</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const value = myDictionary.key2;
            </code></pre>
            </td>
        </tr>
    </table>

    <table class="outer-border">
        <tr class="color-title"><td><h3>Queue</h3></td></tr>
        <tr class="color-title2"><td class="function-name">Create a Queue</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    const queue = [];
            </code></pre>
            </td>
        </tr>
        <tr class="color-title2"><td class="function-name">Enqueue (Add) an Element</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    queue.push('element');
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Dequeue (Remove) an Element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const removedElement = queue.shift();
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class "function-name">Peek (Get First) Element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const firstElement = queue[0];
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Check if Queue is Empty</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const isEmpty = queue.length === 0;
            </code></pre>
            </td>
        </tr>
    </table>

    <table class="outer-border">
        <tr class="color-title"><td><h3>Stack</h3></td></tr>
        <tr class="color-title2"><td class="function-name">Create a Stack</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    const stack = [];
            </code></pre>
            </td>
        </tr>
        <tr class="color-title2"><td class="function-name">Push (Add) an Element</td></tr>
    
        <tr>
            <td>
            <pre><code class="language-javascript">
    stack.push('element');
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Pop (Remove) an Element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const removedElement = stack.pop();
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Peek (Get Top) Element</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const topElement = stack[stack.length - 1];
            </code></pre>
            </td>
        </tr>

        <tr class="color-title2"><td class="function-name">Check if Stack is Empty</td></tr>
        <tr>
            <td>
            <pre><code class="language-javascript">
    const isEmpty = stack.length === 0;
            </code></pre>
            </td>
        </tr>
    </table>
</div>
</main>
</body>
</html>

        <!-- Add more rows for dictionary -->
