window.addEventListener('DOMContentLoaded', () => {


    // Chats lsist Start
    const programmingQuestions = [
        "How do I improve the performance of a JavaScript application?",
        "What are the best practices for error handling in TypeScript?",
        "Can you explain the difference between `let`, `const`, and `var` in JavaScript?",
        "How does event delegation work in JavaScript?",
        "What is the difference between `undefined` and `null` in JavaScript?",
        "How can I optimize my React components for faster rendering?",
        "What are the key principles of object-oriented programming?",
        "How do I implement authentication in a Node.js application?",
        "What are the pros and cons of using TypeScript over JavaScript?",
        "How does prototypal inheritance work in JavaScript?",
        "How can I handle asynchronous operations using async/await in JavaScript?",
        "What are closures, and how are they used in JavaScript?",
        "What is the purpose of the `useContext` hook in React?",
        "How can I implement memoization to optimize function calls?",
        "What are the differences between `for`, `for...of`, and `forEach` loops in JavaScript?",
        "How do I manage state in large-scale React applications?",
        "Can you explain the differences between REST and GraphQL APIs?",
        "What is the purpose of the `Reducer` function in Redux?",
        "How can I implement lazy loading for components in a web app?",
        "What are some advanced techniques for securing web applications?",
        "What is the difference between `undefined` and `null` in JavaScript?",
        "How can I optimize my React components for faster rendering?",
        "What are the key principles of object-oriented programming?",
        "How do I implement authentication in a Node.js application?",
        "What are the pros and cons of using TypeScript over JavaScript?",
        "How does prototypal inheritance work in JavaScript?",
        "How can I handle asynchronous operations using async/await in JavaScript?"
    ];

    const sideBar = document.querySelector<HTMLDivElement>('#side-bar')
    const sideBarFragment = document.createDocumentFragment();

    for (let index: number = 0; index < programmingQuestions.length; index++) {

        const div = document.createElement('div');
        div.classList.add('p-1.5', 'rounded-[0.210rem]', 'cursor-pointer');
        div.classList.add('hover:bg-[#ececec]')

        const p = document.createElement('p');
        p.classList.add('truncate');
        p.textContent = programmingQuestions[index];

        div.appendChild(p)
        sideBarFragment.appendChild(div)
        sideBar?.appendChild(sideBarFragment)
    };
    // Chats lists end




    // Toggle Show/Hide Chats Lists Start
    const toggleChats = document.querySelectorAll<HTMLButtonElement>('.toggle-chat');
    const asideEl = document.querySelector<HTMLElement>('aside');
    const hideOpenChat2ndBtn = document.querySelector<HTMLButtonElement>('.hide-open-chat-2nd-btn');

    toggleChats.forEach((toggler) => {
        toggler.addEventListener('click', () => {
            asideEl?.classList.toggle('open-chat');
            hideOpenChat2ndBtn?.classList.toggle('hide-open-chat-2nd-btn');
        });
    });
    // Toggle Show/Hide Chats Lists // end






    // input value check // start
    const promptInput = document.querySelector<HTMLInputElement>('#prompt-input');
    const promptInputSendBtn = document.querySelector<HTMLButtonElement>('#prompt-input-send-btn')

    promptInput?.addEventListener('input', () => {
        if (promptInput.value) promptInputSendBtn?.classList.remove('opacity-20', 'cursor-default')
        else promptInputSendBtn?.classList.add('opacity-20', 'cursor-default')

    })
    // input value check // end







    // conversations // start
    const conversations = [
        {
            user: "Hello There Hello There Hello There Hello There Hello There",
        },
        {
            bot: "I'd be happy to help. What issue are you facing?"
        },
        {
            user: "I get a 'null reference' error when trying to access a property of an object.",
        },
        {
            bot: "It seems like 'data' might be null or undefined at the time you are trying to access 'value'. You can add a check: if (data) { const result = data.value; }."
        },
        {
            user: "Oh, that makes sense! I’ll try adding that check.",
        },
        {
            bot: "You're welcome! I'm glad I could help. Do you have any other questions?"
        },
        {
            user: "Yes, actually. Can you explain closures in JavaScript?",
        },
        {
            bot: "Sure! Here's an example: \nfunction outer() {\n let counter = 0;\n function inner() {\n counter++;\n return counter;\n }\n return inner;\n}\nconst increment = outer();\nincrement(); // 1\nincrement(); // 2"
        },
        {
            user: "Ah, I see! The inner function still has access to the 'counter' variable even after 'outer' has finished executing.",
        },
        {
            user: "Thanks for the clarification. I have another question: What’s the difference between 'let' and 'var'?",
        },
        {
            bot: "Yes, using 'var' can lead to unexpected behavior, especially in loops or larger codebases where variable re-declaration or hoisting might cause bugs. 'let' and 'const' are generally safer choices."
        },
        {
            user: "I understand. I’ll use 'let' from now on. What’s 'const' for?",
        },
        {
            bot: "Exactly! 'const' helps prevent accidental reassignment but allows modification of object or array contents."
        }


    ];

    const chatConversations = document.querySelector<HTMLDivElement>('#conversations');
    const conversationFragment = document.createDocumentFragment();

    for (const conversation of conversations) {

        const divEl = document.createElement('div');
        const childDivEl = document.createElement('div');
        const pEl = document.createElement('p');

        if (conversation.user) {
            divEl.classList.add('flex', 'w-full', 'justify-end', 'h-fit', 'mt-3');

            childDivEl.classList.add('p-3', 'rounded-md');
            childDivEl.classList.add('max-w-[70%]', 'bg-[#f9f9f9]');

            pEl.textContent = conversation.user

            chatConversations?.appendChild(conversationFragment)
            conversationFragment.appendChild(divEl);
            divEl.appendChild(childDivEl)
            childDivEl.appendChild(pEl)
        }

        if (conversation.bot) {
            const imgElParentDiv = document.createElement('div');
            const imgEl = document.createElement('img');

            divEl.classList.add('flex', 'flex-col', 'w-full', 'justify-start', 'h-fit');

            imgElParentDiv.classList.add('rounded-full', 'border', 'p-1', 'w-fit', 'h-fit');

            imgEl.setAttribute('src', '/VOID.jpg');
            imgEl.setAttribute('alt', 'Logo image');
            imgEl.classList.add('w-[1.3rem]');
            imgEl.classList.add('rounded-full');

            childDivEl.classList.add('max-w-[70%]');
            childDivEl.classList.add('p-3', 'rounded-md');

            pEl.textContent = conversation.bot

            chatConversations?.appendChild(conversationFragment)
            conversationFragment.appendChild(divEl);

            divEl.appendChild(imgElParentDiv)
            imgElParentDiv.appendChild(imgEl)

            divEl.appendChild(childDivEl)
            childDivEl.appendChild(pEl)
        }

    };
    // conversations // end




    

    // Scroll to the end of the chats when page loads // start
    let scrollToTheEndOfChatContainer = document.getElementById('end');
    // setTimeout(() => {
    scrollToTheEndOfChatContainer?.scrollIntoView({ behavior: 'smooth' });
    // }, 1000);
    // Scroll to the end of the chats when page loads // end


});