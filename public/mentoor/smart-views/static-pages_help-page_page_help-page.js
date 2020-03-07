_Component({
                selector: 'help-page',
                c: 'HelpPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','purchasableItems'],
                children: {cNqErSLeM:'flk-youtube-video',cC0sv81Vc:'gold-icon',cC_DMIS6p:'layout'},
                render: function (component) {
                    let cmpnk3D = this._lc('cC_DMIS6p', {parent:component,content:(layout) => {let elEgB67 = eo('section',null,null,`class`,`welcomeTxt mb-5`);
let elDZkrS = eo('h2',null,null,`class`,``);
text(`Welcome`);
let elOHIEe = eo('span',null,null,`class`,`bold mr-2 ml-2 text-capitalize d-inline-block`);
text(component.user.name || '');
ec('span');
text(`to
            Mentoor
            Application`);
ec('h2');
ec('section');
let elhaq6I = eo('div',null,null,`class`,`row`);
let elEUkMQ = eo('div',null,null,`class`,`col-sm-9`);
let elKCpYZ = eo('section',null,null,`class`,`font-weight-normal m-b-2`);
let eltbN6a = eo('h3',null,null,`class`,`bold m-b-1`);
text(`What is mentoor`);
ec('h3');
let el8eNoi = eo('p');
text(`Mentoor mainly focuses on sharing knowledge between participants.`);
ec('p');
let elmb9CU = eo('p');
text(`The application has tracks list, but with a different approach than other tracks.`);
ec('p');
let eloguMr = eo('p');
text(`Instead of one person creates a track with certain topics, all users can write in that topic so more knowledge
        is acquired.`);
ec('p');
let elI_aSB = eo('p');
text(`For full details in depth, have a look at the following guide video.`);
ec('p');
let cmpvlme = this._lc('cNqErSLeM', {parent:component,parentTop:layout,props:{src:'https://www.youtube.com/embed/hwR9yZfZ70k'},attrs:{src:`${'https://www.youtube.com/embed/hwR9yZfZ70k'}`,width:560,height:315}});
ec('section');
let elZpvav = eo('section',null,null,`class`,`font-weight-normal m-y-4`);
let el05RFX = eo('h3',null,null,`class`,`bold m-b-1`);
text(`Why mentoor`);
ec('h3');
let elc3Mtr = eo('p');
text(`Let's see what you will get from being a mentoor member.`);
ec('p');
let elUGV4F = eo('ul');
let elS0xBd = eo('li');
text(`You'll learn`);
let elunFYj = eo('strong',null,null,`class`,`bold mx-2`);
text(`from others.`);
ec('strong');
ec('li');
let ely6ZcQ = eo('li');
text(`You'll`);
let elarL3u = eo('strong',null,null,`class`,`bold mx-2`);
text(`help others!`);
ec('strong');
ec('li');
let eldnlSi = eo('li');
text(`You'll learn how to`);
let elvjJKk = eo('strong',null,null,`class`,`bold mx-2`);
text(`search`);
ec('strong');
text(`.`);
ec('li');
let elmrIMW = eo('li');
text(`You'll learn how to`);
let eldUi51 = eo('strong',null,null,`class`,`bold mx-2`);
text(`write`);
ec('strong');
text(`code properly.`);
ec('li');
let elyTNRW = eo('li');
text(`You'll learn how to`);
let el2UXjS = eo('strong',null,null,`class`,`bold mx-2`);
text(`write`);
ec('strong');
text(`English properly.`);
ec('li');
let el_KHrf = eo('li');
text(`You'll learn how to`);
let el5cpCd = eo('strong',null,null,`class`,`bold mx-2`);
text(`write documentation`);
ec('strong');
text(`properly.`);
ec('li');
let eltixvM = eo('li');
text(`You'll learn how to`);
let ellrGtk = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`refactor`);
ec('strong');
text(`your code properly.`);
ec('li');
let elgUjah = eo('li');
text(`You'll learn how to`);
let elqJ9hR = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`enhance your search skills.`);
ec('strong');
ec('li');
let elCevEa = eo('li');
text(`You'll learn how to`);
let elgfp1h = eo('strong',null,null,`class`,`bold mx-2 green-text`);
text(`be a teamwork player properly.`);
ec('strong');
ec('li');
let elVyOaB = eo('li');
text(`You'll learn how to`);
let eleJ7Lx = eo('strong',null,null,`class`,`bold mx-2`);
text(`organize`);
ec('strong');
text(`your code properly.`);
ec('li');
let elcwgMs = eo('li');
text(`You'll learn how to`);
let elifjp5 = eo('strong',null,null,`class`,`bold mx-2`);
text(`share`);
ec('strong');
text(`information with others.`);
ec('li');
let elBJcoQ = eo('li');
text(`You'll learn`);
let elFNpzT = eo('strong',null,null,`class`,`bold mx-2`);
text(`new things`);
ec('strong');
text(`that you don't even know it's existing!`);
ec('li');
let el8ZDhT = eo('li');
text(`You'll`);
let el7Ul1Y = eo('strong',null,null,`class`,`bold mx-2`);
text(`get challenged`);
ec('strong');
text(`with things you barely know how to use it!`);
ec('li');
let elmeMHr = eo('li');
text(`You'll`);
let elNiYZf = eo('strong',null,null,`class`,`bold mx-2`);
text(`be on a certain learning track`);
ec('strong');
text(`thus you'll not get lost in the middle of the road!`);
ec('li');
let elQPxLl = eo('li');
text(`You'll`);
let elod5dF = eo('strong',null,null,`class`,`bold mx-2 blue-text`);
text(`be guided`);
ec('strong');
text(`by a mentoor who will review and refine your answers and code!`);
ec('li');
let el1Op1S = eo('li');
text(`You'll`);
let elqvofR = eo('strong',null,null,`class`,`bold mx-2 blue-text`);
text(`earn real money and other cool rewards!`);
ec('strong');
ec('li');
ec('ul');
ec('section');
let elKRPWI = eo('section',null,null,`class`,`font-weight-normal`);
let elXLgsy = eo('h3',null,null,`class`,`bold m-b-1`);
text(`How it works`);
ec('h3');
let elpsUFf = eo('p');
text(`This application was designed to make you help and get help from/to other people instead of just asking.`);
ec('p');
let eliKKfh = eo('p');
text(`You share your knowledge here by answering`);
let elr2gpY = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`quests in the academy`);
ec('a');
text(`.`);
ec('p');
let elzJUYK = eo('p');
text(`Also you'll see how other people think about same subject and gain from their experience regarding certain
        topics.`);
ec('p');
ec('section');
let elrCraM = eo('section',null,null,`class`,`font-weight-normal`);
let el4Y1Y6 = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`What you should know before getting started.`);
ec('h3');
let ell5Y97 = eo('p');
let elbwVaU = eo('strong',null,null,`class`,`mr-2`);
text(`Markdown`);
ec('strong');
text(`syntax is your mate here, you should know how to write markdown syntax so your answers
        become more organized.`);
ec('p');
let elCNqXs = eo('p');
let elJtpPX = eo('a',null,null,`class`,`bold teal-text m-r-1`,`target`,`_blank`,`href`,`https://guides.github.com/features/mastering-markdown/`);
text(`Mastering
            markdown`);
ec('a');
text(`is a great article to kick off with.`);
ec('p');
let elOSq0H = eo('p');
text(`Don't forget to read about`);
let elMN_db = eo('a',null,null,`href`,`/writing-notes`,`class`,`bold mx-2 teal-text`);
text(`writing notes`);
ec('a');
text(`before starting the quest.`);
ec('p');
ec('section');
let el8X_z_ = eo('section',null,null,`class`,`font-weight-normal`);
let eltoxOI = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`Where to start from`);
ec('h3');
let elzqSMs = eo('p');
text(`First and foremost, you should be dealing with`);
let elozQpC = eo('a',null,null,`href`,`/academy/programming-basics`,`class`,`mx-2 bold`);
text(`Programming Basics (PB)`);
ec('a');
text(`track, either you're already familiar with programming basics or you're a fresh one.`);
ec('p');
let elboVYI = eo('p');
text(`But why should i start with it even if i already know the basics?`);
ec('p');
let elzA8Z7 = eo('p');
text(`Actually you'll get surprised that you really don't know it as you think!`);
ec('p');
let el9SLlL = eo('p');
text(`You'll read again about everything in that track with a good eye this time, but also you'll search in depth to see more details about it, why?....Because you'll write about it in details`);
let el1qS1N = eo('strong',null,null,`class`,`mx-2 purple-text`);
text(`using your own words and understanding of the topic`);
ec('strong');
text(`so you need to read with bigger focus this time.`);
ec('p');
let elw9g04 = eo('p');
text(`Also, you should be aware of the`);
let elsoRmo = eo('strong',null,null,`class`,`mx-2`);
text(`Markdown syntax`);
ec('strong');
text(`as was illustrated earlier, you'll need to know it because all of your answer must be written in that format.`);
ec('p');
ec('section');
let elei6tN = eo('section',null,null,`class`,`font-weight-normal`);
let elP00yD = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`How to obtain gold`);
ec('h3');
let elbwzTd = eo('p');
text(`You can get gold by the following:`);
ec('p');
let elUkxTM = eo('ul');
let elj4ZiZ = eo('li');
text(`Answering topics in`);
let elDRILT = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`Academy`);
ec('a');
text(`.`);
ec('li');
let el6C4v1 = eo('li');
text(`Solving puzzles in`);
let el_8Ug6 = eo('a',null,null,`href`,`/einstein-chamber`,`class`,`bold m-l-1`);
text(`Einstein Chamber`);
ec('a');
text(`.`);
ec('li');
let elLsnSV = eo('li');
let elSSncl = eo('a',null,null,`class`,`bold ${cls({'green-text': component.user.invitationCode, 'orange-text': ! component.user.invitationCode})}`,`href`,`/affiliate`);
text(`Affiliate Program.`);
ec('a');
let cnduYVi = ! component.user.invitationCode;
this.setState('stnKdT9', cnduYVi);
if (cnduYVi) { 
let elxPaXQ = eo('i','yPff',null,`class`,`${fas('lock')} lock-icon mx-2 icon`);
ec('i');
let elXmgHt = eo('strong','XXhf',null,`class`,`red-text`);
text(`(Unlocked when you get 10 approved answers)`);
ec('strong');
}ec('li');
let elqRqnk = eo('li');
text(`Suggesting topics in`);
let el9cj1Q = eo('a',null,null,`href`,`/academy`,`class`,`bold m-l-1`);
text(`tracks`);
ec('a');
text(`.`);
ec('li');
ec('ul');
ec('section');
let elOMLsm = eo('section',null,null,`class`,`font-weight-normal`);
let elNqKoM = eo('h3',null,null,`class`,`bold m-b-1 m-t-4`);
text(`What can you buy with gold`);
ec('h3');
let elJp30u = eo('p');
text(`You can obtain any of the following for gold:`);
ec('p');
let el9s_AE = eo('table',null,null,`class`,`table table-bordered table-striped`);
let elJSNWv = eo('thead');
let elJujuZ = eo('tr');
let elOBPdm = eo('th');
text(`Price`);
ec('th');
let elqHc8Y = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let els1A52 = eo('tbody');
for (let i in component.purchasableItems) {
let item = component.purchasableItems[i]; 
 let iiuJb_ = 'PPy1GnT' + i;
let elvbwjS = eo('tr','XhSgeRP9BRvp' + i+iiuJb_);
let elCVC1w = eo('td','k37ff'+iiuJb_,null,`class`,`bold`);
let cndR_or = Is.null(item.price);
this.setState('stgi4fn', cndR_or);
let cndcKKV = !(cndR_or);
this.setState('stvLbKm', cndcKKV);
if (cndR_or) { 
text(`?`);
}else { 
text( Number(item.price).format() );
}let cmpnypl = this._lc('cC0sv81Vc', {parent:component,parentTop:layout,insideLoop:true,index:"" +iiuJb_});
ec('td');
let elPYyMG = eo('td','bsKff'+iiuJb_,null,`class`,`font-weight-normal`);
text(item.description);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
ec('section');
let elEsUGD = eo('p',null,null,`class`,`bold pink-text`);
text(`Please note this page could be changed anytime without prior notifications.`);
ec('p');
ec('div');
console.log(component.user.isLoggedIn());
let cndvICO = component.user.isLoggedIn();
this.setState('stMwg8u', cndvICO);
if (cndvICO) { 
let elA_6bm = eo('div','I9ef',null,`class`,`col`);
let elb2tlQ = eo('div','EATf',null,`class`,`simple-card text-center`);
let elwE7fT = eo('a','yiZf',null,`href`,`/me`,`class`,`btn bold btn-pink`);
let elBkMaU = eo('i','J_Kf',null,`class`,`${fas('user')} mr-2 icon`);
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