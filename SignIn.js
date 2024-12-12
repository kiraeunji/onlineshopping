import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';

function SignIn() {
    let [id, setId] = useState("");
    let [pass, setPass] = useState("");
    let [login, setLogin] = useState("");
    let [info, setInfo] = useState("");
    let [currentPass, setCurrentPass] = useState("");
    let [passRightSee, setPassRightSee] = useState("");
    let [newPass, setNewPass] = useState("");
    let [updateSee, setUpdateSee] = useState("");

    function logout() {
        console.log("현재 ID 값:", id);
        axios.delete(`http://localhost:8005/users/${id}`)
            .then((res) => {
                if (res.data.ok) {
                    alert('회원 탈퇴가 되었습니다.');
                    setId('');
                    setPass('');
                    setLogin('');
                    setInfo('');
                } else {
                    alert('회원 탈퇴에 실패했습니다.');
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert('서버 오류 발생');
            });
    }
    

    function handleLogin() {
        axios.get(`http://localhost:8005/login/${id}/${pass}`)
            .then((res) => {
                if (res.data.ok) {
                    setLogin("로그인에 성공하셨습니다.");
                    setInfo(res.data.user);
                } else {
                    setLogin("로그인에 실패하셨습니다.");
                    setInfo(null);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setLogin("서버 오류 발생");
            });
    }

    function PassChange() {
        axios.get(`http://localhost:8005/changepw/${id}/${currentPass}/${newPass}`)
            .then((res) => {
                if (res.data.ok) {
                    setUpdateSee("비밀번호 변경 성공!");
                    setPassRightSee("");
                } else {
                    setUpdateSee("비밀번호 변경 실패: 현재 비밀번호가 일치하지 않습니다.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setUpdateSee("서버 오류 발생");
            });
    }

    return (
        <div className="App">
            <h3>로그인 및 정보 확인</h3>
            <p>ID</p>
            <input
                type="text"
                value={id}
                onChange={(event) => {
                    setId(event.target.value);
                }}
            />
            <p>PW</p>
            <input
                type="password"
                value={pass}
                onChange={(event) => {
                    setPass(event.target.value);
                }}
            />
            <p>
                <button onClick={handleLogin}>로그인</button>
            </p>
            {login}
            {info && (
                <div>
                    <h3>개인 정보</h3>
                    <h3>이름: {info.name}</h3>
                    <h3>나이: {info.age}</h3>

                    <h3>비밀번호 변경</h3>
                    <div>
                        <p>1차 비밀번호</p>
                        <input
                            type="password"
                            value={currentPass}
                            onChange={(event) => {
                                let enteredPassword = event.target.value;
                                setCurrentPass(enteredPassword);
                                if (enteredPassword === info.pw) {
                                    setPassRightSee("일치합니다.");
                                } else {
                                    setPassRightSee("불일치합니다.");
                                }
                            }}
                        />
                        <p>{passRightSee}</p>
                    </div>
                    <div>
                        <p>2차 비밀번호</p>
                        <input
                            type="password"
                            value={newPass}
                            onChange={(event) => setNewPass(event.target.value)}
                        />
                    </div>
                    <button onClick={PassChange}>비밀번호 변경</button>
                    <p>{updateSee}</p>
                    <button onClick={logout}>회원 탈퇴</button>
                </div>
            )}
        </div>
    );
}

export default SignIn;
