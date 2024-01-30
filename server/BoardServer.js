const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const board_list = [{
    id: 1,
    category: '전체',
    title: '첫 번째 타이틀',
    text: '안녕하세요 이재용입니다^^'
}];

app.get('/api/board', (req, res) => {
    res.json(board_list);
})

app.post('/api/board', (req, res) => {
    const { category, title, text } = req.body;
    board_list.push({
        id: id++,
        category: category,
        title,
        text,
    });
    return res.send('success');
})

app.listen(4000, () => {
    console.log('server start');
});