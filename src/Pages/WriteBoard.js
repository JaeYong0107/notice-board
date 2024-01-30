import axios from "axios";
import { useEffect, useState } from "react";
const WriteBoard = () => {

    const SERVER_URL = 'http://localhost:4000/api/board';
    const selectList = ["a", "b", "c"];
    const [Selected, setSelected] = useState("");
    const [Board, setBoard] = useState(null);

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const fetchData = async () => {
        const response = await axios(SERVER_URL);
        setBoard(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    const onAddBoard = async (e) => {
        const category = e.target.category.value;
        const title = e.target.title.value;
        const text = e.target.text.value;
        axios.post(SERVER_URL, { category, title, text });
        fetchData();
    };


    return (
        <form className="WriteBoard" onSubmit={onAddBoard} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 3, padding: 5 + 'px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <label style={{ width: 5 + 'vw', margin: 10 }}>카테고리</label>
                        <select name='category' onClick={handleSelect} value={Selected} style={{ width: 5 + 'vw' }}>
                            {selectList.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <label style={{ width: 5 + 'vw', margin: 10 }}>제목</label>
                        <input name='title' type="text" style={{ width: 40 + 'vw' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: 20 + 'vw' }}>
                    < button style={{ width: 5 + 'vw', height: 5 + 'vh' }}>등록</button>
                </div>
            </div >
            <textarea name='text' style={{ margin: 10, height: 60 + 'vh' }} />
        </form >
    )
}

export default WriteBoard;