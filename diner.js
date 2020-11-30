const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startDiner () {
    state = {}
    showTextNode(1)

};

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }

const textNodes = [
    {
        id: 1,
        text: "Waitress: 'Welcome to the diner! What would you like to eat?",
        options: [
            {
                text: 'Hamburger',
                setState: { hamburger: true},
                nextText: 2
            },
            {
                text: 'Hotdog',
                setState: { hotdog: true},
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "Waitress: 'Great choice! Our hamburger is excellent, and only costs $2. Now which side would you like?'",
        options: [
            {
                text: 'Fries',
                setState: { fries:true},
                nextText: 4
            },
            {
                text: 'Salad',
                setState: { salad:true},
                nextText: 6
            }
        ]
    },
    {
        id: 3,
        text: "Waitress: 'Good choice. We will get that hot dog cooked for you right away. It only costs a dollar. Now which side would you like?'",
        options: [
            {
                text: 'Fries',
                setState: { fries:true},
                nextText: 4
            },
            {
                text: 'Salad',
                setState: { salad:true},
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: "'Waitress: 'Great choice, those fries will go great with your entree. That adds another dollar to your total.'",
        options: [
            {
                text: 'Checkout',
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: "Waitress: 'Good choice, that salad will go well with your entree. That adds another $2 to your total.'",
        options: [
            {
                text: 'Checkout',
                nextText: 7
            }
        ]
    },
    {
        id: 6,
        text: "Waitress: 'Good choice, that salad will go well with your entree. That adds another $2 to your total.'",
        options: [
            {
                text: 'Checkout',
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "Your total is $4."

    },

    {
        id: 7,
        text: "Your total is $3."

    },
    {
        id: 8,
        text: "Your total is $4."

    }
        
]



startDiner();
