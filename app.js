const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.send(`
        <html>
            <head>
                <title>wideHangulClock</title>
                <link rel="stylesheet" href="clockStyle.css"></link>
                <meta charset="utf-8"/>
            </head>
            <body>
                <script src="wideHangulClock.js"></script>
                <p>Wide Hangul Clock</p>
                <article>
                    <div id="0">오</div>
                    <div id="1">전</div>
                    <div id="2">후</div>
                    <div id="3">열</div>
                    <div id="4">한</div>
                    <div id="5">두</div>
                    <div id="6">다</div>
                    <div id="7">여</div>
                    <div id="8">섯</div>
                    <div id="9">세</div>
                    <div id="10">네</div>
                    <div id="11">일</div>
                    <div id="12">곱</div>
                    <div id="13">여</div>
                    <div id="14">덟</div>
                    <div id="15">아</div>
                    <div id="16">홉</div>
                    <div id="17">시</div>
                    <div id="18">오</div>
                    <div id="19">사</div>
                    <div id="20">삼</div>
                    <div id="21">이</div>
                    <div id="22">십</div>
                    <div id="23">구</div>
                    <div id="24">팔</div>
                    <div id="25">칠</div>
                    <div id="26">육</div>
                    <div id="27">오</div>
                    <div id="28">사</div>
                    <div id="29">삼</div>
                    <div id="30">이</div>
                    <div id="31">일</div>
                    <div id="32">정</div>
                    <div id="33">각</div>
                    <div id="34">반</div>
                    <div id="35">분</div>
                </article>
            </body>
        </html>
    `);//DO NOT TRY THIS AT HOME
});

app.use(express.static('./public'));

app.listen(port, () => {
    console.log("server is running!");
});