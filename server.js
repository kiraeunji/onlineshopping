const express = require('express');
const path = require('path'); 
const cors = require('cors');
const app = express();
const PORT = 8005;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

let userdata = [
    { id: 'test', pw: 'test', name: 'test', age: '23' },
];


const products = [
    { 
        id: 1,
        name: "블랑쉬",
        image: "/images/perfume.png",
        description: "바이레도",
        price: 420000,
    },
    { 
        id: 2,
        name: "도손 오드뚜알렛",
        image: "/images/perfume1.png",
        description: "딥디크",
        price: 241000,
    },
    { 
        id: 3,
        name: "리브르 오 드 빠르펭",
        image: "/images/perfume2.webp",
        description: "입생로랑",
        price: 205000,
    },
    {
        id: 4,
        name: "잉글리쉬 페어 앤 프리지아",
        image: "/images/perfume3.png",
        description: "조말론",
        price: 235000,
    },
    {
        id: 5,
        name: "씨 인텐스",
        image: "/images/si.png",
        description: "조르지오 아르마니",
        price: 184000,
    },
    {
        id: 6,
        name: "넘버 5",
        image: "/images/number5.avif",
        description: "샤넬",
        price: 275000,
    },
    {
        id: 7,
        name: "오드우드",
        image: "/images/tomford.webp",
        description: "톰포드",
        price: 310000,
    },
    {
        id: 8,
        name: "보이드우드",
        image: "/images/voidwood.jpeg",
        description: "에이딕트",
        price: 63000,
    },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = userdata.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).send({ ok: false, message: "사용자를 찾을 수 없습니다." });
    }

    userdata.splice(userIndex, 1);
    res.send({ ok: true, message: "회원탈퇴가 완료되었습니다." });
});

app.get('/idcheck/:id', (req, res) => {
    const id = req.params.id;
    const exists = userdata.some(user => user.id === id);
    res.send({ ok: !exists });
});


app.get('/signup/:id/:pw/:name/:age', (req, res) => {
    const { id, pw, name, age } = req.params;
    const exists = userdata.some(user => user.id === id);

    if (exists) {
        return res.send({ ok: false, message: "아이디가 이미 존재합니다." });
    }

    userdata.push({ id, pw, name, age });
    res.send({ ok: true, message: "회원가입 성공!" });
});

app.get('/login/:id/:pw', (req, res) => {
    const { id, pw } = req.params;
    const user = userdata.find(user => user.id === id && user.pw === pw);

    if (user) {
        res.send({ ok: true, user });
    } else {
        res.send({ ok: false, message: "아이디 또는 비밀번호가 잘못되었습니다." });
    }
});

app.get('/changepw/:id/:pw', (req, res) => {
    const { id, pw } = req.params;
    const user = userdata.find(user => user.id === id);

    if (user) {
        user.pw = pw;
        res.send({ ok: true, message: "비밀번호 변경 성공!" });
    } else {
        res.send({ ok: false, message: "사용자를 찾을 수 없습니다." });
    }
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
}); 