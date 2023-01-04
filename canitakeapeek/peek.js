let wind;
var scene = 0;

// const density2 = "@@%##**+=    .o.";
//where the words live
let m1texs = [
    "winter beach,",
    "dim light raying through the cloud,",
    "the wind keeps my eyes shut,",
    "empty beach,",
    "up-side-down onion-like water tank from far away,",
    "stimulation-ish beach plants kissing the ground,",
    "stacked feet,",
    "orange in the sand.",
];
let m1tex_newS = [];
let num_ = 0;

let m2texs = [
    "an old blue bike,",
    "in the falling leaves,",
    "wind without your smell can't reach me,",
    "narrow path with tall reeds on both sides,",
    "riverside park,",
    "warm sunlight,",
    "horrible biker,",
    "fruit loops in the lawn,",
    "sunflower and a gerbil tomb.",
];
let m2tex_newS = [];

let m3texs = [
    "dark room with the fish tank light on,",
    "very few fish,",
    "hard rocks,",
    "soft water grass",
    "glaring reflection at the liquid surface,",
    "two mushrooms finally hugging,",
    "a star landing quietly and swiftly,",
    "flying tiny summer bugs,",
    "hanging clothing racks.",
];
let m3tex_newS = [];

let m4texs = [
    "big big snow,",
    "blocked blocked road,",
    "not too dark at night,",
    "warm street ight through curtain,",
    "stretched shadow on the wall,",
    "blood circulates at the speed of it evaporating,",
    "infinity ground with whiteness,",
    "two people in t-shirts,",
    "twigs and a hot stew,",
    "cake with jello on top saying goodbye,",
    "snow bunny gazing from a distance.",
];
let m4tex_newS = [];

let m1drags = [];
let sound;

//snow
const snowflakes = [];
const ground = [];
const minSpeed = 0.3;
const maxSpeed = 0.8;

//dragables
//m1
let rectangles = [];
let m1imgs = [];

//m2
let rectangles1 = [];
let m2imgs = [];

//m3
let rectangles2 = [];
let m3imgs = [];

//m4
let rectangles3 = [];
let m4imgs = [];

function preload() {
    wind = loadImage("landing/window.png");
    // m1cloud = loadImage("m1/cloud.png");
    lens = loadImage("m1/lens.png");
    //memory 1
    m1bg = loadImage("m1/bg1.png");
    nex = loadImage("m1/next.png");
    pointer = loadImage("pointer.png");
    own = loadImage("ownit.png");

    //m1dragable imgs
    m1imgs[0] = loadImage("m1imgsss/s0.png");
    m1imgs[1] = loadImage("m1imgsss/s1.png");
    m1imgs[2] = loadImage("m1imgsss/s2.png");
    m1imgs[3] = loadImage("m1imgsss/s3.png");
    m1imgs[4] = loadImage("m1imgsss/s4.png");
    m1imgs[5] = loadImage("m1imgsss/s5.png");
    m1imgs[6] = loadImage("m1imgsss/s6.png");
    m1imgs[7] = loadImage("m1imgsss/s7.png");

    //m2dragable imgs
    m2imgs[0] = loadImage("m2imgsss/ss0.png");
    m2imgs[1] = loadImage("m2imgsss/ss1.png");
    m2imgs[2] = loadImage("m2imgsss/ss2.png");
    m2imgs[3] = loadImage("m2imgsss/ss3.png");
    m2imgs[4] = loadImage("m2imgsss/ss4.png");
    m2imgs[5] = loadImage("m2imgsss/ss5.png");
    m2imgs[6] = loadImage("m2imgsss/ss6.png");

    //m3dragable imgs
    m3imgs[0] = loadImage("m3imgsss/sss0.png");
    m3imgs[1] = loadImage("m3imgsss/sss1.png");
    m3imgs[2] = loadImage("m3imgsss/sss2.png");
    m3imgs[3] = loadImage("m3imgsss/sss3.png");
    m3imgs[4] = loadImage("m3imgsss/sss4.png");
    m3imgs[5] = loadImage("m3imgsss/sss5.png");
    m3imgs[6] = loadImage("m3imgsss/sss6.png");

    //m4dragable imgs
    m4imgs[0] = loadImage("m4imgsss/ssss0.png");
    m4imgs[1] = loadImage("m4imgsss/ssss1.png");
    m4imgs[2] = loadImage("m4imgsss/ssss2.png");
    m4imgs[3] = loadImage("m4imgsss/ssss3.png");
    m4imgs[4] = loadImage("m4imgsss/ssss4.png");
    m4imgs[5] = loadImage("m4imgsss/ssss5.png");

    //memory 2
    m2bg = loadImage("m2/bg22.JPG");
    lens2 = loadImage("m2/lens2.png");

    //memory 3
    m3bg = loadImage("m3/bg3.JPG");
    lens3 = loadImage("m3/lens3.png");

    //memory 4
    m4bg = loadImage("m4/bg4.JPG");
    lens4 = loadImage("m4/lens4.png");
    snowbun = loadImage("m4/tosnow.png");

    //end
    end = loadImage("ending/ending2.jpg");
    // end = loadImage("ending/end.jpg");
    end2 = loadImage("ending/ending2.jpg");
    snow = loadImage("ending/snow.png");
    home = loadImage("ending/home.png");
}



function setup() {
    createCanvas(600, 400);
    //noSmooth();
    //sound here
    // canvas = createCanvas(windowWidth, windowHeight);
    // canvas.position(windowWidth / 4, windowHeight / 4);
    sound = loadSound("landing/kokobgm.mp3");

    //snow loop
    for (let i = 0; i < 7; i++) {
        snowflakes.push(
            createVector(random(width), random(height), random(minSpeed, maxSpeed))
        );
    }
    for (let x = 0; x < width; x++) {
        ground[x] = height;
    }
    for (let y = 0; y < width; y++) {
        ground[y] = height;
    }

    //draggables
    //m1

    for (let i = 0; i < 8; i++) {
        let x = random(200, 400);
        let y = random(50, 350);
        let m1img = random(m1imgs);
        let w = m1imgs[i].width / 2;
        let h = m1imgs[i].height / 2;
        rectangles[i] = new Rectangle(x, y, w, h, m1img);
    }

    //m2
    for (let i = 0; i < 7; i++) {
        let x = random(200, 400);
        let y = random(50, 350);
        let m2img = random(m2imgs);
        let w = m2imgs[i].width / 1.5;
        let h = m2imgs[i].height / 1.5;
        rectangles1[i] = new Rectangle1(x, y, w, h, m2img);
    }

    //m3
    for (let i = 0; i < 7; i++) {
        let x = random(200, 400);
        let y = random(50, 350);
        let m3img = random(m3imgs);
        let w = m3imgs[i].width / 1.8;
        let h = m3imgs[i].height / 1.8;
        rectangles2[i] = new Rectangle2(x, y, w, h, m3img);
    }

    //m4
    for (let i = 0; i < 6; i++) {
        let x = random(200, 400);
        let y = random(50, 350);
        let m4img = random(m4imgs);
        let w = m4imgs[i].width / 1.5;
        let h = m4imgs[i].height / 1.5;
        rectangles3[i] = new Rectangle3(x, y, w, h, m4img);
    }

    //call the videos herererererer
    m1vid = createVideo(["m1/bg1vid.mp4"]);
    m1vid.size(600, 400);
    m1vid.loop();
    m1vid.hide();

    m2vid = createVideo(["m2/bg2vid.mp4"]);
    m2vid.size(600, 400);
    m2vid.loop();
    m2vid.hide();

    m3vid = createVideo(["m3/bg3vid.mp4"]);
    m3vid.size(600, 400);
    m3vid.loop();
    m3vid.hide();

    m4vid = createVideo(["m4/bg6vid.mp4"]);
    m4vid.size(600, 400);
    m4vid.loop();
    m4vid.hide();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     canvas.position(windowWidth / 4, windowHeight / 4);
// }

function draw() {
    background(0);

    //场景开关
    if (scene == 0) {
        landing();
    } else if (scene == 1) {
        memory1();
    } else if (scene == 2) {
        memory2();
    } else if (scene == 3) {
        memory3();
    } else if (scene == 4) {
        memory4();
    } else if (scene == 5) {
        ends();
    }

    //m1 fragments
    if (m1tex_newS[0]) {}
    for (let i = 0; i < m1tex_newS.length; i++) {
        m1tex_newS[i].show();
    }
    //m2 fragments
    if (m2tex_newS[0]) {}
    for (let i = 0; i < m2tex_newS.length; i++) {
        m2tex_newS[i].show();
    }

    //m3 fragments
    if (m3tex_newS[0]) {}
    for (let i = 0; i < m3tex_newS.length; i++) {
        m3tex_newS[i].show();
    }

    //m4 fragments
    if (m4tex_newS[0]) {}
    for (let i = 0; i < m4tex_newS.length; i++) {
        m4tex_newS[i].show();
    }
}

function landing() {
    //window
    if (mouseX >= 93 && mouseX <= 470 && mouseY >= 335 && mouseY <= 360) {
        cursor("pointer");
    } else {
        cursor("cursor.png");
    }
    image(wind, 50, 50);
    wind.resize(30, 85);
    line(55, 220, 55, 350);
    line(110, 58, 555, 350);
    stroke(190);
    strokeWeight(0.6);

    //botton enter
    push();
    //radialGradient(300, 300, 0, 300, 300, 160, color(255), color(0));
    drawingContext.filter = "blur(7px)";
    fill(190, 190, 190, 120);
    ellipse(300, 350, 400, 18);
    noStroke();
    pop();

    //text
    push();
    noStroke();
    fill(255);
    rect(68, 285, 33, 7);
    textSize(6);
    textFont("Courier");

    fill(0);
    let a = "Memories";
    text(a, 70, 290);
    fill(255);
    let b = "are like";
    text(b, 70, 290 + 8);
    let c = "ai generated images,";
    text(c, 70, 298 + 8);
    let d = "always echoing the feelings";
    text(d, 70, 298 + 8 + 8);
    let e = "without a clear vision.";
    text(e, 70, 298 + 8 + 8 + 8);

    textSize(7);
    let f = "can I take a peek?";
    text(f, 260, 352);
    pop();

    //eyes
    stroke(255);
    noFill();
    ellipse(283, 325, 16, 7);
    ellipse(307, 325, 16, 7);

    fill(220);
    let x1 = map(mouseX, 0, 600, 280, 287);
    ellipse(x1, 325, 6, 6);
    let x2 = map(mouseX, 0, 600, 304, 312);
    ellipse(x2, 325, 6, 6);
}

function memory1() {
    //过渡加在这里
    //set
    let m1vidbg = m1vid.get();
    image(m1vidbg, 0, 0, 600, 400);

    //draggable
    push();
    for (i = 0; i < rectangles.length; i++) {
        rectangles[i].show(mouseX, mouseY);
    }
    pop();

    image(lens, 0, 0, 600, 400);
    line(600 - 35, 25, 600 - 35, 375);
    line(35, 25, 35, 375);
    //drag drop
    // push();
    // blendMode(MULTIPLY);
    // image(m1cloud, cX, cY, 80, 100);
    // pop();

    //下一幕按钮
    //ellipse(540,350,20)
    image(nex, 526, 350);
    nex.resize(26, 10);
    push();
    noStroke();
    textSize(7);
    textFont("Courier");
    text("click?", 528, 370);
    //promts
    //fragment 按钮
    image(pointer, 53, 38);
    pointer.resize(15, 18);
    fill(255);
    rect(40, 26, 40, 9);
    fill(0);
    text("fragments", 41, 33);

    //save the memory?按钮
    image(own, 534, 40);
    own.resize(18, 16);
    fill(255);
    rect(526, 26, 33, 9);
    fill(0);
    text("own it?", 528, 33);
    pop();
}

function memory2() {
    background(0);
    let m2vidbg = m2vid.get();
    image(m2vidbg, 0, 0, 600, 400);

    //draggable
    push();
    // blendMode(MULTIPLY);
    for (i = 0; i < rectangles1.length; i++) {
        rectangles1[i].show(mouseX, mouseY);
    }
    pop();

    image(lens2, 0, 0, 600, 400);
    line(600 - 35, 25, 600 - 35, 375);
    line(35, 25, 35, 375);

    //下一幕按钮
    //ellipse(540,350,20)
    image(nex, 526, 350);
    nex.resize(26, 10);
    push();
    noStroke();
    textSize(7);
    textFont("Courier");
    text("click?", 528, 370);

    //fragment 按钮
    image(pointer, 53, 38);
    pointer.resize(15, 18);
    fill(255);
    rect(40, 26, 40, 9);
    fill(0);
    text("fragments", 41, 33);

    //save the memory?按钮
    image(own, 534, 40);
    own.resize(18, 16);
    fill(255);
    rect(526, 26, 33, 9);
    fill(0);
    text("own it?", 528, 33);
    pop();
}

function memory3() {
    background(0);
    let m3vidbg = m3vid.get();
    //draggable

    image(m3vidbg, 0, 0, 600, 400);
    push();
    for (i = 0; i < rectangles2.length; i++) {
        rectangles2[i].show(mouseX, mouseY);
    }
    pop();
    image(lens3, 0, 0, 600, 400);
    line(600 - 35, 25, 600 - 35, 375);
    line(35, 25, 35, 375);

    //下一幕按钮
    //ellipse(540,350,20)
    image(nex, 526, 350);
    nex.resize(26, 10);
    push();
    noStroke();
    textSize(7);
    textFont("Courier");
    text("click?", 528, 370);
    image(pointer, 53, 38);
    pointer.resize(15, 18);

    //fragments
    fill(255);
    rect(40, 26, 40, 9);
    fill(0);
    text("fragments", 41, 33);

    //save the memory?按钮
    image(own, 534, 40);
    own.resize(18, 16);
    fill(255);
    rect(526, 26, 33, 9);
    fill(0);
    text("own it?", 528, 33);
    pop();
}

function memory4() {
    background(0);
    let m4vidbg = m4vid.get();
    image(m4vidbg, 0, 0, 600, 400);

    //draggable
    push();
    for (i = 0; i < rectangles3.length; i++) {
        rectangles3[i].show(mouseX, mouseY);
    }
    pop();

    image(lens4, 0, 0, 600, 400);
    line(600 - 35, 25, 600 - 35, 375);
    line(35, 25, 35, 375);

    //下一幕按钮
    //ellipse(540,350,20)
    image(snowbun, 526, 335);
    snowbun.resize(25, 25);
    push();
    noStroke();
    textSize(7);
    textFont("Courier");
    text("snow bunny", 518, 370);
    image(pointer, 53, 38);
    pointer.resize(15, 18);

    //fragments
    fill(255);
    rect(40, 26, 40, 9);
    fill(0);
    text("fragments", 41, 33);

    //save the memory?按钮
    image(own, 534, 40);
    own.resize(18, 16);
    fill(255);
    rect(526, 26, 33, 9);
    fill(0);
    text("own it?", 528, 33);
    pop();
}

function ends() {
    background(0);

    push();
    // drawingContext.filter = "blur(2px)";
    // blendMode(LIGHTEST);
    image(end2, 0, 0, 600, 400);
    tint(255, 120);
    image(end, 0, 0, 600, 400);
    pop();
    ellipse(355, 260, 19, 3);
    image(snow, 335, 236, 27, 27);

    image(home, 10, 10, 22, 15);
    //snow

    for (const snowflake of snowflakes) {
        snowflake.y += snowflake.z;
        if (mouseX >= 320 && mouseX <= 360 && mouseY >= 220 && mouseY <= 260) {
            noStroke();
            textSize(8);
            textFont("Courier");
            text("pet me", 335, 235);
            rect(snowflake.x, snowflake.y, 2, 2);
        }

        if (snowflake.y >= ground[floor(snowflake.x)]) {
            ground[floor(snowflake.x)]--;

            snowflake.x = random(width);
            snowflake.y = 0;
        }
    }
    for (let x = 0; x < width; x++) {
        ellipse(x, ground[x], 1, height - ground[x]);
    }
}

//m1
//button add text function 按钮加字
function m1Text() {
    m1tex_newS.push(m1texs[num_]);
    for (let i = 0; i < m1tex_newS.length; i++) {
        m1tex_newS[i] = new m1tex(i);
    }
    num_++;
}
class m1tex {
    constructor(num_) {
        this.x = 40;
        this.y = 10;
        this.num_ = num_;
    }
    show() {
        console.log("show " + m1texs[this.num_]);
        if (scene == 1) {
            push();
            noStroke();
            textSize(7);
            textFont("Courier");
            text(m1texs[this.num_], this.x, this.y * this.num_ + 300);
            pop();
        }
    }
}

//m2
//button add text function 按钮加字
function m2Text() {
    m2tex_newS.push(m2texs[num_]);
    for (let i = 0; i < m2tex_newS.length; i++) {
        m2tex_newS[i] = new m2tex(i);
    }
    num_++;
}
class m2tex {
    constructor(num_) {
        this.x = 40;
        this.y = 10;
        this.num_ = num_;
    }
    show() {
        console.log("show " + m2texs[this.num_]);
        if (scene == 2) {
            push();
            noStroke();
            textSize(7);
            textFont("Courier");
            text(m2texs[this.num_], this.x, this.y * this.num_ + 290);
            pop();
        }
    }
}

//m3
//button add text function 按钮加字
function m3Text() {
    m3tex_newS.push(m3texs[num_]);
    for (let i = 0; i < m3tex_newS.length; i++) {
        m3tex_newS[i] = new m3tex(i);
    }
    num_++;
}
class m3tex {
    constructor(num_) {
        this.x = 40;
        this.y = 10;
        this.num_ = num_;
    }
    show() {
        console.log("show " + m3texs[this.num_]);
        if (scene == 3) {
            push();
            noStroke();
            textSize(7);
            textFont("Courier");
            text(m3texs[this.num_], this.x, this.y * this.num_ + 290);
            pop();
        }
    }
}

//m4
//button add text function 按钮加字
function m4Text() {
    m4tex_newS.push(m4texs[num_]);
    for (let i = 0; i < m4tex_newS.length; i++) {
        m4tex_newS[i] = new m4tex(i);
    }
    num_++;
}
class m4tex {
    constructor(num_) {
        this.x = 40;
        this.y = 10;
        this.num_ = num_;
    }
    show() {
        console.log("show " + m4texs[this.num_]);
        if (scene == 4) {
            push();
            noStroke();
            textSize(7);
            fill(220);
            textFont("Courier");
            text(m4texs[this.num_], this.x, this.y * this.num_ + 270);
            pop();
        }
    }
}

function mousePressed() {
    //landing enter按钮
    if (scene == 0) {
        if (mouseX >= 93 && mouseX <= 470 && mouseY >= 335 && mouseY <= 360) {
            scene++;
            sound.play();
            console.log(scene);
        }
    }

    //记忆进入按钮
    if (mouseX >= 520 && mouseX <= 560 && mouseY >= 330 && mouseY <= 400) {
        if (scene < 5) {
            scene++;
            console.log(scene);
        }
    }

    //fragments 按钮
    if (mouseX >= 30 && mouseX <= 90 && mouseY >= 25 && mouseY <= 40) {
        if (scene == 1) {
            m1Text();
        } else if (scene == 2) {
            m2Text();
        } else if (scene == 3) {
            m3Text();
        } else if (scene == 4) {
            m4Text();
        }
    }

    //记忆储存截图按钮
    if (mouseX >= 520 && mouseX <= 560 && mouseY >= 20 && mouseY <= 50) {
        if (scene == 1) {
            saveCanvas("iPeeked1n1", "jpg");
        } else if (scene == 2) {
            saveCanvas("iPeeked2w2", "jpg");
        } else if (scene == 3) {
            saveCanvas("iPeeked3o3", "jpg");
        } else if (scene == 4) {
            saveCanvas("iPeeked4-4", "jpg");
        }
    }

    if (mouseX >= 5 && mouseX <= 30 && mouseY >= 5 && mouseY <= 30) {
        scene = 0;
    }

    if (scene == 1) {
        for (i = 0; i < 8; i++) {
            rectangles[i].pressed(mouseX, mouseY);
        }
    } else if (scene == 2) {
        for (i = 0; i < 7; i++) {
            rectangles1[i].pressed(mouseX, mouseY);
        }
    } else if (scene == 3) {
        for (i = 0; i < 7; i++) {
            rectangles2[i].pressed(mouseX, mouseY);
        }
    } else if (scene == 4) {
        for (i = 0; i < 6; i++) {
            rectangles3[i].pressed(mouseX, mouseY);
        }
    }
}

function mouseReleased() {
    if (scene == 1) {
        for (i = 0; i < 8; i++) {
            rectangles[i].notPressed();
        }
    } else if (scene == 2) {
        for (i = 0; i < 7; i++) {
            rectangles1[i].notPressed();
        }
    } else if (scene == 3) {
        for (i = 0; i < 7; i++) {
            rectangles2[i].notPressed();
        }
    } else if (scene == 4) {
        for (i = 0; i < 6; i++) {
            rectangles3[i].notPressed();
        }
    }
}

class Rectangle {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.m1img = img;

        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
    }

    show(px, py) {
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
            print("yes");
        }

        stroke(255);
        noFill();
        // rect(this.x, this.y, this.w, this.h);

        image(m1imgs[i], this.x, this.y, this.w, this.h);

    }

    pressed(px, py) {
        if (
            px > this.x &&
            px < this.x + this.w &&
            py > this.y &&
            py < this.y + this.h
        ) {
            print("clicked on rect");
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }

    notPressed() {
        print("mouse was released");
        this.dragging = false;
    }
}
class Rectangle1 {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.m2img = img;

        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
    }

    show(px, py) {
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
            print("yes");
        }

        stroke(255);
        noFill();
        // rect(this.x, this.y, this.w, this.h);

        image(m2imgs[i], this.x, this.y, this.w, this.h);

    }

    pressed(px, py) {
        if (
            px > this.x &&
            px < this.x + this.w &&
            py > this.y &&
            py < this.y + this.h
        ) {
            print("clicked on rect");
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }

    notPressed() {
        print("mouse was released");
        this.dragging = false;
    }
}
class Rectangle2 {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.m3img = img;

        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
    }

    show(px, py) {
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
            print("yes");
        }

        stroke(255);
        noFill();
        // rect(this.x, this.y, this.w, this.h);

        image(m3imgs[i], this.x, this.y, this.w, this.h);

    }

    pressed(px, py) {
        if (
            px > this.x &&
            px < this.x + this.w &&
            py > this.y &&
            py < this.y + this.h
        ) {
            print("clicked on rect");
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }

    notPressed() {
        print("mouse was released");
        this.dragging = false;
    }
}
class Rectangle3 {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.m4img = img;

        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
    }

    show(px, py) {
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
            print("yes");
        }

        stroke(255);
        noFill();
        // rect(this.x, this.y, this.w, this.h);

        image(m4imgs[i], this.x, this.y, this.w, this.h);

    }

    pressed(px, py) {
        if (
            px > this.x &&
            px < this.x + this.w &&
            py > this.y &&
            py < this.y + this.h
        ) {
            print("clicked on rect");
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }

    notPressed() {
        print("mouse was released");
        this.dragging = false;
    }
}