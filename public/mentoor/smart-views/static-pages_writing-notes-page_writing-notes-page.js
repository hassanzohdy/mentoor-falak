_Component({
                selector: 'writing-notes-page',
                c: 'WritingNotesPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {ctsck1pSr:'layout'},
                render: function (component) {
                    let cmp2e3H = this._lc('ctsck1pSr', {parent:component,content:(layout) => {let elWUEu_ = eo('h1');
text(`Writing notes`);
ec('h1');
let elbqUzZ = eo('p',null,null,`class`,`m-v-1`);
text(`So, here are some notes to take care of when you write an answer or an article in general.`);
ec('p');
let elvwLh8 = eo('ol');
let elL9J7y = eo('li');
text(`Capitalize the first letter of every new statement.`);
ec('li');
let elqFbOc = eo('li');
text(`Don't forget to use`);
let elQjJan = eo('strong');
text(`Punctuation`);
ec('strong');
text(`in your article, like for example, adding`);
let eleT_Od = eo('code');
text(`.`);
ec('code');
text(`or`);
let eltJKnF = eo('code');
text(`?`);
ec('code');
text(`at the end of the sentence.`);
ec('li');
let elQROJN = eo('li');
text(`When you write a code, put it inside a code block, and define what programming language your code is in if you're writing in`);
let elOpUOk = eo('a',null,null,`href`,`/academy/programming-basics`);
text(`Programming Basics track`);
ec('a');
text(`or any general track.`);
ec('li');
let elLImkH = eo('li');
text(`Make your article simple, clear and well-organized.`);
ec('li');
let el0BFhy = eo('li');
text(`Put references at the end of your answer for more details.`);
ec('li');
let elaixof = eo('li');
let elhGYtC = eo('strong');
text(`Test`);
ec('strong');
text(`any code you write before posting it.`);
ec('li');
let elb5wMc = eo('li');
text(`Double check your answer before submitting it.`);
ec('li');
let elT2J6H = eo('li');
text(`Search before answering even if you know the answer, you'll learn new things.`);
ec('li');
let elqz_cR = eo('li');
text(`Write with your own words based on your own understanding.`);
ec('li');
let el9iVMh = eo('li');
text(`When you read from external references, beside reading and understanding the content of the article, observe how they organize and write down the article to learn from it.`);
ec('li');
ec('ol');
}});

                    this.isReadyToGo();
                }
        });