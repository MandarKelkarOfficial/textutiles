# TextUtil

TextUtil is a powerful text manipulation tool built with React. This application allows users to perform various text transformations and analyses, such as converting text to uppercase or lowercase, counting words and characters, and more.

![TextUtil App](/src/img/app.png)
*Figure 1: TextUtil App Interface*

![TextUtil App Dark Mode](/src/img/dmApp.png)
*Figure 2: TextUtil App Interface Dark Mode*

## Features

- Convert text to uppercase

![Mode](/src/img/up.png)
*Upper Case*

- Convert text to lowercase

![Mode](/src/img/lw.png)
*Lower Case*

- Count words and characters

![Mode](/src/img/sum.png)
*Summery*

- Remove extra spaces
- Copy text to clipboard
![Mode](/src/img/copy.png)
*Copy*

## Example Code

Here is a brief explanation of the core functionality implemented in the TextUtil app:

```javascript
import React, { useState } from 'react';

function TextUtil() {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    }

    return (
        <div className="container">
            <h1>TextUtil - Text Manipulation Tool</h1>
            <textarea value={text} onChange={handleOnChange} rows="8" className="form-control"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3" onClick={handleLowerCase}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    );
}

export default TextUtil;
```

### Explanation

1. **State Management:** The `text` state is managed using the `useState` hook to store and update the current text.
2. **Event Handlers:** 
    - `handleUpperCase` converts the text to uppercase.
    - `handleLowerCase` converts the text to lowercase.
    - `handleOnChange` updates the `text` state with the user's input.
    - `handleCopy` copies the current text to the clipboard.
    - `handleExtraSpaces` removes extra spaces from the text.
3. **Rendering:** The component renders a textarea for user input and buttons for performing various text transformations.

## Setup Instructions

To set up the TextUtil project on your local machine, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/textutil.git
    cd textutil
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Development Server:**
    ```bash
    npm start
    ```

4. **Access the Application:**
    Open your browser and navigate to `http://localhost:3000` to use the TextUtil app.


## Further Help

For more help on React and creating similar applications, refer to the [React documentation](https://reactjs.org/docs/getting-started.html). If you have any questions or need additional assistance, feel free to open an issue in the repository or contact the project maintainers.

---

By following these instructions, you can set up and start using the TextUtil app to manipulate and analyze text with ease. Enjoy transforming your text with TextUtil!