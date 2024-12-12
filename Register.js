import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

function Register() {
    let [userid, setUserid] = useState("");
    let [userpassword, setUserpassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [username, setUsername] = useState("");
    let [age, setAge] = useState("");
    let [idMessage, setidMessage] = useState("");
    let [pwMessage, setpwMessage] = useState("");
    let [nameMessage, setNameMessage] = useState("");
    let [ageMessage, setAgeMessage] = useState("");
    let [ResultMessage, setResultMessage] = useState("");

    function checkPasswordMatch() {
        if (userpassword !== confirmPassword) {
            setpwMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setpwMessage("비밀번호가 일치합니다.");
        }
    }

    function validateName() {
        if (username.length < 3) {
            setNameMessage("3글자 이상으로 입력해주세요.");
        } else {
            setNameMessage("3글자 이상입니다.");
        }
    }

    function validateAge() {
        const ageNum = parseInt(age);
        if (ageNum < 20 || ageNum >= 130) {
            setAgeMessage("20살 이상 130살 미만으로 입력해주세요.");
        } else {
            setAgeMessage("적정 나이");
        }
    }

    function checkId() {
        axios
            .get(`http://localhost:8005/idcheck/${userid}`)
            .then((res) => {
                if (res.data.ok) {
                    setidMessage("사용가능한 아이디입니다.");
                } else {
                    setidMessage("존재하는 아이디 입니다.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setidMessage("서버 오류 발생");
            });
    }

    function signUp() {
        const ageNum = parseInt(age);
        if (username.length < 3 || ageNum < 20 || ageNum >= 130) {
            return;
        }

        axios
            .get(`http://localhost:8005/signup/${userid}/${userpassword}/${username}/${age}`)
            .then((res) => {
                if (res.data.ok) {
                    setResultMessage("회원가입 성공!");
                } else {
                    setResultMessage("회원가입 실패: 아이디가 이미 존재합니다.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setResultMessage("서버 오류 발생");
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <label>ID</label>
                <input
                    type="text"
                    id="input_userid"
                    onChange={(event) => setUserid(event.target.value)}
                />
                <button onClick={checkId}>중복 체크</button>
                <p>{idMessage}</p>

                <label>Password</label>
                <input
                    type="password"
                    id="input_userpassword"
                    onChange={(event) => {
                        setUserpassword(event.target.value);
                    }}
                />
                <label>Password Check</label>
                <input
                    type="password"
                    id="input_confirm_password"
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                    }}
                />
                <button onClick={checkPasswordMatch}>Password Check</button>
                <p>{pwMessage}</p>

                <label>이름</label>
                <input
                    type="text"
                    id="input_username"
                    onChange={(event) => {
                        setUsername(event.target.value);
                        validateName();
                    }}
                />
                <p>{nameMessage}</p>

                <label>나이</label>
                <input
                    type="number"
                    id="input_age"
                    onChange={(event) => {
                        setAge(event.target.value);
                        validateAge();
                    }}
                />
                <p>{ageMessage}</p>
                <button onClick={signUp}>회원가입</button>
                <p>{ResultMessage}</p>
            </header>
        </div>
    );
}

export default Register;
