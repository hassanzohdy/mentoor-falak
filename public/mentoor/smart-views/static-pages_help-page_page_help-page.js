_Component({
                selector: 'help-page',
                c: 'HelpPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','purchasableItems'],
                children: {c5ywf5KL_:'flk-youtube-video',cjMYV6RAc:'gold-icon',cluRo91pD:'layout'},
                render: function (component) {
                    let cmphrlP = this._lc('cluRo91pD', {parent:component,content:(layout) => {let elc_RdL = eo('section',null,null,`class`,`welcomeTxt mb-5`);
let el3m4hE = eo('h2',null,null,`class`,``);
text(`Welcome`);
let elNKPUG = eo('span',null,null,`class`,`bold mr-2 ml-2 text-capitalize d-inline-block`);
text(component.user.name || '');
ec('span');
text(`to
            Mentoor
            Application`);
ec('h2');
ec('section');
let eluu8gq = eo('div',null,null,`class`,`row`);
let elWjCF4 = eo('div',null,null,`class`,`col-sm-9`);
let elt_QtI = eo('section',null,null,`class`,`font-weight-normal m-b-2`);
let elDBnVC = eo('h3',null,null,`class`,`bold m-b-1`);
text(`What is mentoor`);
ec('h3');
let eliEfyz = eo('p');
text(`Mentoor mainly focuses on sharing knowledge between participants.`);
ec('p');
let elWXSMD = eo('p');
text(`The application has tracks list, but with a different approach than other tracks.`);
ec('p');
let elGxUs6 = eo('p');
text(`Instead of one person creates a track with certain topics, all users can write in that topic so more knowledge
        is acquired.`);
ec('p');
let elaBkM6 = eo('p');
text(`For full details in depth, have a look at the following guide video.`);
ec('p');
let cmp5TGN = this._lc('c5ywf5KL_', {parent:component,parentTop:layout,props:{src:'https://www.youtube.com/embed/hwR9yZfZ70k'},attrs:{src:`${'https://www.youtube.com/embed/hwR9yZfZ70k'}`},style:{width:560,height:315}});
ec('section');
let eltEylV = eo('section',null,null,`class`,`font-weight-normal m-y-4`);
let elKME2l = eo('h3',null,null,`class`,`bold m-b-1`);
text(`Why mentoor`);
ec('h3');
let elZ3Ubw = eo('p');
text(`Let's see what you will get from being a mentoor member.`);
ec('p');
let elsDJPt = eo('ul');
let el8wWWm = eo('li');
text(`You'll learn`);
let elLOC_d = eo('strong',null,null,`class`,`bold mx-2`);
text(`from others.`);
ec('strong');
ec('li');
let elqm_lB = eo('li');
text(`You'll`);
let elK8_Ok = eo('strong',null,null,`class`,`bold mx-2`);
text(`help others!`);
ec('strong');
ec('li');
let elcLYFn = eo('li');
text(`You'll learn how to`);
let ellaZA9 = eo('strong',null,null,`class`,`bold mx-2`);
text(`search`);
ec('strong');
text(`.`);
ec('li');
let elhZTn2 = eo('li');
text(`You'll learn how to`);
let elOP4bT = eo('strong',null,null,`class`,`bold mx-2`);
text(`write`);
ec('strong');
text(`code properly.`);
ec('li');
let elLYgc0 = eo('li');
text(`You'll learn how to`);
let eln4e9T = eo('strong',null,null,`class`,`bold mx-2`);
text(`write`);
ec('strong');
text(`English properly.`);
ec('li');
let elr7xQJ = eo('li');
text(`You'll learn how to`);
let elV5C6m = eo('strong',null,null,`class`,`bold mx-2`);
text(`write documentation`);
ec('strong');
text(`properly.`);
ec('li');
let elJqShQ = eo('li');
text(`You'll learn how to`);
let elckI8o = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`refactor`);
ec('strong');
text(`your code properly.`);
ec('li');
let elaoVaf = eo('li');
text(`You'll learn how to`);
let elcCK4k = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`enhance your search skills.`);
ec('strong');
ec('li');
let elwAsUr = eo('li');
text(`You'll learn how to`);
let el35YjE = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`be a teamwork player properly.`);
ec('strong');
ec('li');
let eloTH8W = eo('li');
text(`You'll learn how to`);
let elbXxhg = eo('strong',null,null,`class`,`bold mx-2`);
text(`organize`);
ec('strong');
text(`your code properly.`);
ec('li');
let elz2lq5 = eo('li');
text(`You'll learn how to`);
let eluUaea = eo('strong',null,null,`class`,`bold mx-2`);
text(`share`);
ec('strong');
text(`information with others.`);
ec('li');
let ely1WWV = eo('li');
text(`You'll learn`);
let elWbj2_ = eo('strong',null,null,`class`,`bold mx-2`);
text(`new things`);
ec('strong');
text(`that you don't even know it's existing!`);
ec('li');
let el_1sDX = eo('li');
text(`You'll`);
let elDQ0X1 = eo('strong',null,null,`class`,`bold mx-2`);
text(`get challenged`);
ec('strong');
text(`with things you barely know how to use it!`);
ec('li');
let elfoCYm = eo('li');
text(`You'll`);
let el2kT4N = eo('strong',null,null,`class`,`bold mx-2`);
text(`be on a certain learning track`);
ec('strong');
text(`thus you'll not get lost in the middle of the road!`);
ec('li');
let elHorvO = eo('li');
text(`You'll`);
let elqo551 = eo('strong',null,null,`class`,`bold mx-2 blue-text`);
text(`be guided`);
ec('strong');
text(`by a mentoor who will review and refine your answers and code!`);
ec('li');
let elXmx88 = eo('li');
text(`You'll`);
let elT_8t4 = eo('strong',null,null,`class`,`bold mx-2 blue-text`);
text(`earn real money and other cool rewards!`);
ec('strong');
ec('li');
ec('ul');
ec('section');
let el9vwYp = eo('section',null,null,`class`,`font-weight-normal`);
let elQswf7 = eo('h3',null,null,`class`,`bold m-b-1`);
text(`How it works`);
ec('h3');
let el1ELUd = eo('p');
text(`This application was designed to make you help and get help from/to other people instead of just asking.`);
ec('p');
let elxIJ9q = eo('p');
text(`You share your knowledge here by answering`);
let elPSd6H = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`quests in the academy`);
ec('a');
text(`.`);
ec('p');
let elJxLUP = eo('p');
text(`Also you'll see how other people think about same subject and gain from their experience regarding certain
        topics.`);
ec('p');
ec('section');
let elk0Kps = eo('section',null,null,`class`,`font-weight-normal`);
let elkOK2O = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`What you should know before getting started.`);
ec('h3');
let eluRZ8c = eo('p');
let elwhglr = eo('strong',null,null,`class`,`mr-2`);
text(`Markdown`);
ec('strong');
text(`syntax is your mate here, you should know how to write markdown syntax so your answers
        become more organized.`);
ec('p');
let elCSN2H = eo('p');
let elJ5QVt = eo('a',null,null,`class`,`bold teal-text m-r-1`,`target`,`_blank`,`href`,`https://guides.github.com/features/mastering-markdown/`);
text(`Mastering
            markdown`);
ec('a');
text(`is a great article to kick off with.`);
ec('p');
let elPVh9R = eo('p');
text(`Don't forget to read about`);
let elDGOFi = eo('a',null,null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing notes`);
ec('a');
text(`before starting the quest.`);
ec('p');
ec('section');
let elx1bM5 = eo('section',null,null,`class`,`font-weight-normal`);
let elMS6Hx = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`Where to start from`);
ec('h3');
let elijMz4 = eo('p');
text(`First and foremost, you should be dealing with`);
let elvXwYe = eo('a',null,null,`href`,`/academy/programming-basics`,`class`,`mx-2 bold`);
text(`Programming Basics (PB)`);
ec('a');
text(`track, either you're already familiar with programming basics or you're a fresh one.`);
ec('p');
let elleQ4J = eo('p');
text(`But why should i start with it even if i already know the basics?`);
ec('p');
let elGnITS = eo('p');
text(`Actually you'll get surprised that you really don't know it as you think!`);
ec('p');
let el6HdNg = eo('p');
text(`You'll read again about everything in that track with a good eye this time, but also you'll search in depth to see more details about it, why?....Because you'll write about it in details`);
let elq0MUd = eo('strong',null,null,`class`,`mx-2 purple-text`);
text(`using your own words and understanding of the topic`);
ec('strong');
text(`so you need to read with bigger focus this time.`);
ec('p');
let elvLTgL = eo('p');
text(`Also, you should be aware of the`);
let ellYAUs = eo('strong',null,null,`class`,`mx-2`);
text(`Markdown syntax`);
ec('strong');
text(`as was illustrated earlier, you'll need to know it because all of your answer must be written in that format.`);
ec('p');
ec('section');
let elqbgdq = eo('section',null,null,`class`,`font-weight-normal`);
let el39c7n = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`How to obtain gold`);
ec('h3');
let el61ZhT = eo('p');
text(`You can get gold by the following:`);
ec('p');
let elrx44P = eo('ul');
let elPDBj3 = eo('li');
text(`Answering topics in`);
let elZeFIJ = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`Academy`);
ec('a');
text(`.`);
ec('li');
let elYM7NI = eo('li');
text(`Solving puzzles in`);
let elvIM1t = eo('a',null,null,`href`,`/einstein-chamber`,`class`,`bold m-l-1`);
text(`Einstein Chamber`);
ec('a');
text(`.`);
ec('li');
let elmwZjm = eo('li');
let el2quc_ = eo('a',null,null,`href`,`/affiliate`,`class`,`bold`);
el2quc_.cls = {'green-text': component.user.invitationCode, 'orange-text': ! component.user.invitationCode};

            for (let className in el2quc_.cls) {
                el2quc_.classList.toggle(className, el2quc_.cls[className]);
            }  
            text(`Affiliate Program.`);
ec('a');
let cnd89hM = ! component.user.invitationCode;
this.setState('stJ79A2', cnd89hM);
if (cnd89hM) { 
let elKkjlY = eo('i','kShf',null,`class`,`${fas('lock') + ' lock-icon mx-2 icon'}`);
ec('i');
let elFgnLS = eo('strong','8qIf',null,`class`,`red-text`);
text(`(Unlocked when you get 10 approved answers)`);
ec('strong');
}ec('li');
let elZpg2u = eo('li');
text(`Suggesting topics in`);
let elujBsE = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`tracks`);
ec('a');
text(`.`);
ec('li');
ec('ul');
ec('section');
let elhyZoi = eo('section',null,null,`class`,`font-weight-normal`);
let elnk5nt = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`What can you buy with gold`);
ec('h3');
let elk1A0X = eo('p');
text(`You can obtain any of the following for gold:`);
ec('p');
let eloZnLM = eo('table',null,null,`class`,`table table-bordered table-striped`);
let elQsByn = eo('thead');
let eliW2S2 = eo('tr');
let elamM2w = eo('th');
text(`Price`);
ec('th');
let elatQoF = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let elrPyVN = eo('tbody');
for (let i in component.purchasableItems) {
let item = component.purchasableItems[i]; 
 let iiUVHs = '15RPvEv' + i;
let elh71b2 = eo('tr','v541ciQxHZH3' + i+iiUVHs);
let elTLOCj = eo('td','KV4ff'+iiUVHs,null,`class`,`bold`);
let cndRr8T = Is.null(item.price);
this.setState('stK7WpB', cndRr8T);
let cndZreB = !(cndRr8T);
this.setState('stCL7F2', cndZreB);
if (cndRr8T) { 
text(`?`);
}else { 
text( Number(item.price).format() );
}let cmpIW4S = this._lc('cjMYV6RAc', {parent:component,parentTop:layout,insideLoop:true,index:"" +iiUVHs});
ec('td');
let elPcqOM = eo('td','FBWff'+iiUVHs,null,`class`,`font-weight-normal`);
text(item.description);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('section');
let elMfbnt = eo('p',null,null,`class`,`bold pink-text`);
text(`Please note this page could be changed anytime without prior notifications.`);
ec('p');
ec('div');
console.log(component.user.isLoggedIn());
let cndDKX4 = component.user.isLoggedIn();
this.setState('st68bgo', cndDKX4);
if (cndDKX4) { 
let eliAMVL = eo('div','01Jf',null,`class`,`col`);
let el5DW2_ = eo('div','iFTf',null,`class`,`simple-card text-center`);
let elvMRZx = eo('a','L8Sf',null,`href`,`/me`,`class`,`btn bold btn-pink`);
let elJihLS = eo('i','h3cf',null,`class`,`${fas('user') + ' mr-2 icon'}`);
ec('i');
text(`Update my Profile`);
ec('a');
ec('div');
ec('div');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });