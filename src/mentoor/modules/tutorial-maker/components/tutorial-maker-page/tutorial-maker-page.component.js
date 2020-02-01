class TutorialMakerPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.name = 'tutorial-maker';
        this.title = trans('tutorial-maker-page');

        this.hasItems = true;

        this.currentStep = -1;

        this.frame = 500;

        this.currentPage = 1;

        this.texts = {
            1: [
                // {
                //     animation: 'fadeIn',
                //     text: `
                //         - Abstract factory design pattern mainly used to created different types of objects.
                //     `
                // },
                // {
                //     animation: 'fadeInDown',
                //     text: `
                //         - Sometimes called **A factory of factories**
                //     `
                // },
                {
                    animation: 'fadeIn',
                    text: `
                        - So we've an array of integers. 
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                        - We need to see what is the missing number. 
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                        - Now let's write the steps to produce the problem solving. 
                    `
                },
            ],
            2: [
                {
                    animation: 'fadeIn',
                    text: `
                        ## Algorithm Steps 
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                    - Get the number of the first element in the array and set it to a **next number variable**.
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                    - Declare a **missing number** variable with null value.
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                        - Start looping over the numbers
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                    - If the current array element number equals to **next number** then increase the **next number** by **one**.
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                        - Otherwise, assign the **(current array element - 1)** to the missing number variable and break the loop.
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                        - Iterations are completed.
                    `
                },
                {
                    animation: 'fadeIn',
                    text: `
                    - On iteration end, return the missing number variable which will return a number or null value.
                    `
                },
            ],
        };

        let step = 0;

        this.pageStartsAt = {};

        this.finalStep = 0;

        for (let page in this.texts) {
            this.pageStartsAt[step] = Number(page);
            for (let text of this.texts[page]) {
                text.step = step++;
            }

            this.finalStep = step;
        }
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        const present = (increase) => {
            setTimeout(() => {
                if (increase) {
                    this.next();
                } else {
                    this.prev();
                }

                if (this.pageStartsAt[this.currentStep]) {
                    this.currentPage = this.pageStartsAt[this.currentStep];
                } else if (this.finalStep == this.currentStep) {
                    // echo(12)
                    this.currentPage = this.pageStartsAt[this.currentStep] + 1;
                }
            }, this.frame);
        };

        document.addEventListener('keyup', e => {
            // if (this.currentStep > this.texts.length) return;
            if (e.which == 39) {
                present(true);
            } else if (e.which == 37) {
                present(false);
            }
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}